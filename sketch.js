// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain

// Snowfall
// Edited Video: https://youtu.be/cl-mHFCGzYk

const snow = [];
let gravity;

let zOff = 0;

let spritesheet;
const textures = [];

function preload() {
  spritesheet = loadImage("flakes32.png");
}

function setup() {
  const cv = createCanvas(windowWidth, windowHeight);
  cv.style("position", "absolute");
  cv.style("top", "0");
  cv.style("z-index", "-1");

  gravity = createVector(0, 0.3);
  for (let x = 0; x < spritesheet.width; x += 32) {
    for (let y = 0; y < spritesheet.height; y += 32) {
      const img = spritesheet.get(x, y, 32, 32);
      image(img, x, y);
      textures.push(img);
    }
  }

  for (let i = 0; i < 400; i++) {
    const x = random(width);
    const y = random(height);
    const design = random(textures);
    snow.push(new Snowflake(x, y, design));
  }
}

function draw() {
  background("#ebfbfc");
  //snow.push(new Snowflake());

  zOff += 0.1;

  for (flake of snow) {
    const xOff = flake.pos.x / width;
    const yOff = flake.pos.y / height;
    const wAngle = noise(xOff, yOff, zOff) * TWO_PI;
    const wind = p5.Vector.fromAngle(wAngle);
    wind.mult(0.05);

    flake.applyForce(gravity);
    flake.applyForce(wind);
    flake.update();
    flake.render();
  }

  // for (let i = snow.length - 1; i >= 0; i--) {
  //   if (snow[i].offScreen()) {
  //     snow.splice(i, 1);
  //   }
  // }
}

localStorage.setItem("token", "super_secret_xss");
