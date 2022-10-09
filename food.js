class Food {
     constructor(){
          this.x = floor(random(floor(width / scl))) * scl;
          this.y = floor(random(floor(height / scl))) * scl;
     
     }
     
     update() {
          this.x = floor(random(floor(width / scl))) * scl;
          this.y = floor(random(floor(height / scl))) * scl;
     }

     eaten () {
          this.update();
     }

     show () {
          fill(255, 0, 0);
          rect(this.x, this.y, scl, scl);
     }
}