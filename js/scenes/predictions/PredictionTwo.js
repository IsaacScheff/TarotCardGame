import AnswerSpot from "../../AnswerSpot.js";
import Selector from '../../Selector.js';
import { cardPreviews } from "../../cardPreviews.js";

export default class PredictionTwo extends Phaser.Scene {
    constructor(){
        super('PredictionTwo');
    }
    preload(){
        this.load.image("fortuneSarah", 'assets/fortuneSarah.png');

        this.load.image('theFool', 'assets/theFool.png');
        this.load.image('theMagician', 'assets/theMagician.png');
        this.load.image('theHighPriestess', 'assets/theHighPriestess.png');
        this.load.image('theEmpress', 'assets/theEmpress.png');
        this.load.image('theEmperor', 'assets/theEmperor.png');
        this.load.image('theHierophant', 'assets/theHierophant.png');
        this.load.image('theLovers', 'assets/theLovers.png');
        this.load.image('chariot', 'assets/chariot.png');
        this.load.image('strength', 'assets/strength.png');
        this.load.image('hermit', 'assets/hermit.png');
        this.load.image('wheelOfFortune', 'assets/wheelOfFortune.png');
        this.load.image('justice', 'assets/justice.png');
        this.load.image('hangedMan', 'assets/hangedMan.png');
        this.load.image('death', 'assets/death.png');
        this.load.image('temperance', 'assets/temperance.png');
        this.load.image('theDevil', 'assets/theDevil.png');
        this.load.image('theTower', 'assets/theTower.png');
        this.load.image('theStar', 'assets/theStar.png');
        this.load.image('theMoon', 'assets/theMoon.png');
        this.load.image('theSun', 'assets/theSun.png');
        this.load.image('judgement', 'assets/judgement.png');
        this.load.image('theWorld', 'assets/theWorld.png');

        this.load.image('answer', 'assets/answer.png');
        this.load.image('littleCard', 'assets/littleCard.png');
        this.load.bitmapFont('pressstart', 'assets/pressstart.png', 'assets/pressstart.fnt');
    }
    create(data){
        this.add.text(85, 100, 'Past');
        this.add.text(465, 100, 'Present');
        this.add.text(870, 100, 'Future');

        const fortuneButton = this.add.text(430, 325, 'See fortune again', { fill: '#0f0' });
        fortuneButton.setInteractive();

        fortuneButton.on('pointerdown', () => {
            this.daveFortune = this.add.image(500, 300, 'fortuneSarah');
            this.daveFortune.setInteractive();

            this.daveFortune.on('pointerdown', () => {
                this.daveFortune.setVisible(false);
            });
        });

        const submitButton = this.add.text(440, 520, 'Submit Tarot!', { fill: '#0f0' });
        submitButton.setInteractive();

        submitButton.on('pointerdown', () => { 
            let correct = data.correct;
            let sarahAnswers = 0;
            let resultMessage = '';

            if(this.answerOne.answer === 'The Hierophant'){ //traditional upstanding childhood
                correct++;
                sarahAnswers++;
            }
            if(this.answerTwo.answer === 'Strength'){ //to escape the terminator
                correct++;
                sarahAnswers++;
            }
            if(this.answerThree.answer === 'The Empress'){ //cause good mom
                correct++;
                sarahAnswers++;
            }
            switch(sarahAnswers){
                case 3:
                    resultMessage = 'You helped Sarah understand her role.';
                    break;
                case 2:
                    resultMessage = 'You only gave Sarah part of the truth.';
                    break;
                case 1:
                    resultMessage = 'You only gave Sarah part of the truth.';
                    break;
                case 0:
                    resultMessage = 'You gave Sarah no helpful information.';
            }
             
            data.results.push(resultMessage)

            this.scene.start("PromptThree", {correct: correct, results: data.results}); 
        });

        this.selector = new Selector({
            scene: this, 
            columns: 11, 
            rows: 2,
         });

         this.input.on('pointerover', (event, gameObjects) => {
            let pointer = this.input.activePointer;
            const previewFile = cardPreviews[gameObjects[0]._cardname]
            this.cardPreview = this.add.image(pointer.worldX, pointer.worldY, previewFile).setScale(2, 2);
            
        });

        this.input.on('pointerout', () => {
                this.cardPreview.setVisible(false);
        });

        this.input.on('dragstart', (pointer, gameObject) => {
            this.children.bringToTop(gameObject);
            this.cardPreview.setVisible(false);
        })

        this.answerOne = new AnswerSpot({
            image: 'answer',
            scene: this,
            x: this.game.config.width / 2 - 400,
            y: this.game.config.height - 550,
            depth: -1,
            answer: null
        });

        this.answerTwo = new AnswerSpot({
            image: 'answer',
            scene: this,
            x: this.game.config.width / 2,
            y: this.game.config.height - 550,
            depth: -1,
            answer: null
        });

        this.answerThree = new AnswerSpot({
            image: 'answer',
            scene: this,
            x: this.game.config.width / 2 + 400,
            y: this.game.config.height - 550,
            depth: -1,
            answer: null
        });
    } 
}