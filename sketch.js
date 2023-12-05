// serial variables
let mSerial;

let readyToRead;

function character1() {
  
}

function connectToSerial() {
//if (!mSerial.opened()) {
  mSerial.open(9600);
  readyToRead = true; 

//     readyToReceive = true;
//     connectButton.hide();
//   }
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
  // project logic
  background(0);

  if(readyToRead) {
    mSerial.clear(); 
    mSerial.write(10); 
    readyToRead = false;
  }
  if (mSerial.opened() && mSerial.availableBytes()>0) {
    let mline = mSerial.readUntil("\n"); 
    print(mline); 
    readyToRead = true;
  }
}
  // for (let i = 0; i < mElls.length; i++) {
  //   let me = mElls[i];
  //   fill(me.c, 0, 0);
  //   ellipse(me.x, me.y, me.d, me.d);
  // }

  // // update serial: request new data
  // if (mSerial.opened() && readyToReceive) {
  //   readyToReceive = false;
  //   mSerial.clear();
  //   mSerial.write(0xab);
  // }

  // // update serial: read new data
  // if (mSerial.availableBytes() > 8) {
  //   receiveSerial();
  // }
