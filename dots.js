const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
if(window.innerHeight <= window.innerWidth){
  canvas.width = window.innerHeight * 0.9;
  canvas.height = window.innerHeight * 0.9;
}
else{
  canvas.width = window.innerWidth * 0.9;
  canvas.height = window.innerWidth * 0.9;
}
let time = 0; let a; let b;
let spriteMoveArray = [];
let sprite1xsin; let sprite1xcos; let sprite1ysin; let sprite1ycos;
let sprite2xsin; let sprite2xcos; let sprite2ysin; let sprite2ycos;

function setMoveArray(){
  sprite1xsin = (Math.random() * 4) - 2; spriteMoveArray.push(sprite1xsin);
  sprite1xcos = (Math.random() * 4) - 2; spriteMoveArray.push(sprite1xcos);
  sprite1ysin = (Math.random() * 4) - 2; spriteMoveArray.push(sprite1ysin);
  sprite1ycos = (Math.random() * 4) - 2; spriteMoveArray.push(sprite1ycos);
  sprite2xsin = (Math.random() * 4) - 2; spriteMoveArray.push(sprite2xsin);
  sprite2xcos = (Math.random() * 4) - 2; spriteMoveArray.push(sprite2xcos);
  sprite2ysin = (Math.random() * 4) - 2; spriteMoveArray.push(sprite2ysin);
  sprite2ycos = (Math.random() * 4) - 2; spriteMoveArray.push(sprite2ycos);

  for(let i = 0; i < spriteMoveArray.length; i++){
    if(spriteMoveArray[i] <= 0.75 && spriteMoveArray[i] >= -0.75){
      if(spriteMoveArray[i] <= 0){
         spriteMoveArray[i] -= 0.5;
      }
      if(spriteMoveArray[i] >= 0){
         spriteMoveArray[i] += 0.5;
      }
    }
  }
}


class Sprite{
    constructor(x, y, r, g, b, rmax, gmax, bmax, active){
      this.x = x;
      this.y = y;
      this.r = r;
      this.g = g;
      this.b = b;
      this.rmax = rmax;
      this.gmax = gmax;
      this.bmax = bmax;
      this.active = active;
    }
    draw(){
        if(this.active === true){
        ctx.fillStyle = "rgb(" + this.r + "," + this.g + "," + this.b + ")";
        ctx.beginPath();
        ctx.arc(this.x, this.y, canvas.width / 30, 0, Math.PI * 2);
        ctx.fill();
        ctx.closePath();
        let trail = new Trail(this.x, this.y, 255 - ((255 - this.r) / 4), 255 - ((255 - this.g) / 4), 255 - ((255 - this.b) / 4), 1, canvas.width / 30);
        trailArray.push(trail);
        }
    }
  }

class Trail{
      constructor(x, y, r, g, b, fade, size){
      this.x = x;
      this.y = y;
      this.r = r;
      this.g = g;
      this.b = b;
      this.fade = fade;
      this.size = size;
    }
    draw(){
        ctx.fillStyle = "rgb(" + this.r + "," + this.g + "," + this.b + ")";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.closePath();
    }
    fadeSlow(){
        this.r += 0.25;
        this.g += 0.25;
        this.b += 0.25;
    }
    fadeFast(){
        this.r += 1;
        this.g += 1;
        this.b += 1;
    }
}

let trailArray = [];

function drawTrails(){
  for(let i = 0; i < trailArray.length; i++){
    trailArray[i].draw(); 
    if(trailArray[i].fade === 1){
      trailArray[i].fadeSlow();
    }
  }
}
function setSpriteColor(){
  let option1 = Math.floor(Math.random() * 3);
  if(option1 === 0){
    sprite1 = new Sprite(canvas.width * 2, canvas.height * 2, 130 + Math.random() * 80, 130 + Math.random() * 80, 180 + Math.random() * 60, 200, 200, 255, true);
  }
  else if(option1 === 1){
    sprite1 = new Sprite(canvas.width * 2, canvas.height * 2, 130 + Math.random() * 80, 180 + Math.random() * 60, 130 + Math.random() * 80, 200, 255, 200, true);
  }
  else if(option1 === 2){
    sprite1 = new Sprite(canvas.width * 2, canvas.height * 2, 180 + Math.random() * 60, 130 + Math.random() * 80, 130 + Math.random() * 80, 200, 200, 255, true);
  }

  let option2 = Math.floor(Math.random() * 3);
  if(option2 === 0){
    sprite2 = new Sprite(canvas.width * 2, canvas.height * 2, 130 + Math.random() * 70, 130 + Math.random() * 70, 180 + Math.random() * 60, 200, 200, 255, true);
  }
  else if(option2 === 1){
    sprite2 = new Sprite(canvas.width * 2, canvas.height * 2, 130 + Math.random() * 70, 180 + Math.random() * 60, 130 + Math.random() * 70, 200, 255, 200, true);
  }
  else if(option2 === 2){
    sprite2 = new Sprite(canvas.width * 2, canvas.height * 2, 180 + Math.random() * 60, 130 + Math.random() * 70, 130 + Math.random() * 70, 200, 200, 255, true);
  }
}

