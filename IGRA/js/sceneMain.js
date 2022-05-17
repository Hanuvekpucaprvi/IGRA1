class SceneMain extends Phaser.Scene {
    constructor() {
        super('SceneMain');
    }
    preload() {

        this.load.image('bg', 'image/bg.jpg');

    }
    create() {

        let bg = this.add.image(0, 0, 'bg');

        bg.displayHeight = this.sys.game.config.height;
        bg.scaleX = bg.scaleY;

        bg.y = this.sys.game.config.height / 2;

        bg.x = this.sys.game.config.width / 2;







    }

    update() {
    }
}
