import PredictionOne from './scenes/predictions/PredictionOne.js';
import PredictionTwo from './scenes/predictions/PredictionTwo.js';
import PredictionThree from './scenes/predictions/PredictionThree.js';
import PredictionFour from './scenes/predictions/PredictionFour.js';
import PredictionFive from './scenes/predictions/PredictionFive.js';
import PromptOne from './scenes/prompts/PromptOne.js';
import PromptTwo from './scenes/prompts/PromptTwo.js';
import PromptThree from './scenes/prompts/PromptThree.js';
import PromptFour from './scenes/prompts/PromptFour.js';
import PromptFive from './scenes/prompts/PromptFive.js';

import ResultScene from './scenes/ResultScene.js';
import MenuScene from './scenes/MenuScene.js';




const config = {
    width: 1024,
    height: 720,
    backgroundColor: '#570861',
    type: Phaser.AUTO,
    parent: 'phaser-game', 
    scene:[
        MenuScene,
        PredictionOne,
        PredictionTwo,
        PredictionThree,
        PredictionFour,
        PredictionFive,
        ResultScene,
        PromptOne,
        PromptTwo,
        PromptThree,
        PromptFour,
        PromptFive,
    ]
}

new Phaser.Game(config);