// Game variables
let engine;
let scene;
let camera;
let player = { y: 0, vy: 0, gravity: 0.0006, jumpPower: 0.15 };
let gameActive = true;
let score = 0;
let pipes = [];
let pipeGap = 1.5;
let pipeWidth = 0.3;
let pipeSpacing = 3;
let nextPipeX = 5;
let spawnRate = 3.5;
let gameSpeed = 0.025;

// Blaster variables
let blaster = { 
    ammo: 100, 
    maxAmmo: 100, 
    fireRate: 0.2, 
    lastShotTime: 0,
    position: new BABYLON.Vector3(0.3, -0.2, 0.5)
};
let projectiles = [];
let projectileSpeed = 0.5;

// Initialize game
window.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('renderCanvas');
    engine = new BABYLON.Engine(canvas, true);
    createScene();
    
    // Input handling
    window.addEventListener('keydown', (e) => {
        if (e.code === 'Space') {
            e.preventDefault();
            flap();
        }
        if (e.code === 'KeyF') {
            fire();
        }
    });
    
    document.addEventListener('click', (e) => {
        // Check if click is on game over screen
        if (!document.getElementById('gameOverScreen').style.display || 
            document.getElementById('gameOverScreen').style.display === 'none') {
            fire();
        }
    });
    
    document.addEventListener('touchstart', (e) => {
        if (e.target === engine.getRenderingCanvas()) {
            flap();
        }
    });
    
    // Game loop
    engine.runRenderLoop(() => {
        if (gameActive) {
            updateGame();
        }
        scene.render();
    });
    
    // Handle window resize
    window.addEventListener('resize', () => {
        engine.resize();
    });
});

// Create the 3D scene
function createScene() {
    scene = new BABYLON.Scene(engine);
    scene.collisionsEnabled = true;
    scene.fogMode = BABYLON.Scene.FOGMODE_LINEAR;
    scene.fogStart = 10;
    scene.fogEnd = 50;
    scene.fogColor = new BABYLON.Color3(0.87, 0.81, 0.9);
    
    // Camera (first-person view)
    camera = new BABYLON.UniversalCamera('camera', new BABYLON.Vector3(0, 0, -1));
    camera.attachControl(engine.getRenderingCanvas(), true);
    camera.inertia = 0.5;
    camera.angularSensibility = 1000;
    
    // Lighting
    const light = new BABYLON.HemisphericLight('light', new BABYLON.Vector3(0, 1, 0.5), scene);
    light.intensity = 0.9;
    const sunLight = new BABYLON.PointLight('sun', new BABYLON.Vector3(10, 20, -30), scene);
    sunLight.intensity = 0.8;
    
    // Sky
    const skybox = BABYLON.MeshBuilder.CreateBox('sky', { size: 1000 }, scene);
    const skyMaterial = new BABYLON.StandardMaterial('skyMat', scene);
    skyMaterial.emissiveColor = new BABYLON.Color3(0.87, 0.81, 0.9);
    skybox.material = skyMaterial;
    
    // Ground
    const ground = BABYLON.MeshBuilder.CreateGround('ground', { width: 100, height: 1000, subdivisions: 2 }, scene);
    const groundMaterial = new BABYLON.StandardMaterial('groundMat', scene);
    groundMaterial.diffuse = new BABYLON.Color3(0.34, 0.67, 0.2);
    ground.material = groundMaterial;
    ground.position.y = -3;
    
    // Ceiling
    const ceiling = BABYLON.MeshBuilder.CreateGround('ceiling', { width: 100, height: 1000, subdivisions: 2 }, scene);
    const ceilingMaterial = new BABYLON.StandardMaterial('ceilingMat', scene);
    ceilingMaterial.diffuse = new BABYLON.Color3(0.67, 0.89, 1.0);
    ceiling.material = ceilingMaterial;
    ceiling.position.y = 3;
    ceiling.rotation.z = Math.PI;
    
    // Side walls for reference
    const leftWall = BABYLON.MeshBuilder.CreateGround('leftWall', { width: 1000, height: 1, subdivisions: 2 }, scene);
    const wallMaterial = new BABYLON.StandardMaterial('wallMat', scene);
    wallMaterial.diffuse = new BABYLON.Color3(0.8, 0.8, 0.8);
    leftWall.material = wallMaterial;
    leftWall.position.x = -5;
    leftWall.position.y = 0;
    leftWall.rotation.z = Math.PI / 2;
    
    const rightWall = leftWall.clone('rightWall');
    rightWall.position.x = 5;
    
    // Create blaster in view (visual representation)
    createBlasterVisual();
}

