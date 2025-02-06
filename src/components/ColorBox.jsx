/* eslint-disable react/prop-types */
export const ColorBox = ({ color, isAnimating }) => (
  <div
    data-testid="colorBox"
    className={`relative aspect-square h-[40px] max-w-[300px] mx-auto rounded-lg shadow-md
                  transition-all duration-300 ${
                    isAnimating ? "scale-95 opacity-80" : ""
                  }`}
    style={{ backgroundColor: color }}
  />
);
