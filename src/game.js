const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    scene: { 
        preload: preload,
        create: create,
        update : update 
    }
}

var game = new Phaser.Game(config)
function preload(){

    this.load.image("felpudo1", "../assets/felpudo/felpudoVoa1.png")
    this.load.image("felpudo2", "../assets/felpudo/felpudoVoa2.png")
    this.load.image("felpudo3", "../assets/felpudo/felpudoVoa3.png")
    this.load.image("felpudo4", "../assets/felpudo/felpudoVoa4.png")
    this.load.image("felpudo5", "../assets/felpudo/felpudoVoa5.png")
    this.load.image("felpudo6", "../assets/felpudo/felpudoVoa6.png")
}

function create(){
    var bird = this.add.sprite(100, 200, "felpudo1")

    this.anims.create({
        key: "fly",
        frames: [
            {key: 'felpudo1', frame: null},
            {key: 'felpudo2', frame: null},
            {key: 'felpudo3', frame: null},
            {key: 'felpudo4', frame: null},
        ],
        frameRate: 8,
        repeat: -1
    })

    bird.play("fly")

}

function update(){

}