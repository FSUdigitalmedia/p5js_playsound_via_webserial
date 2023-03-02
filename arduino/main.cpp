// This is a sample program for the Arduino to communicate with the 
// corresponding p5js_playsound_via_webserial sketch.
// It sends a random number from 80-85, once every 10 seconds.
// The p5 sketch receives the random track number and plays that sound file.
// We use track numbers from 80-85 because they appear as the letters P,Q,R,S,T,U
// when we look in the Serial Monitor. 
// The numbers 0-5 (which corresponds to the track numbers in p5) are invisible 
// in the Serial Monitor, making it difficult to troubleshoot.
// (See: https://www.rapidtables.com/code/text/ascii-table.html for more on ASCII)
// It all works out because the p5 sketch subtracts 80 from the number it receives!

#include <Arduino.h>
// the above line is required for PlatformIO
// if you are using PIO, you should also add this line to your platform.ini file:
// monitor_speed = 57600

void setup() {
  Serial.begin(57600);
  randomSeed(analogRead(5)); // randomize using noise from analog pin 5
  while (!Serial) {
    ; // wait for serial port to connect before proceeding
  } 
}

void loop() {
  // randomly come up with a track number from 80-85 
  // (those numbers represent the letters PQRSTU, while the numbers 0-5 represent
  //  non-visible characters. It's just easier to troubleshoot if we can see what's 
  //  being sent, when we look in the Serial Monitor!)
  byte trackNumber = byte(random(80,85+1));
  // send that number to the client, as a byte
  Serial.write(trackNumber);
  
  delay(10000); // wait 10 seconds before sending another random number
}