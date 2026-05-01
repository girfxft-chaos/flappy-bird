# First-Person Flappy Bird: Blaster Edition 🎮🔫∞

An immersive first-person 3D take on the classic Flappy Bird game with **INFINITE AMMO** blaster weapon, built with **Babylon.js** WebGL engine.

## Features

✨ **First-Person Perspective** - Experience the game from inside a 3D world  
🔫∞ **Infinite Ammo Blaster** - Unlimited firepower to destroy pipes without limits  
🎨 **Full 3D Graphics** - Dynamic environments with sky, ground, and detailed obstacles  
🎯 **Progressive Difficulty** - Game speed and pipe spacing increase as you score  
🕹️ **Smooth Controls** - Responsive flap and fire mechanics with multiple input methods  
📊 **Maximum Scoring** - +1 for passing, +5 for destroying pipes  
🎮 **Pure Action Gameplay** - Focus entirely on flying and blasting

## Gameplay

### Pure Destruction Mode
With unlimited ammo, you can now focus on **pure action**: fly, dodge, and blast everything in your path!

### Scoring Strategy
- **+1 point** - Fly through pipe gaps (conservative)
- **+5 points** - Destroy pipes with blaster (aggressive)
- **Challenge**: Maximize your score with unrestricted firepower!

## How to Play

1. **Open** `index.html` in your web browser
2. **Controls:**
   - **SPACEBAR** - Flap upward
   - **CLICK or F** - Fire blaster (unlimited!)
   - **Touch** - Flap (on mobile)
3. **Navigate** through green pipe gaps
4. **Destroy** pipes with your infinite blaster for bonus points
5. **Avoid** hitting any pipe, ground, or ceiling
6. **Maximize** your score with unlimited ammunition

## Game Mechanics

### Physics
- Continuous gravity pulls the player downward
- Each flap provides an upward velocity boost
- Realistic inertia and momentum

### Infinite Blaster System
- **Unlimited Ammo** - Fire continuously without restrictions
- **Fire Rate** - Rapid-fire capability (0.2 second cooldown)
- **Projectiles** - Yellow glowing energy balls travel forward
- **Explosions** - Visual effects when pipes are destroyed
- **Infinite Indicator** - Pulsing display shows unlimited ammunition

### Obstacles
- Randomly generated pipes with variable gap sizes
- Pipes spawn progressively faster as difficulty increases
- Gap positioning varies to keep gameplay challenging
- Destroyed pipes give 5 points bonus (vs 1 for passing)

### Collision Detection
- Real-time collision checking against pipes, ground, and ceiling
- Projectile-to-pipe collision detection
- Instant game over on impact
- Final score displayed on game over screen

## Technical Stack

- **Engine**: Babylon.js 5.0+ (WebGL 3D rendering)
- **Language**: Vanilla JavaScript (ES6)
- **Graphics**: 3D meshes with material shading and particle effects
- **Browser Support**: All modern browsers (Chrome, Firefox, Safari, Edge)

## UI Elements

- 🎯 **Crosshair** - Center screen aiming reticle with crosshairs
- 📊 **Score Display** - Real-time score counter (top-left)
- 🔫∞ **Infinite Ammo Indicator** - Pulsing display showing unlimited ammunition
- 💥 **Muzzle Flash** - Visual feedback when firing
- 🎆 **Explosion Effects** - Particles when pipes are destroyed

## Game Settings

You can customize gameplay by modifying these variables in `game.js`:

```javascript
player.gravity = 0.0006;      // Gravity strength
player.jumpPower = 0.15;      // Flap power
pipeGap = 1.5;                // Gap between pipes
blaster.fireRate = 0.2;       // Fire rate in seconds
projectileSpeed = 0.5;        // Bullet speed
```

## Project Structure

```
flappy-bird/
├── index.html       # Main game page with UI
├── game.js          # Game engine & infinite blaster system
└── README.md        # Documentation
```

## Browser Requirements

- Modern browser with WebGL support
- Hardware acceleration recommended for smooth performance
- Minimum screen resolution: 800x600

## Performance

- Optimized pipe rendering with automatic cleanup
- Efficient collision detection for projectiles and pipes
- Smooth 60 FPS gameplay on most devices
- Automatic projectile/pipe cleanup to prevent memory leaks

## Scoring Strategy

| Action | Points |
|--------|--------|
| Pass through pipe gap | +1 |
| Destroy pipe with blaster | +5 |
| **Best Strategy** | Blast everything for maximum points! |

## Tips for High Scores

1. **Aggressive Play** - Destroy all pipes for +5 each
2. **Speed Run** - How fast can you blast through the level?
3. **Precision** - Mix blasting with flying through gaps
4. **Survival** - Push higher difficulty levels for more points

## What's New in Infinite Ammo Version

✨ **Removed Ammo Limits** - Fire forever without restrictions  
✨ **Removed Ammo Counter** - No tracking needed anymore  
✨ **Added Infinite Indicator** - Pulsing "🔫 ∞ INFINITE AMMO ∞" display  
✨ **Pure Action Focus** - All gameplay centered on flying and destroying

## Future Enhancements

- [ ] Sound effects and background music
- [ ] Rapid-fire weapon modes
- [ ] Spread shot blaster
- [ ] Energy shields
- [ ] Leaderboard system with high score tracking
- [ ] Multiple difficulty modes
- [ ] Seasonal themes and visual effects
- [ ] Enemy drones to destroy
- [ ] Score multipliers

## License

Open source - feel free to fork and modify!

Enjoy unlimited blasting action! 🚀💥∞
