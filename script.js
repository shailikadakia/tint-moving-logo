let dvdImage, x, xVelocity, y, yVelocity, canvasWidth, imageWidth, canvasHeight, imageHeight;

function setup(){
  imageWidth = 200;
  canvasWidth = 600;
  imageHeight = 100;
  canvasHeight = 300;
  createCanvas(canvasWidth, canvasHeight);
  // We only want to load the logo once.
  dvdImage = loadImage("https://cdn.glitch.com/eaea72a4-ac6d-4777-b76e-f37d75959aa5%2Fdvd.jpeg?1515761833387");
  x = 0;
  y = 0;
  xVelocity= 6;
  yVelocity = 2;
}

function draw(){
  background(220);
  if (x+imageWidth > canvasWidth || x < 0 ) {
    xVelocity = -xVelocity;
  } 
  
    x += xVelocity;
  
   if (y+imageHeight > canvasHeight || y < 0) {
    yVelocity = -yVelocity;
  } 
  
    y += yVelocity;
  
 
  // Tint the logo.
  tint(56, 90)
  tint (150, 8, 100, 50)
   // Draw the logo at the new position.
  image(dvdImage, x, y, imageWidth, imageHeight);
}
