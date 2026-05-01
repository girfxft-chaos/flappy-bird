# First-Person Flappy Bird 🎮

An immersive first-person 3D take on the classic Flappy Bird game, built with **Babylon.js** WebGL engine.

## Features

✨ **First-Person Perspective** - Experience the game from inside a 3D world  
🎨 **Full 3D Graphics** - Dynamic environments with sky, ground, and detailed obstacles  
🎯 **Progressive Difficulty** - Game speed and pipe spacing increase as you score  
🕹️ **Smooth Controls** - Responsive flap mechanics with multiple input methods  
📊 **Score Tracking** - Keep track of your best performance  
🎮 **Restart Functionality** - Play again with one click

## How to Play

1. **Open** `index.html` in your web browser
2. **Flap** by pressing:
   - **SPACEBAR**
   - **Mouse Click**
   - **Touch** (on mobile devices)
3. **Navigate** through the green pipe gaps
4. **Avoid** hitting the pipes, ground, or ceiling
5. **Score** 1 point for each pipe successfully passed

## Game Mechanics

### Physics
- Continuous gravity pulls the player downward
- Each flap provides an upward velocity boost
- Realistic inertia and momentum

### Obstacles
- Randomly generated pipes with variable gap sizes
- Pipes spawn progressively faster as difficulty increases
- Gap positioning varies to keep gameplay challenging

### Collision Detection
- Real-time collision checking against pipes, ground, and ceiling
- Instant game over on impact
- Final score displayed on game over screen

## Technical Stack

- **Engine**: Babylon.js 5.0+ (WebGL 3D rendering)
- **Language**: Vanilla JavaScript (ES6)
- **Graphics**: 3D meshes with material shading
- **Browser Support**: All modern browsers (Chrome, Firefox, Safari, Edge)

## Game Settings

You can customize difficulty by modifying these variables in `game.js`:

```javascript
player.gravity = 0.0006;      // Gravity strength
player.jumpPower = 0.15;      // Flap power
pipeGap = 1.5;                // Gap between pipes
spawnRate = 3.5;              // Initial pipe spawn distance
```

## Project Structure

```
flappy-bird/
├── index.html       # Main game page & UI
├── game.js          # Game logic & engine
└── README.md        # Documentation
```

## Browser Requirements

- Modern browser with WebGL support
- Hardware acceleration recommended for smooth performance
- Minimum screen resolution: 800x600

## Performance

- Optimized pipe rendering with automatic cleanup
- Efficient collision detection
- Smooth 60 FPS gameplay on most devices

## Future Enhancements

- [ ] Sound effects and background music
- [ ] Leaderboard system
- [ ] Multiple difficulty modes
- [ ] Power-up items
- [ ] Seasonal themes
- [ ] Mobile-optimized controls

## License

Open source - feel free to fork and modify!

Enjoy the game! 🚀
