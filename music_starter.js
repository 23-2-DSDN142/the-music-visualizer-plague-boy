
let firstRun=true
//Road line that moves
var roadMove = 560
var treeColour = 0
var maxTreeColour = 100
var cloudX_I = 0
var cloudX_II = 600
var cloudX_III = 1000
var cloudX_V = -350
var rabbit_run = 40000
var bird_fly = -500

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
let treeX = 400
let treeY = 0
var trees_swaying = map(other,0,100,50,300)
let cloudY = 150

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
  rabbit = loadImage('assets/rabbit.png')
  bird = loadImage('assets/bird.png')
  firstRun=false
}

//Sunset/Sunrise
if (song.currentTime()>120){
  
  let lerpMap = map(vocal,0,100,0,1)
  let sky = lerpColor(pinkC,pinkA,lerpMap)
 push();
  stroke(1);
  strokeWeight(0);
  fill(sky);
 rect(640,180,1280,400)
 pop();
 push();
  noStroke();
  fill(whiteA);
  ellipse()
 pop();

}
else{
push()
  var lerpMap = map(vocal,0,100,0,1)
  let sky = lerpColor(blueC,blueA,lerpMap)
 stroke(1);
  strokeWeight(0);
  fill(sky);
 rect(640,180,1280,400)
pop()
}

push(); //flying bird
bird.resize(75,75);
image(bird, bird_fly, 50);
bird_fly = bird_fly + 2.5
if (bird<300){
  bird=-300
}
pop();

push();//clouds
  noStroke();
  fill(whiteA);
  ellipse(cloudX_I+100, cloudY, 150,150);
  ellipse(cloudX_I+25, cloudY+15, 100, 100);
  ellipse(cloudX_I+150, cloudY+5, 125, 125);
  cloudX_I = cloudX_I + 2;
  if (cloudX_I>1400){
    cloudX_I=-300
  }

  ellipse(cloudX_II+100, cloudY-90, 100,100);
  ellipse(cloudX_II+40, cloudY-80, 90, 90);
  ellipse(cloudX_II+150, cloudY-80, 75, 75);
  cloudX_II = cloudX_II + 2;
  if (cloudX_II>1400){
    cloudX_II=-300
  }

  ellipse(cloudX_III+50, cloudY, 200,200);
  ellipse(cloudX_III-25, cloudY+15, 150, 150);
  ellipse(cloudX_III+125, cloudY+25, 135, 135);
  cloudX_III = cloudX_III + 2;
  if (cloudX_III>1400){
    cloudX_III=-300
  }

  ellipse(cloudX_V+98, cloudY+125, 30, 30);
  ellipse(cloudX_V+70, cloudY+115, 50, 50);
  ellipse(cloudX_V+35, cloudY+120, 40, 40);
  cloudX_V = cloudX_V + 2;
  if (cloudX_V>1400){
    cloudX_V=-300
  }
pop();

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

