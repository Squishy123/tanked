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
    tile.setBounds({
      x: x * tile.width,
      y: y * tile.height
    });
    stage.addObject(tile);
    grass.push(tile);
  }
}

let enemy = new Enemy();
stage.addObject(enemy);

let player = new Player();
stage.addObject(player);

console.log(player.getBounds())
console.log(stage.checkCollisions(player));
