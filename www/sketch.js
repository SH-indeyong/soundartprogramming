var wave;
var playing = false;
var button;

// 한번만 실행
function setup() {
  // createCanvas(displayWidth, displayHeight);
  createCanvas(640, 480);

  wave = new p5.Oscillator();
  wave.setType('sine');
  wave.start();
  wave.freq(440);
  wave.amp(0);      //volume

  button = createButton('play/pause');
  button.mousePressed(toggle);
}

// 반복
// function draw() {
//   background(220);
// }

function toggle(){
  if(!playing){
    wave.amp(0.5, 1);
    playing = true;
  }else{
    wave.amp(0, 1);
    playg = false;
  }
}