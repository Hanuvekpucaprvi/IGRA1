var game;
window.onload = function () {
    var isMobile = navigator.userAgent.indexOf("Mobile");
    if (isMobile == -1) {
        isMobile = navigator.userAgent.indexOf("Tablet");
    }
    var w = 1920;
    var h = 1080;
    if (isMobile != -1) {
        w = window.innerWidth;
        h = window.innerHeight;
    }
    var config = {
        type: Phaser.AUTO,
        width: w,
        height: h,
        parent: 'phaser-game',
        scene: [SceneMain]
    };
    game = new Phaser.Game(config);
}