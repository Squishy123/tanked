class Tile extends Actor {
  constructor() {
    super();
  }

  init() {
    super.init();
    let rand = Math.floor(Math.random() * 2);
    if (rand == 0) {
      this.styleElement({
        "background-image": "url('res/tileGrass1.png')"
      });
    } else {
      this.styleElement({
        "background-image": "url('res/tileGrass2.png')"
      });
    }

    this.styleElement({
      "background-repeat": "no-repeat",
      "background-size": "32px 32px"
    });

    this.setBounds({
      width: 32,
      height: 32
    });
  }
}
