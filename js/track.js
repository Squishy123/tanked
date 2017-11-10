class Track extends Actor {
  constructor(x, y) {
    super();
    this.x = x;
    this.y = y;
  }

  init() {
    super.init();
    this.styleElement({
      "background-image": "url('res/tracksSmall.png')",
      "background-repeat": "no-repeat",
      "background-size": "37px 52px"
    });

    this.setBounds({
      x: this.x,
      y: this.y,
      width: 37,
      height: 52
    });

    let obj = this;
  //  this.stage.checkCollisions(this).forEach(function(e) {
      //  if (e instanceof Track) {
      //      this.stage.removeObject(obj);
      //    }
    //});
  }
}
