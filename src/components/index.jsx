import { useGameLogic } from "../hooks/useGameLogic";
import { GameTitle } from "./GameTitle";
import { ScoreBoard } from "./ScoreBoard";
import { ColorBox } from "./ColorBox";
import { ColorOptions } from "./ColorOptions";
import { StatusMessage } from "./StatusMessage";
import { GameControls } from "./GameControls";

const ColorGame = () => {
  const game = useGameLogic();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-2 sm:p-4 md:p-8">
      <div className="mx-auto bg-white rounded-xl shadow-lg p-4 sm:p-6 max-w-sm sm:max-w-md">
        <section className="flex flex-col gap-4">
          <GameTitle />

          <ColorBox color={game.targetColor} isAnimating={game.isAnimating} />

          <ScoreBoard
            score={game.score}
            highScore={game.highScore}
            streak={game.streak}
            timeLeft={game.timeLeft}
          />

          <StatusMessage
            status={game.gameStatus}
            show={game.showStatus}
            streak={game.streak}
          />
        </section>

        <section className="mt-6 flex flex-col gap-4">
          <ColorOptions
            colors={game.options}
            onGuess={game.handleGuess}
            disabled={game.isAnimating}
          />

          <GameControls
            onNewGame={game.resetGame}
            onReset={game.startNewGame}
          />
        </section>
      </div>
    </div>
  );
};

export default ColorGame;
