let mSerial;
let readyToRead;

let characterWidth = 50; 
let characterHeight = 150; 

// function character1() {
//x1, y1
// }
// function character2() {
  //x2, y2
// }
// function character3() {
  //x3, y3
// }
// function character4() {
  //x4, y4
// }

// function description1() {

// }
// function description2() {

// }
// function desciption3() {

// }
// function description4() {

// }

// function story1() {
  //button 1 - click through story, audio, visuals 
// }
// function story2() {
  //button 1 - click through story, audio, visuals 
// }
// function story3() {
  //button 1 - click through story, audio, visuals 
// }
// function story4() {
  //button 1 - click through story, audio, visuals 
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

// function mouseClicked() {
//   if (
//     mouseX > x1 &&
//     mouseX < x1 + characterWidth &&
//     mouseY > y1 &&
//     mouseY < y1 + characterHeight
//     )  
//      { story1();
//       }
//    else if (
//     mouseX > x2 &&
//     mouseX < x2 + characterWidth &&
//     mouseY > y2 &&
//     mouseY < y2 + characterHeight
//     )  
//      { story2();
//       }
//    else if (
//     mouseX > x3 &&
//     mouseX < x3 + characterWidth &&
//     mouseY > y3 &&
//     mouseY < y3 + characterHeight
//     )  
//      { story3();
//       }
//    else if (
//     mouseX > x4 &&
//     mouseX < x4 + characterWidth &&
//     mouseY > y4 &&
//     mouseY < y4 + characterHeight
//     )  
//      { story4();
//       }

// }

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

    //hover preview
    // if (
    //   mouseX > x1 &&
    //   mouseX < x1 + characterWidth &&
    //   mouseY > y1 &&
    //   mouseY < y1 + characterHeight 
    //   ){
    //     description1(); 
    //    }
     // if (
    //   mouseX > x2 &&
    //   mouseX < x2 + characterWidth &&
    //   mouseY > y2 &&
    //   mouseY < y2 + characterHeight 
    //   ){
    //     description2(); 
    //    }
     // if (
    //   mouseX > x3 &&
    //   mouseX < x3 + characterWidth &&
    //   mouseY > y3 &&
    //   mouseY < y3 + characterHeight 
    //   ){
    //     description3(); 
    //    }
     // if (
    //   mouseX > x4 &&
    //   mouseX < x4 + characterWidth &&
    //   mouseY > y4 &&
    //   mouseY < y4 + characterHeight 
    //   ){
    //     description4(); 
    //    }
  
  //button 2 - return to homepage 

}
  
