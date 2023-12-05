let mSerial;
let readyToRead;

// function character1() {

// }
// function character2() {

// }
// function character3() {

// }
// function character4() {

// }

function connectToSerial() {
  mSerial.open(9600);
  readyToRead = true; 
}

function setup() {
  // setup project
  createCanvas(windowWidth, windowHeight);

  // setup serial
  mSerial = createSerial();
  readyToRead = false;

  let connectButton = createButton("Connect To Serial");
  connectButton.position(width / 2, height / 2);
  connectButton.mousePressed(connectToSerial);
}

function draw() {

  background(0);

  if (mSerial.opened() && readyToRead) {
    mSerial.clear(); 
    mSerial.write(10); 
    readyToRead = false;
  }
  if (mSerial.opened() && mSerial.availableBytes()>0) {
    let mline = mSerial.readUntil("\n"); 
    print(mline); 
    readyToRead = true;
  }

  // drawing characters on homepage
    //character1(); 
    //character2(); 
    //character3(); 
    //character4();
}
  