function changeColor(){
  let a = Math.floor(Math.random() + 0.5);
  let b = Math.floor(Math.random() + 0.5);
  let c = Math.floor(Math.random() + 0.5);
  let d = Math.floor(Math.random() + 0.5);
  let e = Math.floor(Math.random() + 0.5);
  let f = Math.floor(Math.random() + 0.5);
  
  if(a === 0 && sprite1.r >= sprite1.rmax - 80){sprite1.r --;}
  if(a === 1 && sprite1.r <= sprite1.rmax){sprite1.r ++;}
  if(b === 0 && sprite1.g >= sprite1.gmax - 80){sprite1.g --;}
  if(b === 1 && sprite1.g <= sprite1.gmax){sprite1.g ++;}
  if(c === 0 && sprite1.b >= sprite1.bmax - 80){sprite1.b --;}
  if(c === 1 && sprite1.b <= sprite1.bmax){sprite1.b ++;}
  if(d === 0 && sprite2.r >= sprite2.rmax - 80){sprite2.r --;}
  if(d === 1 && sprite2.r <= sprite2.rmax){sprite2.r ++;}
  if(e === 0 && sprite2.g >= sprite2.gmax - 80){sprite2.g --;}
  if(e === 1 && sprite2.g <= sprite2.gmax){sprite2.g ++;}
  if(f === 0 && sprite2.b >= sprite2.bmax - 80){sprite2.b --;}
  if(f === 1 && sprite2.b <= sprite2.bmax){sprite2.b ++;} 
}

function move(){
  sprite1.y = canvas.height / 2 + (0.5 * (Math.sin(time / (40 / sprite1ysin)) + Math.cos(time / (40 / sprite1ycos)))) * canvas.height / 2.25;
  sprite1.x = canvas.width / 2 + (0.5 * (Math.sin(time / (40 / sprite1xsin)) + Math.cos(time / (40 / sprite1xcos)))) * canvas.width / 2.25;
  sprite2.y = canvas.height / 2  - (0.5 * (Math.sin(time / (40 / sprite2ysin)) + Math.cos(time / (40 / sprite2ycos)))) * canvas.height / 2.25;
  sprite2.x = canvas.width / 2 - (0.5 * (Math.sin(time / (40 / sprite2xsin)) + Math.cos(time / (40 / sprite2xcos)))) * canvas.width / 2.25;
}

function collide(){
  if(sprite1.active === true){
      a = sprite1.x - sprite2.x;
      b = sprite1.y - sprite2.y;
      if(Math.sqrt(Math.pow(a, 2) + Math.pow(b,2)) <= canvas.width / 15){
         why = new Trail((sprite1.x + sprite2.x)/2, (sprite1.y + sprite2.y)/2, (sprite1.r + sprite2.r)/2, (sprite1.g + sprite2.g)/2, (sprite1.b + sprite2.b)/2, 0, canvas.width / 20);
        trailArray.push(why);
        sprite1.active = false;
        sprite2.active = false;
        for(let i = 0; i < 20; i++){
          explosions = new Trail(Math.random() * canvas.width, Math.random() * canvas.height, (sprite1.r + sprite2.r)/2, (sprite1.g + sprite2.g)/2, (sprite1.b + sprite2.b)/2, 0, canvas.width / 45);
          trailArray.push(explosions);
          time = 0;
        }
       }
  }
  if(sprite1.active === false){
    if(time >= 5){
      for(let i = 0; i < trailArray.length; i++){
        trailArray[i].fadeFast();
      }
    }
    if(time >= 125){
      setSpriteColor();
      setMoveArray();
    }
  }
}

function animate(){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  time++;
  drawTrails();
  changeColor();
  move();
  collide();
  sprite1.draw();
  sprite2.draw();
  requestAnimationFrame(animate);
}

setMoveArray();
setSpriteColor();
animate();