// Create blaster visual
function createBlasterVisual() {
    // Barrel
    const barrel = BABYLON.MeshBuilder.CreateCylinder('barrel', { 
        diameter: 0.1, 
        height: 0.4, 
        tessellation: 16 
    }, scene);
    const barrelMat = new BABYLON.StandardMaterial('barrelMat', scene);
    barrelMat.diffuse = new BABYLON.Color3(0.3, 0.3, 0.3);
    barrelMat.metallic = 0.8;
    barrelMat.roughness = 0.2;
    barrel.material = barrelMat;
    barrel.parent = camera;
    barrel.position = new BABYLON.Vector3(0.3, -0.15, 0.6);
    barrel.rotation.z = Math.PI / 2;
    
    // Grip
    const grip = BABYLON.MeshBuilder.CreateBox('grip', { 
        width: 0.08, 
        height: 0.3, 
        depth: 0.08 
    }, scene);
    grip.material = new BABYLON.StandardMaterial('gripMat', scene);
    grip.material.diffuse = new BABYLON.Color3(0.2, 0.2, 0.2);
    grip.parent = camera;
    grip.position = new BABYLON.Vector3(0.25, -0.25, 0.4);
}

// Fire blaster
function fire() {
    if (!gameActive) return;
    
    const now = performance.now();
    if (now - blaster.lastShotTime < blaster.fireRate * 1000) return;
    if (blaster.ammo <= 0) return;
    
    blaster.lastShotTime = now;
    blaster.ammo--;
    
    // Create projectile
    const projectile = BABYLON.MeshBuilder.CreateSphere('projectile', { 
        diameter: 0.1, 
        segments: 8 
    }, scene);
    const projectileMat = new BABYLON.StandardMaterial('projMat', scene);
    projectileMat.emissiveColor = new BABYLON.Color3(1, 1, 0); // Yellow
    projectileMat.specularColor = new BABYLON.Color3(1, 1, 0);
    projectile.material = projectileMat;
    
    // Position at camera
    projectile.position = camera.position.clone();
    projectile.position.x += 0.3;
    projectile.position.z += 0.5;
    
    projectiles.push({
        mesh: projectile,
        x: projectile.position.x,
        vx: projectileSpeed,
        life: 200 // frames
    });
    
    // Add visual feedback
    addMuzzleFlash();
    
    // Update ammo display
    document.getElementById('ammo').textContent = blaster.ammo;
}

// Add muzzle flash effect
function addMuzzleFlash() {
    const flash = BABYLON.MeshBuilder.CreateSphere('flash', { diameter: 0.2 }, scene);
    const flashMat = new BABYLON.StandardMaterial('flashMat', scene);
    flashMat.emissiveColor = new BABYLON.Color3(1, 0.5, 0);
    flash.material = flashMat;
    flash.parent = camera;
    flash.position = new BABYLON.Vector3(0.3, -0.15, 0.75);
    
    let alpha = 1;
    const fadeInterval = setInterval(() => {
        alpha -= 0.2;
        flashMat.alpha = alpha;
        if (alpha <= 0) {
            clearInterval(fadeInterval);
            flash.dispose();
        }
    }, 50);
}

// Update game state
function updateGame() {
    // Player physics
    player.vy -= player.gravity;
    player.y += player.vy;
    
    // Update camera height
    camera.position.y = player.y;
    
    // Spawn new pipes
    nextPipeX -= gameSpeed;
    if (nextPipeX <= 0) {
        spawnPipe();
        nextPipeX = spawnRate;
        // Increase difficulty
        spawnRate = Math.max(2.5, spawnRate - 0.01);
        gameSpeed = Math.min(0.04, gameSpeed + 0.0002);
    }
    
    // Update pipes
    for (let i = pipes.length - 1; i >= 0; i--) {
        const pipe = pipes[i];
        pipe.x -= gameSpeed;
        
        // Update pipe visual positions
        pipe.topMesh.position.x = pipe.x;
        pipe.bottomMesh.position.x = pipe.x;
        
        // Check if pipe passed player (score)
        if (!pipe.scored && pipe.x < 0) {
            pipe.scored = true;
            score++;
            document.getElementById('score').textContent = score;
        }
        
        // Remove far pipes
        if (pipe.x < -20) {
            pipe.topMesh.dispose();
            pipe.bottomMesh.dispose();
            pipes.splice(i, 1);
        }
        
        // Check collision with player
        if (checkCollision(pipe)) {
            endGame();
        }
    }
    
    // Update projectiles
    for (let i = projectiles.length - 1; i >= 0; i--) {
        const proj = projectiles[i];
        proj.x += proj.vx;
        proj.mesh.position.x = proj.x;
        proj.life--;
        
        // Check collision with pipes
        let hit = false;
        for (let j = pipes.length - 1; j >= 0; j--) {
            const pipe = pipes[j];
            const dist = Math.abs(proj.x - pipe.x);
            const yDist = Math.abs(proj.mesh.position.y - pipe.gapCenter);
            
            // Check if projectile hits top or bottom pipe
            if (dist < pipeWidth / 2 + 0.05) {
                if (yDist > pipeGap / 2 + 0.1) {
                    // Hit the pipe
                    destroyPipe(j);
                    hit = true;
                    break;
                }
            }
        }
        
        // Remove projectile if hit or out of range
        if (hit || proj.life <= 0 || proj.x > 50) {
            proj.mesh.dispose();
            projectiles.splice(i, 1);
        }
    }
    
    // Check boundaries
    if (player.y > 3 || player.y < -3) {
        endGame();
    }
}

