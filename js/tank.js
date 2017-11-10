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

    this.styleElement({
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

    //new inputhandler
    this.inputHandler = new InputHandler();
    this.inputHandler.targetEvents(document, {
      keydown: true,
      keyup: true
    });
  }

  addTrack() {
    //this.stage.addObject(new Track(this.x, this.y));
  }

  update() {
    if (this.inputHandler.keys[83]) {
      this.addTrack();
      this.y -= this.vy * Math.cos(this.angle * Math.PI / 180);
      this.x += this.vx * Math.sin(this.angle * Math.PI / 180);
    };
    if (this.inputHandler.keys[87]) {
      this.addTrack();
      this.y += this.vy * Math.cos(this.angle * Math.PI / 180);
      this.x -= this.vx * Math.sin(this.angle * Math.PI / 180);
    };
    if (this.inputHandler.keys[65]) this.angle -= 5;
    if (this.inputHandler.keys[68]) this.angle += 5;
    this.setBounds({
      x: this.x,
      y: this.y
    });

    this.element.style["-ms-transform"] = "rotate(" + this.angle + "deg)";
    this.element.style["-webkit-transform"] = "rotate(" + this.angle + "deg)";
    this.element.style["transform"] = "rotate(" + this.angle + "deg)";
  }


}
