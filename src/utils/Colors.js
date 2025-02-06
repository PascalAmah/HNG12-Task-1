export const generateRandomColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
};

export const generateOptions = (correctColor) => {
  const options = [correctColor];
  while (options.length < 6) {
    const newColor = generateRandomColor();
    if (!options.includes(newColor)) {
      options.push(newColor);
    }
  }
  return options.sort(() => Math.random() - 0.5);
};
