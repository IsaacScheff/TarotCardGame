import CardSelection from './CardSelection.js';
import tarotdeck from './tarotdeck.js';

export default class Selector {
    constructor(data){
        let {scene, columns, rows} = data;
        this.xOffset = 60;
        this.yOffset = 200;
        this.yStart = scene.game.config.height / 1.15;
        this.columns = columns;
        this.rows = rows;
        this.scene = scene;
        this.cards = [];
        this.addCards(0);
    }

    addCards(){
        for (let i = 0; i < this.columns * this.rows; i++){
            const tarotcard = tarotdeck[i];
            let card = new CardSelection({
                scene: this.scene,
                x: this.xOffset + (this.scene.game.config.width / 6.8 - this.xOffset) * (i % this.columns),
                y: this.yStart - this.yOffset * Math.floor(i / this.columns),
                card: 'littleCard',
                image: tarotcard.image,
                number: tarotcard.number,
                name: tarotcard.name,
                ondragend: () => {
                    const scene = this.scene;
                    if(card.y > 300){
                        card.y = card.originalY;
                        card.x = card.originalX;
                        switch(card._cardname){
                            case scene.answerOne.answer:
                                scene.answerOne.answer = null;
                                break;
                            case scene.answerTwo.answer:
                                scene.answerTwo.answer = null;
                                break;
                            case scene.answerThree.answer:
                                scene.answerThree.answer = null;
                                break;
                            default:
                                break;
                        }
                    }else if(card.x < 300){
                        if(scene.answerOne.answer === null || scene.answerOne.answer === card._cardname){
                            scene.answerOne.answer = card._cardname;
                            if(scene.answerTwo.answer === card._cardname)
                                scene.answerTwo.answer = null;
                            if(scene.answerThree.answer === card._cardname)
                                scene.answerThree.answer = null;
                            card.y = 200;
                            card.x = 120;
                        }else{
                            card.y = card.originalY;
                            card.x = card.originalX;
                        }
                    }else if(card.x > 700){
                        if(scene.answerThree.answer === null || scene.answerThree.answer === card._cardname){
                            scene.answerThree.answer = card._cardname;
                            if(scene.answerTwo.answer === card._cardname)
                                scene.answerTwo.answer = null;
                            if(scene.answerOne.answer === card._cardname)
                                scene.answerOne.answer = null;
                            card.y = 200;
                            card.x = 900;
                        }else{
                            card.y = card.originalY;
                            card.x = card.originalX;
                        }
                    }else{
                        if(scene.answerTwo.answer === null || scene.answerTwo.answer === card._cardname){
                            scene.answerTwo.answer = card._cardname;
                            if(scene.answerThree.answer === card._cardname)
                                scene.answerThree.answer = null;
                            if(scene.answerOne.answer === card._cardname)
                                scene.answerOne.answer = null;
                            card.y = 200;
                            card.x = 500;
                        }else{
                            card.y = card.originalY;
                            card.x = card.originalX;
                        }
                    }
                    //scene.scene.start('IntroScene');  //***********************TEST LINE, NEEDS REMOVAL FOR CODE TO WORK NORMALLY */
                 }
            });
            card.depth = 0;
            this.cards.push(card);
        }
    }
}