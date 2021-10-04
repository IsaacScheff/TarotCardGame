export default class PromptTwo extends Phaser.Scene {
    constructor(){
        super('PromptFive');
    }

    preload(){
        this.load.image("fortuneRathgar", 'assets/fortuneRathgar.png');
    }

    create(data){
        this.add.image(500, 300, 'fortuneRathgar');

        const startButton = this.add.text(440, 550, 'Select tarot', { fill: '#0f0' });
        startButton.setInteractive();

        startButton.on('pointerdown', () => {
            this.scene.start("PredictionFive", data);
        });
    }
   
}