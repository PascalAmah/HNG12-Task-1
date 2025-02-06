/* eslint-disable react/prop-types */
export const GameControls = ({ onNewGame, onReset }) => (
  <div className="space-y-4">
    <button
      data-testid="newGameButton"
      onClick={onNewGame}
      className="w-full py-3 px-4 bg-blue-500 text-white rounded-lg 
                   hover:bg-blue-600 transition-colors font-semibold"
    >
      New Game
    </button>

    <button
      onClick={onReset}
      className="w-full py-2 px-4 bg-gray-200 text-gray-700 rounded-lg 
                   hover:bg-gray-300 transition-colors font-medium"
    >
      Reset Colors
    </button>
  </div>
);
