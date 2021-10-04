export default class AnswerSpot extends Phaser.GameObjects.Container {
    constructor(data){
        let {image, scene, x, y, depth, answer} = data;
        let spotImage = new Phaser.GameObjects.Sprite(scene, 0, 0, image);
        super(scene, x, y, [spotImage]);
        this.depth = depth;
        this.answer = answer;
        this.scene.add.existing(this);
    }
}