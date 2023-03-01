const serial = new p5.WebSerial();
let incomingSerialData = []; // an array

function setup() {
  createCanvas(600,600);
  noStroke();

  setUpSerialFunctions();
}

function draw() {
  // joystick demo - replace this with your code
  background("lightBlue");
  let x = map(incomingSerialData[0],0,1023,0,width);
  let y = map(incomingSerialData[1],0,1023,0,width);
  if (incomingSerialData[2]) {
    fill("darkBlue");
  } else {
    fill("red");
  }
  ellipse(x,y,60,60);
}
