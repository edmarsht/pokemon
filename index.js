const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

canvas.width = 1024;
canvas.height = 576;

c.fillStyle = "white";
c.fillRect(0, 0, canvas.width, canvas.width);

const image = new Image();
image.src = "./img/pokemon_map.png";

const playerImage = new Image();
playerImage.src = "./img/playerDown.png";


class Sprite {
  constructor({ position, velocity, image }) {
    this.position = position;
    this.image = image;
  }

  draw() {
    c.drawImage(this.image, this.position.x, this.position.y);
  }
}

const background = new Sprite({
  position: {
    x: -750,
    y: -550,
  },
  image: image,
});

const key = {
  ArrowDown: {
    pressed: false,
  },
  ArrowUp: {
    pressed: false,
  },
  ArrowRight: {
    pressed: false,
  },
  ArrowLeft: {
    pressed: false,
  },
};


let lastKey = '';

function animate() {
  window.requestAnimationFrame(animate);
  background.draw();
  c.drawImage(
    playerImage,
    0,
    0,
    playerImage.width / 4,
    playerImage.height,
    canvas.width / 2 - playerImage.width / 4 / 2 - 14,
    canvas.height / 2 + 10,
    playerImage.width / 4,
    playerImage.height
  );
  if (key.ArrowDown.pressed && lastKey === 'ArrowDown') background.position.y -= 5;
  else if (key.ArrowUp.pressed && lastKey === 'ArrowUp') background.position.y += 5;
  else if (key.ArrowRight.pressed && lastKey === 'ArrowRight') background.position.x -= 5;
  else if (key.ArrowLeft.pressed && lastKey === 'ArrowLeft') background.position.x += 5;
}

animate();

window.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowDown":
      key.ArrowDown.pressed = true;
      lastKey = 'ArrowDown';
      break;
    case "ArrowUp":
      key.ArrowUp.pressed = true;
      lastKey = 'ArrowUp';
      break;
    case "ArrowRight":
      key.ArrowRight.pressed = true;
      lastKey = 'ArrowRight';
      break;
    case "ArrowLeft":
      key.ArrowLeft.pressed = true;
      lastKey = 'ArrowLeft';
      break;
  }
});
window.addEventListener("keyup", (e) => {
  switch (e.key) {
    case "ArrowDown":
      key.ArrowDown.pressed = false;
      break;
    case "ArrowUp":
      key.ArrowUp.pressed = false;
      break;
    case "ArrowRight":
      key.ArrowRight.pressed = false;
      break;
    case "ArrowLeft":
      key.ArrowLeft.pressed = false;
      break;
  }
});
