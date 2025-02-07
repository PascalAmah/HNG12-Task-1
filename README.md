# Color Game 🎨

A fun and challenging color guessing game built with React and Tailwind CSS. Test your ability to identify the correct color from multiple options while racing against time.

## Features

- Dynamic color generation and matching
- Score tracking system with high scores
- Streak counter for consecutive correct guesses
- Responsive design (mobile, tablet, and desktop)
- Timer-based gameplay
- Animated color transitions
- Game status feedback

## Installation

1. Clone the repository:

```bash
git clone https://github.com/PascalAmah/HNG12-Task-1.git
```

2. Install dependencies:

```bash
cd color-game
npm install
```

3. Start the development server:

```bash
npm run dev
```

## How to Play

1. A target color will be displayed at the top of the screen
2. Choose the matching color from the options below
3. Score points for correct guesses and build your streak
4. Try to beat your high score before time runs out!

## Tech Stack

- React
- Tailwind CSS
- Vite

## Component Structure

- `ColorGame`: Main game container
- `GameTitle`: Game header
- `ColorBox`: Displays the target color
- `ScoreBoard`: Shows current score, high score, and streak
- `ColorOptions`: Displays color choices
- `StatusMessage`: Provides game feedback
- `GameControls`: New game and reset buttons

## Game Logic

The game uses the `useGameLogic` custom hook to manage:

- Color generation and validation
- Score tracking
- Timer functionality
- Game state management
- Animation states

## Contributing

Feel free to submit issues and enhancement requests. Follow these steps to contribute:

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License

MIT License - feel free to use this project for learning or personal use.
