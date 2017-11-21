class Bullet extends Actor {
  constructor(x, y, speed, angle) {
    super();
    this.angle = angle;
    this.speed = speed;
    this.x = x;
    this.y = y;

    this.initX = x;
    this.initY = y;
  }

  init() {
    super.init();
    this.setBounds({
      x: this.x,
      y: this.y,
      width: 4,
      height: 10
    });

    this.styleElement({
      "z-index": "0",
      "background-image": "url('res/bulletBlue1.png')",
      "background-repeat": "no-repeat",
      "background-size": "auto",
      "-ms-transform": `rotate(${this.angle}deg)`,
      "-webkit-transform": `rotate(${this.angle}deg)`,
      "transform": `rotate(${this.angle}deg)`
    });

    this.lifetime = new Timer();
  }

  update() {
    this.x -= this.speed * Math.sin(this.angle * Math.PI / 180);
    this.y += this.speed * Math.cos(this.angle * Math.PI / 180);

    this.setBounds({
      x: this.x,
      y: this.y
    });

    if (this.lifetime.millisecondsElapsed() > 1000) {
      this.stage.removeObject(this);
    }

    this.element.style["-ms-transform"] = `rotate(${this.angle}deg)`;
    this.element.style["-webkit-transform"] = `rotate(${this.angle}deg)`;
    this.element.style["transform"] = `rotate(${this.angle}deg)`;
  }
}
