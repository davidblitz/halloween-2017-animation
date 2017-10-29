var img;
var cx, cy;

var startFrame, startWeight, maxSize;
var bloodVec;
function preload() {
  img = loadImage("../img/rauhfasertapete1.jpg");
}

function setup() {
  createCanvas(500, 342);
  background(img);
  
  cx = width/2;
  cy = height/2;
  
  startFrame = 1;
  startWeight = random(0.5, 2);
  bloodVec = createVector(random(0, width), 0);
  maxSize = random(height);
}

function draw() {
  var prevPos = createVector(bloodVec.x, bloodVec.y);
  var gravityDiff = random(3);
  var xDiff = random(-0.5, 0.5);
  var yDiff = random(-0.5, 0.5);
  bloodVec.x += xDiff;
  bloodVec.y += yDiff + gravityDiff;
  var diffMag = mag(xDiff, yDiff);
  var w = max(abs( (startWeight*maxSize) / (frameCount - startFrame + 25)), 4*diffMag);
  var a = map(frameCount - startFrame, 0, maxSize, 100, 200);
  strokeWeight(w);
  stroke(a, 7, 7, 150);
  if(bloodVec.y < maxSize) line(prevPos.x, prevPos.y, bloodVec.x, bloodVec.y);
  else {
    startFrame = frameCount;
    startWeight = random(0.5, 2);
    var startHeight = random(0, cy);
    bloodVec = createVector(random(0, width), startHeight);
    maxSize = random(startHeight, height);
  }
}