

const App = function () {

    'use strict';
    this.VERSION = '0.0.1';
    this.IS_DEV = true;

}
App.prototype.start = function () {
    'use strict';
    //SCENIII 
    let scenes = [];
    scenes.push(Boot);
    scenes.push(Preload);
    scenes.push(Menu);


    //KONFIGURACII
    const config = {
        type: Phaser.AUTO,
        parent: 'phaser-app',
        title: 'PyramidBlock',

        width: 1920,
        height: 1080,

        scene: scenes,




    };

    //GAME APP
    let game = new Phaser.Game(config);


    //GLOBALS
    game.IS_DEV = this.IS_DEV;
    game.VERSION = this.VERSION;

    game.CONFIG = this.config;



    //ZVUK
    game.sound_on = true;

}

