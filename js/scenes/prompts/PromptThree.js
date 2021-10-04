export default class PromptTwo extends Phaser.Scene {
    constructor(){
        super('PromptThree');
    }

    preload(){
        this.load.image("fortuneJamie", 'assets/fortuneJamie.png');
    }

    create(data){
        this.add.image(500, 300, 'fortuneJamie');

        const startButton = this.add.text(440, 550, 'Select tarot', { fill: '#0f0' });
        startButton.setInteractive();

        startButton.on('pointerdown', () => {
            this.scene.start("PredictionThree", data);
        });
    }
   
}