// Destroy a pipe
function destroyPipe(index) {
    const pipe = pipes[index];
    
    // Create explosion effect
    const explosion = BABYLON.MeshBuilder.CreateSphere('explosion', { diameter: 0.5 }, scene);
    const explosionMat = new BABYLON.StandardMaterial('explosionMat', scene);
    explosionMat.emissiveColor = new BABYLON.Color3(1, 0.5, 0);
    explosion.material = explosionMat;
    explosion.position.x = pipe.x;
    explosion.position.y = pipe.gapCenter;
    
    let scale = 1;
    let alpha = 1;
    const expandInterval = setInterval(() => {
        scale += 0.15;
        alpha -= 0.2;
        explosion.scaling = new BABYLON.Vector3(scale, scale, scale);
        explosionMat.alpha = alpha;
        if (alpha <= 0) {
            clearInterval(expandInterval);
            explosion.dispose();
        }
    }, 50);
    
    // Bonus points for destroying pipe
    score += 5;
    document.getElementById('score').textContent = score;
    
    // Remove pipe
    pipe.topMesh.dispose();
    pipe.bottomMesh.dispose();
    pipes.splice(index, 1);
}

// Spawn a pipe obstacle
function spawnPipe() {
    const gapCenter = (Math.random() - 0.5) * 2;
    const gapTop = gapCenter + pipeGap / 2;
    const gapBottom = gapCenter - pipeGap / 2;
    
    // Top pipe
    const topPipe = BABYLON.MeshBuilder.CreateBox('topPipe' + pipes.length, {
        width: pipeWidth,
        height: 3 - gapTop,
        depth: 0.5
    }, scene);
    const pipeMaterial = new BABYLON.StandardMaterial('pipeMat' + pipes.length, scene);
    pipeMaterial.diffuse = new BABYLON.Color3(0.2, 0.6, 0.2);
    topPipe.material = pipeMaterial;
    topPipe.position.x = 15;
    topPipe.position.y = 3 - (3 - gapTop) / 2;
    
    // Bottom pipe
    const bottomPipe = BABYLON.MeshBuilder.CreateBox('bottomPipe' + pipes.length, {
        width: pipeWidth,
        height: 3 + gapBottom,
        depth: 0.5
    }, scene);
    bottomPipe.material = pipeMaterial;
    bottomPipe.position.x = 15;
    bottomPipe.position.y = -3 + (3 + gapBottom) / 2;
    
    pipes.push({
        x: 15,
        gapCenter,
        gapTop,
        gapBottom,
        topMesh: topPipe,
        bottomMesh: bottomPipe,
        scored: false
    });
}

// Collision detection
function checkCollision(pipe) {
    const playerRadius = 0.2;
    const pipeDistance = Math.abs(pipe.x - camera.position.x);
    
    if (pipeDistance < pipeWidth / 2 + playerRadius) {
        // Check if player is within the gap
        if (player.y < pipe.gapBottom + playerRadius || player.y > pipe.gapTop - playerRadius) {
            return true;
        }
    }
    return false;
}

// Flap action
function flap() {
    if (gameActive) {
        player.vy = player.jumpPower;
    }
}

// End game
function endGame() {
    gameActive = false;
    document.getElementById('finalScore').textContent = score;
    document.getElementById('gameOverScreen').style.display = 'block';
}

// Restart game
function restartGame() {
    // Reset variables
    player = { y: 0, vy: 0, gravity: 0.0006, jumpPower: 0.15 };
    gameActive = true;
    score = 0;
    spawnRate = 3.5;
    gameSpeed = 0.025;
    nextPipeX = 5;
    blaster.ammo = blaster.maxAmmo;
    
    // Clear pipes
    pipes.forEach(pipe => {
        pipe.topMesh.dispose();
        pipe.bottomMesh.dispose();
    });
    pipes = [];
    
    // Clear projectiles
    projectiles.forEach(proj => {
        proj.mesh.dispose();
    });
    projectiles = [];
    
    // Update UI
    document.getElementById('score').textContent = '0';
    document.getElementById('ammo').textContent = blaster.maxAmmo;
    document.getElementById('gameOverScreen').style.display = 'none';
    
    // Reset camera
    camera.position.y = 0;
}
