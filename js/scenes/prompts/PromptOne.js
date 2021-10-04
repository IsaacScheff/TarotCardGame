export default class PromptOne extends Phaser.Scene {
    constructor(){
        super('PromptOne');
    }
    preload(){
        this.load.image("fortuneDave", 'assets/fortuneDave.png');
    }

    create(){
        this.add.image(500, 300, 'fortuneDave');

        const startButton = this.add.text(440, 550, 'Select tarot', { fill: '#0f0' });
        startButton.setInteractive();

        startButton.on('pointerdown', () => {
            this.scene.start("PredictionOne");
        });
    }
   
}