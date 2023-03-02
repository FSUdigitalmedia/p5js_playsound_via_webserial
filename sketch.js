// p5js_playsound_via_webserial
// Created: Rob Duarte 3/1/2023

// This sketch plays a sound file when a number is received over the serial port.
// The number is sent from the Arduino sketch, which is also included in this repo.
// The sound files are in the assets folder, numbered 0.wav, 1.wav, etc.

const serial = new p5.WebSerial();

let numberOfTracks = 6; // number of sound files we have
let soundFiles = []; // the array that will store the sound files

let trackNumber = 0; // the track nubmer that will be sent from the Arduino
let triggerTrack = false; // signals that it's time to play a track
let screenTouched = false; // signals that the screen has been touched

// we load the sound files in preload(), which happens before anything else...
function preload() {
  // load sound files into the array
  for (let i = 0; i < numberOfTracks; i++) {
    soundFiles[i] = loadSound('assets/' + i + '.wav');
  }
}

// setup() runs once, when the program starts...
function setup() {
  createCanvas(600,600);
  background(150);
  textSize(30);
  textAlign(CENTER, CENTER);
  text("Touch the screen to start", width/2, height/2);
  setUpSerialFunctions();
}

// draw() runs continuously...
function draw() {

  if (screenTouched == false) {
    return; // don't try to play sounds until the screen has been touched
  }

  background(150);

  // triggerTrack is set to true in serialEvent()
  if (triggerTrack) {
    console.log("Playing track " + trackNumber);
    // play the track...
    soundFiles[trackNumber].play();
    triggerTrack = false;  // reset the trigger
  }
}

// no audio will play in the browser until some user interaction occurs. A touch/mouseclick will do.
function touchStarted() {
  getAudioContext().resume();
  screenTouched = true;
}
