class Tank extends Actor {
  constructor() {
    super();
  }

  init() {
    super.init();

    this.vx = 5;
    this.vy = 5;
    this.x = 200;
    this.y = 200;

    this.angle = 0;
    this.bulletTimer = new Timer();

    this.styleElement({
      "z-index": "1",
      "background-image": "url('res/tank_blue.png')",
      "background-repeat": "no-repeat",
      "background-size": "auto",
      "-ms-transform": "rotate(0deg);",
      "-webkit-transform": "rotate(0deg);",
      "transform": "rotate(0deg);"
    });

    this.setBounds({
      width: 42,
      height: 46,
      x: this.x,
      y: this.y
    });
  }

  addTrack() {
    //this.stage.addObject(new Track(this.x, this.y));
  }

  update() {

  }


}
