export default class ResultScene extends Phaser.Scene {
    constructor(){
        super('ResultScene');
    }

  create(data){
    const correct = data.correct;
    if(correct !== 0)
      this.add.text(440, 100, `Score: ${Number(100 * (correct / 15).toFixed(2))}%`);
    else
      this.add.text(440, 100, 'Score: 0');
    

    this.add.text(320, 130, data.results[0]);

    this.add.text(320, 160, data.results[1]);

    this.add.text(320, 190, data.results[2]);

    this.add.text(320, 220, data.results[3]);

    this.add.text(320, 250, data.results[4]);

    const menuButton = this.add.text(440, 325, 'Back to Menu', { fill: '#0f0' });
        menuButton.setInteractive();

        menuButton.on('pointerdown', () => {
            this.scene.start("MenuScene");
        });
  }
 
}