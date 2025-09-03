// Sprites del personaje
let playerSprite;
let playerAnimation = {
    frameCount: 0,
    currentFrame: 0,
    frames: []
};

// Constantes del juego
const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 600;
const GROUND_HEIGHT = 500;
const MARIO_WIDTH = 50;
const MARIO_HEIGHT = 60;
const JUMP_FORCE = -15;
const GRAVITY = 0.8;
const ANIMATION_SPEED = 5; // Velocidad de la animación
const SCROLL_SPEED = 5;
const LIGHT_THRESHOLD = 200;
const MIC_THRESHOLD = 600;

// Variables del juego
let mario = {
    x: 100,
    y: GROUND_HEIGHT - MARIO_HEIGHT,
    velocityY: 0,
    isJumping: false,
    isAttacking: false
};

let gameState = {
    score: 0,
    obstacles: [],
    sensorData: {
        light: 500,    // Valor inicial del sensor de luz
        mic: 0         // Valor inicial del micrófono
    }
};

// Precargar recursos
function preload() {
    // Crear sprite básico del personaje
    playerSprite = createBasicSprite();
}

// Configuración inicial
function setup() {
    let canvas = createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
    canvas.parent('game-container');
    frameRate(60);

    // Inicializar frames de animación
    setupPlayerAnimation();
    
    // Generar obstáculos iniciales
    for (let i = 0; i < 5; i++) {
        gameState.obstacles.push({
            x: CANVAS_WIDTH + (i * 300),
            y: GROUND_HEIGHT - 30,
            width: 30,
            height: 30
        });
    }
}

// Función principal de dibujo
function draw() {
    // Actualizar estado del juego
    updateGame();
    
    // Dibujar elementos
    drawGame();
    
    // Actualizar panel de debug
    updateDebugPanel();
}

// Actualización del estado del juego
function updateGame() {
    // Procesar entrada de sensores
    processSensorInput();
    
    // Actualizar física de Mario
    updateMario();
    
    // Actualizar obstáculos
    updateObstacles();
    
    // Detectar colisiones
    checkCollisions();
    
    // Actualizar puntuación
    gameState.score++;
}

// Procesar datos de los sensores
function processSensorInput() {
    // Simular recepción de datos de sensores (esto vendría del puerto serie)
    // En una implementación real, estos datos vendrían del Arduino
    if (gameState.sensorData.light < LIGHT_THRESHOLD && !mario.isJumping) {
        mario.velocityY = JUMP_FORCE;
        mario.isJumping = true;
    }
    
    if (gameState.sensorData.mic > MIC_THRESHOLD) {
        mario.isAttacking = true;
        setTimeout(() => mario.isAttacking = false, 500);
    }
}

// Actualizar posición y estado de Mario
function updateMario() {
    // Aplicar gravedad
    mario.velocityY += GRAVITY;
    mario.y += mario.velocityY;
    
    // Limitar al suelo
    if (mario.y > GROUND_HEIGHT - MARIO_HEIGHT) {
        mario.y = GROUND_HEIGHT - MARIO_HEIGHT;
        mario.velocityY = 0;
        mario.isJumping = false;
    }
}

// Actualizar obstáculos
function updateObstacles() {
    // Mover obstáculos
    gameState.obstacles.forEach(obstacle => {
        obstacle.x -= SCROLL_SPEED;
    });
    
    // Reciclar obstáculos que salen de la pantalla
    gameState.obstacles = gameState.obstacles.filter(obstacle => {
        if (obstacle.x < -obstacle.width) {
            // Crear nuevo obstáculo al final
            gameState.obstacles.push({
                x: CANVAS_WIDTH + random(200, 500),
                y: GROUND_HEIGHT - 30,
                width: 30,
                height: 30
            });
            return false;
        }
        return true;
    });
}

// Verificar colisiones
function checkCollisions() {
    gameState.obstacles.forEach(obstacle => {
        if (mario.isAttacking) return; // Invulnerable durante ataque
        
        if (collideRectRect(
            mario.x, mario.y, MARIO_WIDTH, MARIO_HEIGHT,
            obstacle.x, obstacle.y, obstacle.width, obstacle.height
        )) {
            // Reiniciar juego
            resetGame();
        }
    });
}

