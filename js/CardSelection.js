import CardDraggable from './CardDraggable.js';

export default class CardSelection extends CardDraggable{
    constructor(data){
        let {value, type} = data;
        super(data);
        this.textValue = new Phaser.GameObjects.BitmapText(this.scene, 0, -100, 'pressstart', value);
        this.add(this.textValue);
        this.value = value;
        this.cardtype = type;
    }
    set value(newValue){
        this._value = newValue;
        this.textValue.text = this._value;
        this.textValue.x = -46 - this.textValue.width / 2;
        this.textValue.tint = 0;
    }
    get value(){
        return this._value;
    }
}