if (treeColour % 30 === 0 && treeColour <= maxTreeColour) {//is divisable by 5 //CHAT GPT USED TO FIGURE OUT HOW TO GET CODE TO SHOW TRUE TO VALUE
  push(); //Trees on the Left
  strokeWeight(5);
  stroke(limeC);
  push(); //L Tree 1
  fill(limeC);
    translate(roadX-345,roadY-100);
    scale(.5);
  beginShape();
    vertex(trees_swaying+500,treeY-200);//top point
    vertex(trees_swaying/2+600,treeY-60);
    vertex(trees_swaying/2+560,treeY-60);
    vertex(trees_swaying/4+660,treeY+70);
    vertex(trees_swaying/4+620,treeY+70);
    vertex(treeX+360,treeY+230);
    vertex(treeX+200,treeY+230);//bottom point
    vertex(treeX-160,treeY+230);
    vertex(treeX-20,treeY+70);
    vertex(treeX-60,treeY+70);
    vertex(treeX+40,treeY-60);
    vertex(treeX,treeY-60);
  endShape(CLOSE);
  pop();
  push(); //L Tree 2
  fill(limeB);
  translate(roadX-490,roadY-100);
    scale(.65);
  beginShape();
  vertex(treeX+100,treeY-200);//top point
  vertex(treeX+200,treeY-60);
  vertex(treeX+160,treeY-60);
  vertex(treeX+260,treeY+70);
  vertex(treeX+220,treeY+70);
    vertex(treeX+360,treeY+230);
    vertex(treeX+200,treeY+230);//bottom point
    vertex(treeX-160,treeY+230);
    vertex(treeX-20,treeY+70);
    vertex(treeX-60,treeY+70);
    vertex(treeX+40,treeY-60);
    vertex(treeX,treeY-60);
  endShape(CLOSE);
  pop();
  push(); //L Tree 3
  fill(limeC);
  translate(roadX-635,roadY-100);
    scale(.8);
  beginShape();
  vertex(trees_swaying+500,treeY-200);//top point
  vertex(trees_swaying/2+600,treeY-60);
  vertex(trees_swaying/2+560,treeY-60);
  vertex(trees_swaying/4+660,treeY+70);
  vertex(trees_swaying/4+620,treeY+70);
    vertex(treeX+360,treeY+230);
    vertex(treeX+200,treeY+230);//bottom point
    vertex(treeX-160,treeY+230);
    vertex(treeX-20,treeY+70);
    vertex(treeX-60,treeY+70);
    vertex(treeX+40,treeY-60);
    vertex(treeX,treeY-60);
  endShape(CLOSE);
  pop();
  push(); //L Tree 4
  fill(limeB);
  translate(roadX-825,roadY-100);
    scale(1);
  beginShape();
  vertex(treeX+100,treeY-200);//top point
  vertex(treeX+200,treeY-60);
  vertex(treeX+160,treeY-60);
  vertex(treeX+260,treeY+70);
  vertex(treeX+220,treeY+70);
    vertex(treeX+360,treeY+230);
    vertex(treeX+200,treeY+230);//bottom point
    vertex(treeX-160,treeY+230);
    vertex(treeX-20,treeY+70);
    vertex(treeX-60,treeY+70);
    vertex(treeX+40,treeY-60);
    vertex(treeX,treeY-60);
  endShape(CLOSE);
  pop();
  push(); //L Tree 5
  fill(limeC);
  translate(roadX-1060,roadY-100);
    scale(1.25);
  beginShape();
  vertex(trees_swaying+500,treeY-200);//top point
  vertex(trees_swaying/2+600,treeY-60);
  vertex(trees_swaying/2+560,treeY-60);
  vertex(trees_swaying/4+660,treeY+70);
  vertex(trees_swaying/4+620,treeY+70);
    vertex(treeX+360,treeY+230);
    vertex(treeX+200,treeY+230);//bottom point
    vertex(treeX-160,treeY+230);
    vertex(treeX-20,treeY+70);
    vertex(treeX-60,treeY+70);
    vertex(treeX+40,treeY-60);
    vertex(treeX,treeY-60);
  endShape(CLOSE);
  pop();
  push(); //L Tree 6
  fill(limeB);
  translate(roadX-1345,roadY-100);
    scale(1.55);
  beginShape();
  vertex(treeX+100,treeY-200);//top point
  vertex(treeX+200,treeY-60);
  vertex(treeX+160,treeY-60);
  vertex(treeX+260,treeY+70);
  vertex(treeX+220,treeY+70);
    vertex(treeX+360,treeY+230);
    vertex(treeX+200,treeY+230);//bottom point
    vertex(treeX-160,treeY+230);
    vertex(treeX-20,treeY+70);
    vertex(treeX-60,treeY+70);
    vertex(treeX+40,treeY-60);
    vertex(treeX,treeY-60);
  endShape(CLOSE);
  pop();
  push(); //L Tree 7
  fill(limeC);
  translate(roadX-1665,roadY-100);
    scale(1.9);
  beginShape();
  vertex(trees_swaying+500,treeY-200);//top point
  vertex(trees_swaying/2+600,treeY-60);
  vertex(trees_swaying/2+560,treeY-60);
  vertex(trees_swaying/4+660,treeY+70);
  vertex(trees_swaying/4+620,treeY+70);
    vertex(treeX+360,treeY+230);
    vertex(treeX+200,treeY+230);//bottom point
    vertex(treeX-160,treeY+230);
    vertex(treeX-20,treeY+70);
    vertex(treeX-60,treeY+70);
    vertex(treeX+40,treeY-60);
    vertex(treeX,treeY-60);
  endShape(CLOSE);
  pop();
  //Trees on the right
  strokeWeight(5);
  stroke(limeC);
  push(); //R Tree 1
  fill(limeC);
    translate(roadX+565,roadY-100);
    scale(.5);
  beginShape();
  vertex(-trees_swaying+500,treeY-200);//top point
  vertex(treeX+200,treeY-60);
  vertex(treeX+160,treeY-60);
  vertex(treeX+260,treeY+70);
  vertex(treeX+220,treeY+70);
  vertex(treeX+360,treeY+230);
  vertex(treeX+200,treeY+230);//bottom point
  vertex(treeX-160,treeY+230);
  vertex(-trees_swaying/4+380,treeY+70);
  vertex(-trees_swaying/4+340,treeY+70);
  vertex(-trees_swaying/2+440,treeY-60);
  vertex(-trees_swaying/2+400,treeY-60);
  endShape(CLOSE);
  pop();
  push(); //R Tree 2
  fill(limeB);
  translate(roadX+550,roadY-100);
    scale(.65);
  beginShape();
  vertex(treeX+100,treeY-200);//top point
  vertex(treeX+200,treeY-60);
  vertex(treeX+160,treeY-60);
  vertex(treeX+260,treeY+70);
  vertex(treeX+220,treeY+70);
    vertex(treeX+360,treeY+230);
    vertex(treeX+200,treeY+230);//bottom point
    vertex(treeX-160,treeY+230);
    vertex(treeX-20,treeY+70);
    vertex(treeX-60,treeY+70);
    vertex(treeX+40,treeY-60);
    vertex(treeX,treeY-60);
  endShape(CLOSE);
  pop();
  push(); //R Tree 3
  fill(limeC);
  translate(roadX+545,roadY-100);
    scale(.8);
  beginShape();
  vertex(-trees_swaying+500,treeY-200);//top point
  vertex(treeX+200,treeY-60);
  vertex(treeX+160,treeY-60);
  vertex(treeX+260,treeY+70);
  vertex(treeX+220,treeY+70);
  vertex(treeX+360,treeY+230);
  vertex(treeX+200,treeY+230);//bottom point
  vertex(treeX-160,treeY+230);
  vertex(-trees_swaying/4+380,treeY+70);
  vertex(-trees_swaying/4+340,treeY+70);
  vertex(-trees_swaying/2+440,treeY-60);
  vertex(-trees_swaying/2+400,treeY-60);
  endShape(CLOSE);
  pop();
  push(); //R Tree 4
  fill(limeB);
  translate(roadX+535,roadY-100);
    scale(1);
  beginShape();
  vertex(treeX+100,treeY-200);//top point
  vertex(treeX+200,treeY-60);
  vertex(treeX+160,treeY-60);
  vertex(treeX+260,treeY+70);
  vertex(treeX+220,treeY+70);
    vertex(treeX+360,treeY+230);
    vertex(treeX+200,treeY+230);//bottom point
    vertex(treeX-160,treeY+230);
    vertex(treeX-20,treeY+70);
    vertex(treeX-60,treeY+70);
    vertex(treeX+40,treeY-60);
    vertex(treeX,treeY-60);
  endShape(CLOSE);
  pop();
  push(); //R Tree 5
  fill(limeC);
  translate(roadX+520,roadY-100);
    scale(1.25);
  beginShape();
  vertex(-trees_swaying+500,treeY-200);//top point
  vertex(treeX+200,treeY-60);
  vertex(treeX+160,treeY-60);
  vertex(treeX+260,treeY+70);
  vertex(treeX+220,treeY+70);
  vertex(treeX+360,treeY+230);
  vertex(treeX+200,treeY+230);//bottom point
  vertex(treeX-160,treeY+230);
  vertex(-trees_swaying/4+380,treeY+70);
  vertex(-trees_swaying/4+340,treeY+70);
  vertex(-trees_swaying/2+440,treeY-60);
  vertex(-trees_swaying/2+400,treeY-60);
  endShape(CLOSE);
  pop();
  push(); //R Tree 6
  fill(limeB);
  translate(roadX+505,roadY-100);
    scale(1.55);
  beginShape();
  vertex(treeX+100,treeY-200);//top point
  vertex(treeX+200,treeY-60);
  vertex(treeX+160,treeY-60);
  vertex(treeX+260,treeY+70);
  vertex(treeX+220,treeY+70);
    vertex(treeX+360,treeY+230);
    vertex(treeX+200,treeY+230);//bottom point
    vertex(treeX-160,treeY+230);
    vertex(treeX-20,treeY+70);
    vertex(treeX-60,treeY+70);
    vertex(treeX+40,treeY-60);
    vertex(treeX,treeY-60);
  endShape(CLOSE);
  pop();
  push(); //R Tree 7
  fill(limeC);
  translate(roadX+485,roadY-100);
    scale(1.9);
  beginShape();
  vertex(-trees_swaying+500,treeY-200);//top point
  vertex(treeX+200,treeY-60);
  vertex(treeX+160,treeY-60);
  vertex(treeX+260,treeY+70);
  vertex(treeX+220,treeY+70);
  vertex(treeX+360,treeY+230);
  vertex(treeX+200,treeY+230);//bottom point
  vertex(treeX-160,treeY+230);
  vertex(-trees_swaying/4+380,treeY+70);
  vertex(-trees_swaying/4+340,treeY+70);
  vertex(-trees_swaying/2+440,treeY-60);
  vertex(-trees_swaying/2+400,treeY-60);
  endShape(CLOSE);
  pop();
  pop();
}
else{
  push(); //Trees on the Left
  strokeWeight(5);
  stroke(limeC);
  push(); //L Tree 1
  fill(limeB);
    translate(roadX-345,roadY-100);
    scale(.5);
  beginShape();
    vertex(trees_swaying+500,treeY-200);//top point
    vertex(trees_swaying/2+600,treeY-60);
    vertex(trees_swaying/2+560,treeY-60);
    vertex(trees_swaying/4+660,treeY+70);
    vertex(trees_swaying/4+620,treeY+70);
    vertex(treeX+360,treeY+230);
    vertex(treeX+200,treeY+230);//bottom point
    vertex(treeX-160,treeY+230);
    vertex(treeX-20,treeY+70);
    vertex(treeX-60,treeY+70);
    vertex(treeX+40,treeY-60);
    vertex(treeX,treeY-60);
  endShape(CLOSE);
  pop();
  push(); //L Tree 2
  fill(limeC);
  translate(roadX-490,roadY-100);
    scale(.65);
  beginShape();
  vertex(treeX+100,treeY-200);//top point
  vertex(treeX+200,treeY-60);
  vertex(treeX+160,treeY-60);
  vertex(treeX+260,treeY+70);
  vertex(treeX+220,treeY+70);
    vertex(treeX+360,treeY+230);
    vertex(treeX+200,treeY+230);//bottom point
    vertex(treeX-160,treeY+230);
    vertex(treeX-20,treeY+70);
    vertex(treeX-60,treeY+70);
    vertex(treeX+40,treeY-60);
    vertex(treeX,treeY-60);
  endShape(CLOSE);
  pop();
  push(); //L Tree 3
  fill(limeB);
  translate(roadX-635,roadY-100);
    scale(.8);
  beginShape();
  vertex(trees_swaying+500,treeY-200);//top point
  vertex(trees_swaying/2+600,treeY-60);
  vertex(trees_swaying/2+560,treeY-60);
  vertex(trees_swaying/4+660,treeY+70);
  vertex(trees_swaying/4+620,treeY+70);
    vertex(treeX+360,treeY+230);
    vertex(treeX+200,treeY+230);//bottom point
    vertex(treeX-160,treeY+230);
    vertex(treeX-20,treeY+70);
    vertex(treeX-60,treeY+70);
    vertex(treeX+40,treeY-60);
    vertex(treeX,treeY-60);
  endShape(CLOSE);
  pop();
  push(); //L Tree 4
  fill(limeC);
  translate(roadX-825,roadY-100);
    scale(1);
  beginShape();
  vertex(treeX+100,treeY-200);//top point
  vertex(treeX+200,treeY-60);
  vertex(treeX+160,treeY-60);
  vertex(treeX+260,treeY+70);
  vertex(treeX+220,treeY+70);
    vertex(treeX+360,treeY+230);
    vertex(treeX+200,treeY+230);//bottom point
    vertex(treeX-160,treeY+230);
    vertex(treeX-20,treeY+70);
    vertex(treeX-60,treeY+70);
    vertex(treeX+40,treeY-60);
    vertex(treeX,treeY-60);
  endShape(CLOSE);
  pop();
  push(); //L Tree 5
  fill(limeB);
  translate(roadX-1060,roadY-100);
    scale(1.25);
  beginShape();
  vertex(trees_swaying+500,treeY-200);//top point
  vertex(trees_swaying/2+600,treeY-60);
  vertex(trees_swaying/2+560,treeY-60);
  vertex(trees_swaying/4+660,treeY+70);
  vertex(trees_swaying/4+620,treeY+70);
    vertex(treeX+360,treeY+230);
    vertex(treeX+200,treeY+230);//bottom point
    vertex(treeX-160,treeY+230);
    vertex(treeX-20,treeY+70);
    vertex(treeX-60,treeY+70);
    vertex(treeX+40,treeY-60);
    vertex(treeX,treeY-60);
  endShape(CLOSE);
  pop();
  push(); //L Tree 6
  fill(limeC);
  translate(roadX-1345,roadY-100);
    scale(1.55);
  beginShape();
  vertex(treeX+100,treeY-200);//top point
  vertex(treeX+200,treeY-60);
  vertex(treeX+160,treeY-60);
  vertex(treeX+260,treeY+70);
  vertex(treeX+220,treeY+70);
    vertex(treeX+360,treeY+230);
    vertex(treeX+200,treeY+230);//bottom point
    vertex(treeX-160,treeY+230);
    vertex(treeX-20,treeY+70);
    vertex(treeX-60,treeY+70);
    vertex(treeX+40,treeY-60);
    vertex(treeX,treeY-60);
  endShape(CLOSE);
  pop();
  push(); //L Tree 7
  fill(limeB);
  translate(roadX-1665,roadY-100);
    scale(1.9);
  beginShape();
  vertex(trees_swaying+500,treeY-200);//top point
  vertex(trees_swaying/2+600,treeY-60);
  vertex(trees_swaying/2+560,treeY-60);
  vertex(trees_swaying/4+660,treeY+70);
  vertex(trees_swaying/4+620,treeY+70);
    vertex(treeX+360,treeY+230);
    vertex(treeX+200,treeY+230);//bottom point
    vertex(treeX-160,treeY+230);
    vertex(treeX-20,treeY+70);
    vertex(treeX-60,treeY+70);
    vertex(treeX+40,treeY-60);
    vertex(treeX,treeY-60);
  endShape(CLOSE);
  pop();
  //Trees on the right
  strokeWeight(5);
  stroke(limeC);
  push(); //R Tree 1
  fill(limeB);
    translate(roadX+565,roadY-100);
    scale(.5);
  beginShape();
    vertex(-trees_swaying+500,treeY-200);//top point
    vertex(treeX+200,treeY-60);
    vertex(treeX+160,treeY-60);
    vertex(treeX+260,treeY+70);
    vertex(treeX+220,treeY+70);
    vertex(treeX+360,treeY+230);
    vertex(treeX+200,treeY+230);//bottom point
    vertex(treeX-160,treeY+230);
    vertex(-trees_swaying/4+380,treeY+70);
    vertex(-trees_swaying/4+340,treeY+70);
    vertex(-trees_swaying/2+440,treeY-60);
    vertex(-trees_swaying/2+400,treeY-60);
  endShape(CLOSE);
  pop();
  push(); //R Tree 2
  fill(limeC);
  translate(roadX+550,roadY-100);
    scale(.65);
  beginShape();
  vertex(treeX+100,treeY-200);//top point
  vertex(treeX+200,treeY-60);
  vertex(treeX+160,treeY-60);
  vertex(treeX+260,treeY+70);
  vertex(treeX+220,treeY+70);
    vertex(treeX+360,treeY+230);
    vertex(treeX+200,treeY+230);//bottom point
    vertex(treeX-160,treeY+230);
    vertex(treeX-20,treeY+70);
    vertex(treeX-60,treeY+70);
    vertex(treeX+40,treeY-60);
    vertex(treeX,treeY-60);
  endShape(CLOSE);
  pop();
  push(); //R Tree 3
  fill(limeB);
  translate(roadX+545,roadY-100);
    scale(.8);
  beginShape();
  vertex(-trees_swaying+500,treeY-200);//top point
  vertex(treeX+200,treeY-60);
  vertex(treeX+160,treeY-60);
  vertex(treeX+260,treeY+70);
  vertex(treeX+220,treeY+70);
  vertex(treeX+360,treeY+230);
  vertex(treeX+200,treeY+230);//bottom point
  vertex(treeX-160,treeY+230);
  vertex(-trees_swaying/4+380,treeY+70);
  vertex(-trees_swaying/4+340,treeY+70);
  vertex(-trees_swaying/2+440,treeY-60);
  vertex(-trees_swaying/2+400,treeY-60);
  endShape(CLOSE);
  pop();
  push(); //R Tree 4
  fill(limeC);
  translate(roadX+535,roadY-100);
    scale(1);
  beginShape();
  vertex(treeX+100,treeY-200);//top point
  vertex(treeX+200,treeY-60);
  vertex(treeX+160,treeY-60);
  vertex(treeX+260,treeY+70);
  vertex(treeX+220,treeY+70);
    vertex(treeX+360,treeY+230);
    vertex(treeX+200,treeY+230);//bottom point
    vertex(treeX-160,treeY+230);
    vertex(treeX-20,treeY+70);
    vertex(treeX-60,treeY+70);
    vertex(treeX+40,treeY-60);
    vertex(treeX,treeY-60);
  endShape(CLOSE);
  pop();
  push(); //R Tree 5
  fill(limeB);
  translate(roadX+520,roadY-100);
    scale(1.25);
  beginShape();
  vertex(-trees_swaying+500,treeY-200);//top point
  vertex(treeX+200,treeY-60);
  vertex(treeX+160,treeY-60);
  vertex(treeX+260,treeY+70);
  vertex(treeX+220,treeY+70);
  vertex(treeX+360,treeY+230);
  vertex(treeX+200,treeY+230);//bottom point
  vertex(treeX-160,treeY+230);
  vertex(-trees_swaying/4+380,treeY+70);
  vertex(-trees_swaying/4+340,treeY+70);
  vertex(-trees_swaying/2+440,treeY-60);
  vertex(-trees_swaying/2+400,treeY-60);
  endShape(CLOSE);
  pop();
  push(); //R Tree 6
  fill(limeC);
  translate(roadX+505,roadY-100);
    scale(1.55);
  beginShape();
  vertex(treeX+100,treeY-200);//top point
  vertex(treeX+200,treeY-60);
  vertex(treeX+160,treeY-60);
  vertex(treeX+260,treeY+70);
  vertex(treeX+220,treeY+70);
    vertex(treeX+360,treeY+230);
    vertex(treeX+200,treeY+230);//bottom point
    vertex(treeX-160,treeY+230);
    vertex(treeX-20,treeY+70);
    vertex(treeX-60,treeY+70);
    vertex(treeX+40,treeY-60);
    vertex(treeX,treeY-60);
  endShape(CLOSE);
  pop();
  push(); //R Tree 7
  fill(limeB);
  translate(roadX+485,roadY-100);
    scale(1.9);
  beginShape();
  vertex(-trees_swaying+500,treeY-200);//top point
  vertex(treeX+200,treeY-60);
  vertex(treeX+160,treeY-60);
  vertex(treeX+260,treeY+70);
  vertex(treeX+220,treeY+70);
  vertex(treeX+360,treeY+230);
  vertex(treeX+200,treeY+230);//bottom point
  vertex(treeX-160,treeY+230);
  vertex(-trees_swaying/4+380,treeY+70);
  vertex(-trees_swaying/4+340,treeY+70);
  vertex(-trees_swaying/2+440,treeY-60);
  vertex(-trees_swaying/2+400,treeY-60);
  endShape(CLOSE);
  pop();
  pop();
}

