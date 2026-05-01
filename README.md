# First-Person Flappy Bird: Infinite Blaster Edition 🎮🔫∞

An immersive first-person 3D take on the classic Flappy Bird game with an **infinite weapon system**, built with **Babylon.js** WebGL engine.

## Features

✨ **First-Person Perspective** - Experience the game from inside a 3D world  
🔫 **Infinite Blaster** - Unlimited ammunition for pure action gameplay  
🎨 **Full 3D Graphics** - Dynamic environments with sky, ground, and detailed obstacles  
🎯 **Progressive Difficulty** - Game speed and pipe spacing increase as you score  
🕹️ **Smooth Controls** - Responsive flap and fire mechanics with multiple input methods  
📊 **High-Scoring Action** - Blast your way through obstacles for maximum points  
🎮 **Restart Functionality** - Play again with one click

## Pure Action Gameplay

Forget ammo management! Fire continuously without limits. Blast through obstacles for +5 points each, or fly through gaps for +1 point. Pure arcade action!

## How to Play

1. **Open** `index.html` in your web browser
2. **Controls:**
   - **SPACEBAR** - Flap upward
   - **CLICK or F** - Fire blaster (unlimited!)
   - **Touch** - Flap (on mobile)
3. **Navigate** through green pipe gaps OR blast them
4. **Destroy** pipes with your infinite blaster for bonus points
5. **Avoid** hitting any pipe, ground, or ceiling that you can't destroy in time

## Game Mechanics

### Physics
- Continuous gravity pulls the player downward
- Each flap provides an upward velocity boost
- Realistic inertia and momentum

### Infinite Blaster System
- **Unlimited Ammo** - Fire continuously without restrictions!
- **Fire Rate** - Rapid-fire capability (0.2 second cooldown)
- **Projectiles** - Yellow glowing energy balls travel forward
- **Explosions** - Satisfying visual effects when pipes are destroyed
- **No Limits** - Blast to your heart's content!

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
- 🔫 **Infinite Ammo Indicator** - Pulsing ∞ symbol (bottom-left)
- 💥 **Muzzle Flash** - Visual feedback when firing
- 🎆 **Explosion Effects** - Particles when pipes are destroyed

## Game Settings

You can customize gameplay by modifying these variables in `game.js`:

```javascript
player.gravity = 0.0006;      // Gravity strength
player.jumpPower = 0.15;      // Flap power
pipeGap = 1.5;                // Gap between pipes
projectileSpeed = 0.5;        // Bullet speed
blaster.fireRate = 0.2;       // Fire rate (seconds between shots)
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
| **Optimal Play** | Mix strategies for flow state |

## Tips for High Scores

1. **Blast Everything** - With infinite ammo, destroy pipes for consistent +5 point rewards
2. **Flow State** - Find your rhythm between flapping and blasting
3. **Timing** - Fire early to give projectiles time to travel
4. **Challenge** - Try pure flying, pure blasting, or mixed approaches!

## Why Infinite Ammo?

- **Pure Fun** - No resource management, just action
- **Arcade Feel** - Classic unlimited weapon gameplay
- **Accessibility** - Focus on dodging and aiming, not rationing
- **High Scores** - Blast through every obstacle!

## Future Enhancements

- [ ] Sound effects and background music
- [ ] Different weapon types (spread shot, rapid fire, missile)
- [ ] Enemy drones to battle
- [ ] Power-ups (shield, invincibility, double points)
- [ ] Leaderboard system
- [ ] Multiple difficulty modes
- [ ] Seasonal themes

## License

Open source - feel free to fork and modify!

Enjoy unlimited blasting! 🚀💥∞
