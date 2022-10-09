var s;
var f;
var scl = 15;
var b = 0;
var turned = false;
var speed = 10;

function setup() {
     createCanvas(600, 600);
     s = new Snake();
     f = new Food();
     //frameRate(10);
}

function draw() {
     background(b);
     f.show();
     s.update();
     s.show();
     s.end();
     if (s.eat(f)) {
          f.eaten();
     }
     s.challenge();
     frameRate(speed + s.count / 3);
     turned = false;
}

function keyPressed() {

     if (keyCode === UP_ARROW && (this.s.yspeed != 1) && (turned === false)) {
          s.dir(0, -1);
          turned = true;
          return;
     }
     if (keyCode === DOWN_ARROW && (this.s.yspeed != -1) && (turned === false)) {
          s.dir(0, 1);
          turned = true;
          return;
     }
     if (keyCode === RIGHT_ARROW && (this.s.xspeed != -1) && (turned === false)) {
          s.dir(1, 0);
          turned = true;
          return;
     }
     if (keyCode === LEFT_ARROW && (this.s.xspeed != 1) && (turned === false)) {
          s.dir(-1, 0);
          turned = true;
     }
     if(keyCode === 32 && s.count >= 5) //space
     {
          s.increase();
          //console.log("this will be how i stop the game");
         // alert("hi");
     }
     if(keyCode === 84) {
          s.telePort();
     }

}