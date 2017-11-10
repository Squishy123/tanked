let stage = new Stage(document.getElementById("stage"));
stage.setBounds({
  x: 0,
  y: 0,
  width: 500,
  height: 500
});
stage.start();

//Add grass to the stage
let grass = [];
for (let x = 0; x < stage.getBounds().width / 32; x++) {
  for (let y = 0; y < stage.getBounds().height / 32; y++) {
    let tile = new Tile();
    stage.addObject(tile);
    tile.setBounds({
      x: x * tile.width,
      y: y * tile.height
    });
    grass.push(tile);
  }
}

//Add our tank to the Stage
let tank = new Tank();
stage.addObject(tank);