if (treeColour >= maxTreeColour) { //CHAT GPT, BASED OFF OF MY OWN ROADMOVE CODE
  treeColour = 0; // Reset treeColour after reaching maxTreeColour
} else {
  treeColour = treeColour + 5; // Increment treeColour by 5 for the next frame
}


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


push();
  stroke(255);
  strokeWeight(3);
  fill(lillacB);
  scale(car_scale);
  beginShape();
  vertex(car_width,car_height-20);
  vertex(car_width+200,car_height-20); 
  vertex(car_width+250,car_height+100);
  vertex(car_width+230,car_height+100);
  vertex(car_width+190,car_height-8);
  vertex(car_width,car_height-8);
  vertex(car_width-190,car_height-8);
  vertex(car_width-230,car_height+100);
  vertex(car_width-250,car_height+100);
  vertex(car_width-200,car_height-20);
endShape(CLOSE);
pop();

//The girl singing in the car
driver.resize(275,275);
image(driver,330,115-vocal/2);

push();//steering wheel
  stroke(0);
  strokeWeight(10)
  noFill();
  scale(car_scale);
  ellipse(car_width-115,car_height+125,100,100);
pop();

push(); //car hood
  stroke(255);
  strokeWeight(1);
  fill(lillacA);
  scale(car_scale);
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
  text('G3T H1M',car_width+120,car_height+470)
pop();

push();
  noStroke();
  fill(yellowA)
  scale(car_scale);
  ellipse(car_width+230,car_height+185,headlight_size);
  ellipse(car_width-230,car_height+185,headlight_size);
pop();

push(); //running rabbit
rabbit.resize(250,250);
image(rabbit, rabbit_run, 500);
rabbit_run = rabbit_run - 30
if (rabbit_run<-35000){
  rabbit_run=35000
}
pop();

}

