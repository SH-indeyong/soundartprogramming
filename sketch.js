var wave;
var playing = false;
var button;
let r, g, b;

// 한번만 실행
function setup() {
  // createCanvas(displayWidth, displayHeight);
  createCanvas(640, 480);

  wave = new p5.Oscillator();
  wave.setType('sine');
  wave.freq(440);
  wave.amp(0);      //volume
  
  // 버튼 추가
  button = createButton('play/pause');
  button.mousePressed(toggle);

  // 가속도 추가
  r = random(50, 255);
  g = random(0, 200);
  b = random(50, 255);
}

// 반복
// function draw() {
//   background(220);
// }

function draw(){
  background(r, g, b);
  console.log('draw');
}

function toggle(){
  if(!playing){
    wave.start();
    wave.amp(0.5, 1);
    playing = true;
  }else{
    wave.amp(0, 1);
    playing = false;
  }
}

// 가속도 추가
function deviceMoved(){
  r = map(accelerationX, -90, 90, 100, 175);
  g = map(accelerationY, -90, 90, 100, 200);
  b = map(accelerationZ, -90, 90, 100, 200);
}

// 가속도 상자

// 흔들기 추가

//