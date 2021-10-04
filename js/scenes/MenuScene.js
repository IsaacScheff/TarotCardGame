export default class MenuScene extends Phaser.Scene {
    constructor(){
        super('MenuScene');
    }

    preload(){
        this.load.image("instructions", 'assets/instructions.png');
    }

    create(){
        const startButton = this.add.text(440, 325, 'Start Quiz!', { fill: '#0f0' });
        startButton.setInteractive();

        startButton.on('pointerdown', () => {
            this.scene.start("PromptOne");
        });

        const fortuneButton = this.add.text(370, 400, 'Click here for instructions', { fill: '#0f0' });
        fortuneButton.setInteractive();

        fortuneButton.on('pointerdown', () => {
            this.daveFortune = this.add.image(500, 300, 'instructions');
            this.daveFortune.setInteractive();

            this.daveFortune.on('pointerdown', () => {
                this.daveFortune.setVisible(false);
            });
        });
    }
   
}