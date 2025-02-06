/* eslint-disable react/prop-types */
export const ScoreBoard = ({ score, highScore, streak, timeLeft }) => (
  <div className="flex flex-col items-center gap-2">
    <div className="flex justify-between items-center w-full px-4">
      <div data-testid="score" className="text-lg font-semibold">
        Score: {score}
      </div>

      <div
        className={`text-xl font-bold ${
          timeLeft <= 2 ? "text-red-500" : "text-gray-700"
        }`}
      >
        {timeLeft}s
      </div>

      <div className="flex items-center gap-2">
        <span className="font-semibold">Best: {highScore}</span>
      </div>
    </div>
    {streak > 0 && (
      <div className="text-green-500 font-semibold">Streak: {streak}</div>
    )}
  </div>
);
