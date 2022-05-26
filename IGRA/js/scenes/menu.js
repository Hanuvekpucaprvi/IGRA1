class Menu extends Phaser.Scene {

    constructor() {
        super({ key: 'Menu', active: false });

    }

    init() {

        this.CONFING = this.sys.game.CONFING;
        this.URL = this.sys.game.URL;

    }
    preload() {

    }
    create() {
        console.log('hi')

    }

}