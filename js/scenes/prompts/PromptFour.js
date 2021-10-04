export default class PromptTwo extends Phaser.Scene {
    constructor(){
        super('PromptFour');
    }

    preload(){
        this.load.image("fortuneEmelio", 'assets/fortuneEmelio.png');
    }

    create(data){
        this.add.image(500, 300, 'fortuneEmelio');

        const startButton = this.add.text(440, 550, 'Select tarot', { fill: '#0f0' });
        startButton.setInteractive();

        startButton.on('pointerdown', () => {
            this.scene.start("PredictionFour", data);
        });
    }
   
}