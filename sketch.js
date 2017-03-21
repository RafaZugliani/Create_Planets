function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  drawStars();
}

function drawStars() {
  stroke(255);
  for(var i = 0; i < 800; i++) {
    point(random(width), random(height));
  }
}

function drawPlanet(x, y, radius) {
  colorMode (RGB);
  ellipse(x, y, radius);
  noStroke();
  fill (random(255), random(255), random(255), random);

}

function drawRings(x, y, w, h) {
  //draw some rings!!
   colorMode (HSB)
  ellipse(x, y, w, h);
  fill (random(255), random(255), random(255),100);
  noStroke();
  strokeWeight(random);
  tint(255, 127);
}

function drawMoons(number, distance) {
  //draw some moons...
  var segment = (Math.PI * 2) / number;
  for(var i = 0; i < number; i++) {
    var x = mouseX + cos(segment * i) * distance;
    var y = mouseY + sin(segment * i) * distance;
    colorMode (HSB)
    fill (random(255),60, 100)
    noStroke();
    ellipse(x, y, random(20));
  }
}

//function draw() {
//
//for(var i = 0; i < stacks.length; i++)
// { stacks[i].draw(); 
//    }
//  }
//
//var stacks = [];

function mouseClicked () {
  var r = random(20, 150);
 drawPlanet(mouseX, mouseY, r);
  drawRings(mouseX, mouseY, random (150), random (150));
   drawMoons(8, 60);
   //var stack = new Stack();
   //stack.center.x = mouseX; stack.center.y = mouseY;
   //stacks.push(stack);
}
// function Stack() {
//    this.center = {x: 0, y:0};
//    this.total = 50;
//    this.step = 20;
//    this.record = [];
//     this.draw = function() {
//       this.total--;
//        if(this.total <= 0) {
//          return; 
//          
//        } this.radius += this.step;
//        colorMode(HSB); 
//          this.record.push(color(random(255), 80, 80));
//          for(var i = this.record.length - 1; i >= 0; i--) {
//            fill(this.record[i]);
//            ellipse(this.center.x, this.center.y, i * this.step, i * this.step);
//            }
//           }
//         }
    


