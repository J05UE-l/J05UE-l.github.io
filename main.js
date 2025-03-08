import StartingScene from './startingScene.js';
import GameScene from './gameScene.js';

// Criar o elemento canvas com o atributo willReadFrequently
const canvas = document.createElement('canvas');
const context = canvas.getContext('2d', { willReadFrequently: true });
document.body.appendChild(canvas);

const config = {
    type: Phaser.CANVAS,
    canvas: canvas,
    width: 960,
    height: 640,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    scene: [StartingScene, GameScene]
};

// Inicializar o jogo Phaser com a configuração
const game = new Phaser.Game(config);
