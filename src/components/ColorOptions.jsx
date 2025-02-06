/* eslint-disable react/prop-types */
export const ColorOptions = ({ colors, onGuess, disabled }) => (
  <div className="grid grid-cols-3 md:grid-cols-3 gap-4">
    {colors.map((color, index) => (
      <button
        key={index}
        data-testid="colorOption"
        className="aspect-square rounded-lg shadow hover:shadow-lg 
                     transform hover:scale-105 transition-all duration-200 
                     active:scale-95 cursor-pointer disabled:cursor-not-allowed"
        style={{ backgroundColor: color }}
        onClick={() => !disabled && onGuess(color)}
        disabled={disabled}
      />
    ))}
  </div>
);
