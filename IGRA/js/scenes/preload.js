class Preload extends Phaser.Scene {

    constructor() {
        super({ key: 'Preload', active: false });

    }

    init() {

        this.CONFING = this.sys.game.CONFING;
        this.URL = this.sys.game.URL;




    }
    preload() {

        this.createLoadingBar();

        this.load.setPath(this.URL + 'assets/sliki');

        this.load.spritesheet('crveno', 'crveno.png', {
            frameWidth: 16, frameHeight: 16, endFrame: 4, margin: 1, spacing: 2
        });
        this.load.spritesheet('zolto-dolgo', 'zolto-dolgo.png', {
            frameWidth: 16, frameHeight: 16, endFrame: 4, margin: 1, spacing: 2
        });
        this.load.spritesheet('zolto-kratko', 'zolto-kratko.png', {
            frameWidth: 16, frameHeight: 16, endFrame: 4, margin: 1, spacing: 2
        });









    }


    create() {
        // this.scene.start('Menu');


    }

    createLoadingBar() {

        this.title = new Tekst(
            this,
            this.CONFING.centerX,
            75,
            'Loading Game',
            'preload',
            0.5

        );

        this.txt_progress = new Tekst(
            this,
            this.CONFING.centerX,
            this.CONFING.centerY - 5,

            'Loading...',
            'preload',

            { x: 0.5, y: 1 }
        );






    }

}


