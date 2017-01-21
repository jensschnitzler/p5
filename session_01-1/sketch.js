var mic;
var d = 30 //circle diameter
var x = d/2;
var speed = 5;
var angle = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
    frameRate(30);
    
    // Create an Audio input
    mic = new p5.AudioIn();
    
    // start the Audio Input.
    // By default, it does not .connect() (to the computer speakers)
    mic.start();
}

function draw() {
    

    // Get the overall volume (between 0 and 1.0)
    var vol = mic.getLevel();
    smooth(1);
    
    // Draw a rectangle
    c4 = color('rgba(0, 0, 0, 0.6)');
    fill( c4 );
    stroke( c4 );
    rectMode( CENTER );
    translate(width/2, height/2);
    angle = angle + 0.1;
    rotate(angle);
    rect( 0, 0, 2, height + width );
    resetMatrix();
    
    // Draw an ellipse with diameter based on volume
    c1 = color('rgba(0, 0, 0, 0.2)');
    fill( c1 );
    noStroke();
    var h = map(vol, 0, 1, height * 0.2, height * 1.5);
    ellipse(width/2, height/2, h, h);
    
    // Draw an ellipse outline with diameter based on volume
    noFill();
    var weight = map(vol, 0, 1, 0.5, 10);
    strokeWeight( weight );
    c2 = color('rgba(255, 255, 255, 0.7)');
    stroke( c2 );
    var h = map(vol, 0, 1, height * 0.21, height * 1.6);
    ellipse(width/2, height/2, h, h);
    
    /*
    // Draw circle running from left to right and back
    fill(c2);
    ellipse(x, height/2, d, d);
    
    x = x + speed;
    
    if (x > width - d/2) {
      speed = speed * -1;
    }
    if (x < d/2) {
      speed = speed * -1;
    }
    
    
    r = map( mouseX, 0, width, 0, 255 );
    b = map( mouseX, width, 0, 0, 255 );

    noStroke();
    //c3 = color('rgba(r, 0, 0, 0.8)');
    //fill( c3 );
    fill( r, 0, b );
    ellipse(mouseX, mouseY, 10);
    */
}

function mouseClicked() {
  clear();
  background(0);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(0);
}