
let firstRun=true
//Road line that moves
var roadMove = 560
var skyWind = 360
var treeMove = 160
var treeScale = 1

// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(20)
  //textFont('Helvetica'); // please use CSS safe fonts
  rectMode(CENTER);
  textSize(24);

//Bass is the car moving up and down
var car_height = map(bass, 0, 100, 110, 80);
let car_width = width/3;
let car_scale = 1.5 ; 

//Drum is the car's headlights
var headlight_size = map(drum, 0, 100, 60, 100);

//The girls bopping and singing to the music
var girl_singing = map(vocal,100,150,80)

//background parameters and variables
let roadX = 280
let roadY = 360
let treeX = 640

//colour pallette
let limeA = color(190, 223, 153);
let limeB = color(157, 191, 119);
let limeC = color(133, 166, 97);

let lillacA = color(194, 155, 237);
let lillacB = color(178, 138, 222);
let lillacC = color(164, 123, 209);

let pinkA = color(232, 150, 214);
let pinkB = color(209, 122, 190);
let pinkC = color(198, 109, 179);

let yellowA = color(244, 228, 125);
let yellowB = color(228, 212, 108);
let yellowC = color(209, 192, 84);

let blueA = color(162, 221, 239);
let blueB = color(138, 202, 222);
let blueC = color(133, 196, 216);

let whiteA = color(244, 238, 216);
let whiteB = color(237, 231, 210);
let whiteC = color(225, 219, 195);

let wheelcolour = (28, 25, 31);

if (firstRun){
  rectMode(CENTER);
  driver = loadImage('assets/girl_0.png')
  firstRun=false
}


//Sunset/Sunrise
if (song.currentTime()>10){
  push()
  let lerpMap = map(vocal,0,100,0,1)
  let sky = lerpColor(pinkC,pinkA,lerpMap)
 stroke(1);
  strokeWeight(0);
  fill(sky);
 rect(640,180,1280,400)
pop()
}
else{
push()
  let lerpMap = map(vocal,0,100,0,1)
  let sky = lerpColor(blueC,blueA,lerpMap)
 stroke(1);
  strokeWeight(0);
  fill(sky);
 rect(640,180,1280,400)
pop()
}

push(); //road
  stroke(whiteA);
  strokeWeight(10)
  fill(61);
 beginShape();
  vertex(roadX-roadX,roadY+360)
  vertex(roadX+1000, roadY+360)
  vertex(roadX+720,roadY)
  vertex(roadX,roadY)
 endShape(CLOSE);
pop();

push(); //centerline
  strokeWeight(10);
  stroke(whiteA);
  fill(whiteA);
beginShape();
  vertex(roadX+365,roadMove);
  vertex(roadX+370,roadMove+100);
  vertex(roadX+350,roadMove+100);
  vertex(roadX+355,roadMove);
endShape(CLOSE);
pop();
roadMove = roadMove - 5;
if (roadMove<360){
  roadMove=720;
};

push(); //TREES!!!!
  strokeWeight(5);
  stroke(limeC);
  fill(limeB);
beginShape();
  vertex(treeX,160);//top point
  vertex(treeX+100,300);
  vertex(treeX+60,300);
  vertex(treeX+160,430);
  vertex(treeX+120,430);
  vertex(treeX+260,590);
  vertex(treeX,590);//bottom point
  vertex(treeX-260,590);
  vertex(treeX-120,430);
  vertex(treeX-160,430);
  vertex(treeX-60,300);
  vertex(treeX-100,300);
endShape(CLOSE);
pop();

// //grass
// push();
//   stroke(limeC);
//   strokeWeight(10);
//   fill(limeA);
// beginShape();
//   vertex(0,720);
//   vertex(280,360);
//   vertex(0,360);
// endShape(CLOSE);
// beginShape();
//   vertex(1280,720);
//   vertex(1000,360);
//   vertex(1280,360);
//   endShape(CLOSE);
// pop();

