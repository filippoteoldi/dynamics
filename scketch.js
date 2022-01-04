// Create a new canvas to the browser size
function setup () {
  createCanvas(windowWidth, windowHeight);
}

// On window resize, update the canvas size
function windowResized () {
  resizeCanvas(windowWidth, windowHeight);
}

// Render loop that draws shapes with p5
function draw(){
  // For consistent sizing regardless of portrait/landscape
  const dim = Math.min(width, height);
  
  // Black background
  background(0);
  
  // Stroke only with a specific join style and thickness
  noFill();
  stroke(255);
  strokeJoin(BEVEL);
  strokeWeight(dim * 0.015);

  // Get time in seconds
  const time = millis() / 1000;
  
  // Get a value that ping-pongs from 0 ... 1
  const pingPong = sin(time * 0.75 - PI / 2) * 0.5 + 0.5;
  
  // Get a number of points, using pow() to skew to one end
  const points = lerp(2, 100, pow(pingPong, 2.5));
  
  // Size of shape
  const radius = dim / 3;
  
  // Draw shape with an angle offset
  const angle = pingPong * PI * 2;
  polygon(width / 2, height / 2, radius, points, angle);
}

// Draw a basic polygon, handles triangles, squares, pentagons, etc
function polygon(x, y, radius, sides = 3, angle = 0) {
  beginShape();
  for (let i = 0; i < sides; i++) {
    const a = angle + TWO_PI * (i / sides);
    let sx = x + cos(a) * radius;
    let sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
