# First-Person Flappy Bird: Blaster Edition 🎮🔫

An immersive first-person 3D take on the classic Flappy Bird game with a **weapon system**, built with **Babylon.js** WebGL engine.

## Features

✨ **First-Person Perspective** - Experience the game from inside a 3D world  
🔫 **Blaster Weapon** - Destroy pipes for tactical gameplay  
🎨 **Full 3D Graphics** - Dynamic environments with sky, ground, and detailed obstacles  
🎯 **Progressive Difficulty** - Game speed and pipe spacing increase as you score  
🕹️ **Smooth Controls** - Responsive flap and fire mechanics with multiple input methods  
📊 **Dual Scoring System** - +1 for passing, +5 for destroying pipes  
🎮 **Restart Functionality** - Play again with one click

## Gameplay Modes

### Classic Approach
Navigate through pipe gaps without firing - conservative ammo usage, 1 point per pipe

### Aggressive Approach  
Blast your way through obstacles - costs ammo but rewards you with 5 points per destroyed pipe

### Strategic Play
Mix both approaches to maximize your score!

## How to Play

1. **Open** `index.html` in your web browser
2. **Controls:**
   - **SPACEBAR** - Flap upward
   - **CLICK or F** - Fire blaster
   - **Touch** - Flap (on mobile)
3. **Navigate** through green pipe gaps
4. **Destroy** pipes with your blaster for bonus points
5. **Avoid** hitting any pipe, ground, or ceiling
6. **Manage** your 100-round ammo supply strategically

## Game Mechanics

### Physics
- Continuous gravity pulls the player downward
- Each flap provides an upward velocity boost
- Realistic inertia and momentum

### Blaster System
- **100 Ammo** - Limited ammunition to manage
- **Fire Rate** - Rapid-fire capability (0.2 second cooldown)
- **Projectiles** - Yellow glowing energy balls travel forward
- **Explosions** - Visual effects when pipes are destroyed
- **Ammo Display** - Gold bar shows remaining ammunition

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
- 🔫 **Ammo Counter** - Shows remaining ammo (bottom-left)
- 📈 **Ammo Bar** - Gold gradient bar showing ammunition level
- 💥 **Muzzle Flash** - Visual feedback when firing
- 🎆 **Explosion Effects** - Particles when pipes are destroyed

## Game Settings

You can customize gameplay by modifying these variables in `game.js`:

```javascript
player.gravity = 0.0006;      // Gravity strength
player.jumpPower = 0.15;      // Flap power
pipeGap = 1.5;                // Gap between pipes
blaster.ammo = 100;           // Starting ammo
blaster.maxAmmo = 100;        // Max ammo
projectileSpeed = 0.5;        // Bullet speed
```

## Project Structure

```
flappy-bird/
├── index.html       # Main game page with UI
├── game.js          # Game engine & blaster system
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
| **Sweet Spot** | Destroy the hardest pipes with limited ammo |

## Tips for High Scores

1. **Conserve Ammo** - Use blaster only for impossible gaps
2. **Mix Strategies** - Alternate between passing and destroying
3. **Timing** - Fire early to give projectiles time to travel
4. **Challenge Yourself** - Try to finish without using all ammo

## Future Enhancements

- [ ] Sound effects and background music
- [ ] Ammo pickups
- [ ] Different weapon types (spread shot, rapid fire)
- [ ] Enemy drones
- [ ] Power-ups (shield, double points)
- [ ] Leaderboard system
- [ ] Multiple difficulty modes
- [ ] Seasonal themes

## License

Open source - feel free to fork and modify!

Enjoy blasting through the skies! 🚀💥
