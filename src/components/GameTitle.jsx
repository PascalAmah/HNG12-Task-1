export const GameTitle = () => (
  <div className="text-center">
    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
      Color Game
    </h1>
    <div data-testid="gameInstructions" className="text-gray-600 mt-2">
      Can you guess the correct color? Click on the matching color below!
    </div>
  </div>
);
