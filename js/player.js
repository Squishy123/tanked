class Player extends Tank {
  constructor() {
    super();
  }

  init() {
    super.init();
    //new inputhandler
    this.inputHandler = new InputHandler();
    this.inputHandler.targetEvents(document, {
      keydown: true,
      keyup: true
    });
  }

  update() {
    let bx = this.x,
      by = this.y;

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

    /**
    if(this.stage.checkCollisions(this)[0] instanceof Tank) {
      this.x = bx;
      this.y = by;
    }
    **/

    if (this.x > this.stage.getBounds().width - this.getBounds().width || this.x < 0) {
      this.x = bx;
    }

    if (this.y > this.stage.getBounds().height - this.getBounds().height || this.y < 0) {
      this.y = by;
    }

    this.setBounds({
      x: this.x,
      y: this.y
    });

    this.element.style["-ms-transform"] = `rotate(${this.angle}deg)`;
    this.element.style["-webkit-transform"] = `rotate(${this.angle}deg)`;
    this.element.style["transform"] = `rotate(${this.angle}deg)`;

    if (this.inputHandler.keys[13] && (this.bulletTimer.millisecondsElapsed() > 1000)) {
      this.stage.addObject(new Bullet(this.x + this.width / 2, this.y + this.height / 2, 10, this.angle));
      this.bulletTimer.mark();
    }
  }
}