// Dibujar el estado actual del juego
function drawGame() {
    // Fondo
    background('#87CEEB');
    
    // Suelo
    fill('#8B4513');
    rect(0, GROUND_HEIGHT, width, height - GROUND_HEIGHT);
    
    // Dibujar personaje animado
    drawPlayer();
    
    // Bola de fuego cuando ataca
    if (mario.isAttacking) {
        fill('#FF4500');
        ellipse(mario.x + MARIO_WIDTH + 20, mario.y + MARIO_HEIGHT/2, 20, 20);
    }
    
    // Obstáculos
    fill('#4A4A4A');
    gameState.obstacles.forEach(obstacle => {
        rect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
    });
    
    // Puntuación
    fill('#000');
    textSize(24);
    text('Puntuación: ' + floor(gameState.score/10), 10, 30);
}

// Actualizar panel de debug con valores de sensores
function updateDebugPanel() {
    document.getElementById('light-value').textContent = gameState.sensorData.light;
    document.getElementById('mic-value').textContent = gameState.sensorData.mic;
}

// Reiniciar juego
function resetGame() {
    mario.y = GROUND_HEIGHT - MARIO_HEIGHT;
    mario.velocityY = 0;
    gameState.score = 0;
    gameState.obstacles = [];
    
    // Regenerar obstáculos
    for (let i = 0; i < 5; i++) {
        gameState.obstacles.push({
            x: CANVAS_WIDTH + (i * 300),
            y: GROUND_HEIGHT - 30,
            width: 30,
            height: 30
        });
    }
}

// Función auxiliar para detectar colisiones entre rectángulos
function collideRectRect(x1, y1, w1, h1, x2, y2, w2, h2) {
    return x1 < x2 + w2 &&
           x1 + w1 > x2 &&
           y1 < y2 + h2 &&
           y1 + h1 > y2;
}

// Crear sprite básico del personaje
function createBasicSprite() {
    let sprite = createGraphics(MARIO_WIDTH, MARIO_HEIGHT);
    sprite.noStroke();
    
    // Cuerpo
    sprite.fill('#3498db'); // Color azul para el overol
    sprite.rect(10, 20, 30, 30);
    
    // Cabeza
    sprite.fill('#ffdbb4'); // Color piel
    sprite.ellipse(25, 15, 20, 20);
    
    // Gorra
    sprite.fill('#ff0000'); // Rojo para la gorra
    sprite.arc(25, 12, 22, 15, PI, TWO_PI);
    
    // Zapatos
    sprite.fill('#8B4513'); // Marrón para los zapatos
    sprite.rect(10, 50, 12, 8);
    sprite.rect(28, 50, 12, 8);
    
    return sprite;
}

// Configurar la animación del personaje
function setupPlayerAnimation() {
    // Crear frames de animación
    for (let i = 0; i < 4; i++) {
        let frame = createGraphics(MARIO_WIDTH, MARIO_HEIGHT);
        frame.image(playerSprite, 0, 0);
        
        // Modificar ligeramente la posición de las piernas para cada frame
        if (i % 2 === 0) {
            frame.fill('#8B4513');
            frame.rect(10, 50, 12, 8);
            frame.rect(28, 48, 12, 8);
        } else {
            frame.fill('#8B4513');
            frame.rect(10, 48, 12, 8);
            frame.rect(28, 50, 12, 8);
        }
        
        playerAnimation.frames.push(frame);
    }
}

// Dibujar el personaje animado
function drawPlayer() {
    push();
    if (mario.isJumping) {
        // Frame de salto
        image(playerAnimation.frames[2], mario.x, mario.y);
    } else {
        // Animación de corrida
        if (frameCount % ANIMATION_SPEED === 0) {
            playerAnimation.currentFrame = (playerAnimation.currentFrame + 1) % playerAnimation.frames.length;
        }
        image(playerAnimation.frames[playerAnimation.currentFrame], mario.x, mario.y);
    }
    
    // Efecto visual cuando ataca
    if (mario.isAttacking) {
        tint(255, 200, 100);
    }
    pop();
}

// Simulación de datos de sensores (en implementación real, esto vendría del Arduino)
setInterval(() => {
    // Simular cambios en los sensores
    gameState.sensorData.light = random(0, 1000);
    gameState.sensorData.mic = random(0, 1000);
}, 100);
