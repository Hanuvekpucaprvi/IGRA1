class Boot extends Phaser.Scene {

    constructor() {
        super({ key: 'Boot', active: true });

    }

    init() {

        this.CONFING = this.sys.game.CONFING;
        this.URL = this.sys.game.URL;

    }
    preload() {
        this.load.setPath(this.URL + 'assets/fontovi');
        this.load.bitmapFont('font', 'Tropics-p70aO.ttf',);

    }
    create() {
        this.scene.start('Preload');
    }

}