// //car which moves with the base
// push() //wheelss
//   stroke(255);
//   strokeWeight(3);
//   fill(wheelcolour);
//   scale(car_scale);
//  beginShape();//Wheel L
//   vertex(car_width-275,350);
//   vertex(car_width-275,425);
//   vertex(car_width-225,425);
//   vertex(car_width-225,350);
//  endShape(CLOSE); 
//  beginShape(); //Wheel R
//   vertex(car_width+275,350);
//   vertex(car_width+275,425);
//   vertex(car_width+225,425);
//   vertex(car_width+225,350);
//  endShape(CLOSE);
// pop();

//  push();
//  stroke(255);
//  strokeWeight(3);
//  fill(lillacB);
//  scale(car_scale)
//  beginShape(); //main car body
//   vertex(car_width,car_height-20); //top middle
//   vertex(car_width+200,car_height-20);
//   vertex(car_width+250,car_height+100);
//   vertex(car_width+300,car_height+140);
//   vertex(car_width+300,car_height+250);
//   vertex(car_width-300,car_height+250);
//   vertex(car_width-300,car_height+140);
//   vertex(car_width-250,car_height+100);
//   vertex(car_width-200,car_height-20);
//  endShape(CLOSE);
// pop()

// push()
//  stroke(255)
//  strokeWeight(3)
//  fill(blueA)
//  scale(car_scale)
//  beginShape(); //car windsheld
//   vertex(car_width,car_height-8);
//   vertex(car_width+190,car_height-8);
//   vertex(car_width+230,car_height+100);
//   vertex(car_width-235,car_height+100);
//   vertex(car_width-190,car_height-8);
//   vertex(car_width,car_height-8);
//  endShape(CLOSE);
//  pop()

// //The girls singing in the car
// driver.resize(250,250);
// image(driver,330,150-vocal/2);

// push();//steering wheel
//   stroke(0);
//   strokeWeight(10)
//   noFill();
//   scale(car_scale);
//   ellipse(car_width-122,car_height+115,80,80);
// pop();

// push(); //car hood
//   stroke(255);
//   strokeWeight(1);
//   fill(lillacA);
//   scale(car_scale);
//  beginShape();
//   vertex(car_width+250,car_height+100);
//   vertex(car_width+300,car_height+140);
//   vertex(car_width-300,car_height+140);
//   vertex(car_width-250,car_height+100);
//  endShape(CLOSE);
//  pop();

// push();//car front
//   stroke(255);
//   strokeWeight(3);
//   fill(lillacC);
//   scale(car_scale)
//  beginShape();
//   vertex(car_width+300,car_height+140);
//   vertex(car_width+300,car_height+250);
//   vertex(car_width-300, car_height+250);
//   vertex(car_width-300,car_height+140);
//  endShape(CLOSE);
// pop();

// push();//car bar
//   stroke(255);
//   strokeWeight(3);
//   fill(181);
//   scale(car_scale);
//  beginShape();
//   vertex(car_width+310,car_height+230);
//   vertex(car_width+310,car_height+270);
//   vertex(car_width-310,car_height+270);
//   vertex(car_width-310,car_height+230)
//  endShape(CLOSE);
// pop();

// push(); //Leisence plate
//   stroke(255);
//   strokeWeight(3);
//   fill(whiteA);
//   scale(car_scale);
//  beginShape();
//   vertex(car_width+75,car_height+240);
//   vertex(car_width+75,car_height+300);
//   vertex(car_width-75,car_height+300);
//   vertex(car_width-75,car_height+240);
//  endShape(CLOSE);
// pop();

// push();
//   textSize(40);
//   stroke(3);
//   fill(1);
//   text('G3T H1M',car_width+120,car_height+470)
// pop()

// push();
//   noStroke();
//   fill(yellowA)
//   scale(car_scale);
//   ellipse(car_width+230,car_height+185,headlight_size);
//   ellipse(car_width-230,car_height+185,headlight_size);
// pop();
}
