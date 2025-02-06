import { useState, useEffect, useCallback, useRef } from "react";
import { generateRandomColor, generateOptions } from "../utils/Colors";

export const useGameLogic = () => {
  const [targetColor, setTargetColor] = useState("");
  const [options, setOptions] = useState([]);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [gameStatus, setGameStatus] = useState("");
  const [showStatus, setShowStatus] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [streak, setStreak] = useState(0);
  const [timeLeft, setTimeLeft] = useState(5);
  const timerRef = useRef(null);

  const clearGameTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  const startTimer = useCallback(() => {
    setTimeLeft(5);
    clearGameTimer();

    timerRef.current = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearGameTimer();
          setShowStatus(true);
          setGameStatus("timeout");
          setStreak(0);

          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);
  }, []);

  const startNewGame = useCallback(() => {
    setIsAnimating(true);
    const newColor = generateRandomColor();
    setTargetColor(newColor);
    setOptions(generateOptions(newColor));
    setGameStatus("");
    setShowStatus(false);
    setTimeout(() => {
      setIsAnimating(false);
      startTimer();
    }, 300);
  }, [startTimer]);

  const handleGuess = useCallback(
    (color) => {
      clearGameTimer();
      setShowStatus(true);
      if (color === targetColor) {
        setScore((prev) => prev + 1);
        setStreak((prev) => prev + 1);
        setGameStatus("success");
        setTimeout(startNewGame, 1000);
      } else {
        setGameStatus("error");
        setStreak(0);
        setTimeout(() => {
          setScore(0);
          startNewGame();
        }, 1000);
      }
    },
    [targetColor, startNewGame]
  );

  const resetGame = useCallback(() => {
    clearGameTimer();
    setScore(0);
    setStreak(0);
    startNewGame();
  }, [startNewGame]);

  // Initialize the game and load high score
  useEffect(() => {
    startNewGame();
    const savedHighScore = localStorage.getItem("colorGameHighScore");
    if (savedHighScore) {
      setHighScore(parseInt(savedHighScore));
    }
    return () => clearGameTimer();
  }, [startNewGame]);

  // Update high score
  useEffect(() => {
    if (score > highScore) {
      setHighScore(score);
      localStorage.setItem("colorGameHighScore", score.toString());
    }
  }, [score, highScore]);

  return {
    targetColor,
    options,
    score,
    highScore,
    gameStatus,
    showStatus,
    isAnimating,
    streak,
    timeLeft,
    handleGuess,
    startNewGame,
    resetGame,
  };
};
