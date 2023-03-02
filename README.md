# p5js_playsound_via_webserial

## Description

This p5js sketch receives a track number from an Arduino microcontroller and plays that sound.

There is an example Arduino program in the `arduino` folder (written using PlatformIO, but it will work fine with the Arduino IDE as well). In this example, a random number from 80-85 is sent every 10 seconds.

The p5js sketch receives that number and immediately subtracts 80 from it, to get the track number. The track number corresponds to a .wav file in the `assets` folder. ("wav" could easily be replaced with "mp3" in the p5js code).

## 80-85?

The reason for sending numbers in the range 80-85 from the Arduino, then substracting 80 in p5 (as opposed to just sending 0-5 from the Arduino) is that numbers are being sent as a raw byte. If you look at the raw bytes 0,1,2,3,4,5 in the Serial Monitor, you won't see anything, because they correspond to [invisible characters in ASCII](https://www.rapidtables.com/code/text/ascii-table.html). By using 80-85 (which will appear as the letters P,Q,R,S,T,U in the Serial Monitor), troubleshooting is made easier.

## Touch the Screen to Start

The sketch begins by telling you to touch the screen. It won't try to play any files (even if the Arduino is telling it to) until you do this. This is because the web browser requires some kind of user interaction before it will allow sounds to play. It makes sense. Unless you like the idea of any random website you visit playing an audio advertisement as soon as the page loads in your browser.

## See Also

* [p5js_webserial_template](https://github.com/FSUdigitalmedia/p5js_webserial_template)
* [ultrasonic_webserial](https://github.com/FSUdigitalmedia/ultrasonic_webserial)
* [generic p5js template](https://github.com/FSUdigitalmedia/p5js_global_template)
