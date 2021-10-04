export default class PromptTwo extends Phaser.Scene {
    constructor(){
        super('PromptTwo');
    }

    preload(){
        this.load.image("fortuneSarah", 'assets/fortuneSarah.png');
    }

    create(data){
        this.add.image(500, 300, 'fortuneSarah');

        const startButton = this.add.text(440, 550, 'Select tarot', { fill: '#0f0' });
        startButton.setInteractive();

        startButton.on('pointerdown', () => {
            this.scene.start("PredictionTwo", data);
        });
    }
   
}