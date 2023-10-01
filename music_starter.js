
let firstRun=true
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
//var girl_singing = map(vocal,0,150,80)

//let backround = background

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

//road
push();
  stroke(whiteA);
  strokeWeight(10)
  fill(whiteC);
 beginShape();
  vertex(0,720)
  vertex(1280, 720)
  vertex(1000,360)
  vertex(280,360)
 endShape(CLOSE);
pop();

//grass
push();
  stroke(limeC);
  strokeWeight(10);
  fill(limeA);
beginShape();
  vertex(0,720);
  vertex(280,360);
  vertex(0,360);
endShape(CLOSE);
beginShape();
  vertex(1280,720);
  vertex(1000,360);
  vertex(1280,360);
  endShape(CLOSE);
pop();

//car which moves with the base
push() //wheelss
  stroke(255);
  strokeWeight(3);
  fill(wheelcolour);
  scale(car_scale);
 beginShape();//Wheel L
  vertex(car_width-275,350);
  vertex(car_width-275,425);
  vertex(car_width-225,425);
  vertex(car_width-225,350);
 endShape(CLOSE); 
 beginShape(); //Wheel R
  vertex(car_width+275,350);
  vertex(car_width+275,425);
  vertex(car_width+225,425);
  vertex(car_width+225,350);
 endShape(CLOSE);
pop();

push()
 stroke(255)
 strokeWeight(3)
 fill(blueA)
 scale(car_scale)
 beginShape(); //car windsheld
  vertex(car_width,car_height-8);
  vertex(car_width+190,car_height-8);
  vertex(car_width+230,car_height+100);
  vertex(car_width-235,car_height+100);
  vertex(car_width-190,car_height-8);
  vertex(car_width,car_height-8);
 endShape(CLOSE);

pop();
 push();
 stroke(255);
 strokeWeight(3);
 fill(lillacB);
 scale(car_scale)
 beginShape(); //main car body
  vertex(car_width,car_height-20); //top middle
  vertex(car_width+200,car_height-20);
  vertex(car_width+250,car_height+100);
  vertex(car_width+300,car_height+140);
  vertex(car_width+300,car_height+250);
  vertex(car_width-300,car_height+250);
  vertex(car_width-300,car_height+140);
  vertex(car_width-250,car_height+100);
  vertex(car_width-200,car_height-20);
 endShape(CLOSE);
pop()

//The girls singing in the car
driver.resize(250,250);
image(driver,300,150-vocal/2);

push(); //car hood
  stroke(255);
  strokeWeight(1);
  fill(lillacA);
  scale(car_scale)
 beginShape();
  vertex(car_width+250,car_height+100);
  vertex(car_width+300,car_height+140);
  vertex(car_width-300,car_height+140);
  vertex(car_width-250,car_height+100);
 endShape(CLOSE);
 pop();

push();//car front
  stroke(255);
  strokeWeight(3);
  fill(lillacC);
  scale(car_scale)
 beginShape();
  vertex(car_width+300,car_height+140);
  vertex(car_width+300,car_height+250);
  vertex(car_width-300, car_height+250);
  vertex(car_width-300,car_height+140);
 endShape(CLOSE);
pop();

push();//car bar
  stroke(255);
  strokeWeight(3);
  fill(181);
  scale(car_scale);
 beginShape();
  vertex(car_width+310,car_height+230);
  vertex(car_width+310,car_height+270);
  vertex(car_width-310,car_height+270);
  vertex(car_width-310,car_height+230)
 endShape(CLOSE);
pop();

push(); //Leisence plate
  stroke(255);
  strokeWeight(3);
  fill(whiteA);
  scale(car_scale);
 beginShape();
  vertex(car_width+75,car_height+240);
  vertex(car_width+75,car_height+300);
  vertex(car_width-75,car_height+300);
  vertex(car_width-75,car_height+240);
 endShape(CLOSE);
pop();

push();
  textSize(40);
  stroke(3);
  fill(1);
  text('G3TH1M',car_width+130,car_height+470)
pop()

push();
  noStroke();
  fill(yellowA)
  scale(car_scale);
  ellipse(car_width+230,car_height+185,headlight_size);
  ellipse(car_width-230,car_height+185,headlight_size);
pop();



}
