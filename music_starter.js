
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
//let backround = background

//colour pallette
let limeA = (190, 223, 153);
let limeB = (157, 191, 119);
let limeC = (133, 166, 97);

let lillacA = (194, 155, 237);
let lillacB = (178, 138, 222);
let lillacC = (164, 123, 209);

let pinkA = (232, 150, 214);
let pinkB = (209, 122, 190);
let pinkC = (198, 109, 179);

let yellowA = (244, 228, 125);
let yellowB = (228, 212, 108);
let yellowC = (209, 192, 84);

let blueA = (162, 221, 239);
let blueB = (138, 202, 222);
let blueC = (133, 196, 216);

let whiteA = (244, 238, 216);
let whiteB = (237, 231, 210);
let whiteC = (225, 219, 195);

let wheelcolour = (28, 25, 31);
// //car which moves with the base

push() //wheels
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
 fill("#B28ADE");
 scale(car_scale)
 beginShape(); //main car body
  vertex(car_width,car_height+20); //top middle
  vertex(car_width+200,car_height+20);
  vertex(car_width+250,car_height+140);
  vertex(car_width+300,car_height+180);
  vertex(car_width+300,car_height+250);
  vertex(car_width-300,car_height+250);
  vertex(car_width-300,car_height+180);
  vertex(car_width-250,car_height+140);
  vertex(car_width-200,car_height+20);
 endShape(CLOSE);
pop()

push()
 stroke(255)
 strokeWeight(3)
 fill("#A2DDEF")
 scale(car_scale)
 beginShape(); //car windsheld
  vertex(car_width,car_height+32);
  vertex(car_width+195,car_height+32);
  vertex(car_width+235,car_height+140);
  vertex(car_width-235,car_height+140);
  vertex(car_width-195,car_height+32);
  vertex(car_width,car_height+32);
 endShape(CLOSE);
pop();

push(); //car hood
  stroke(255);
  strokeWeight(1);
  fill("#C29BED");
  scale(car_scale)
 beginShape();
  vertex(car_width+250,car_height+140);
  vertex(car_width+300,car_height+180);
  vertex(car_width-300,car_height+180);
  vertex(car_width-250,car_height+140);
 endShape(CLOSE);
 pop();

push();//car front
  stroke(255);
  strokeWeight(3);
  fill("#A47BD1");
  scale(car_scale)
 beginShape();
  vertex(car_width+300,car_height+180);
  vertex(car_width+300,car_height+250);
  vertex(car_width-300, car_height+250);
  vertex(car_width-300,car_height+180);
 endShape(CLOSE);
pop();

push();//car bar
  stroke(255);
  strokeWeight(3);
  fill(181);
  scale(car_scale);
 beginShape();
  vertex(car_width+310,car_height+240);
  vertex(car_width+310,car_height+270);
  vertex(car_width-310,car_height+270);
  vertex(car_width-310,car_height+240)
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


}
 
  // let bar_spacing = height / 10;
  //  let bar_height = width / 12;
  //  let bar_pos_x = width / 2;
 

  //  // vocal bar is red
  //  fill(200, 0, 0);
  //  rect(bar_pos_x, height / 2 + 1 * bar_spacing, 4 * vocal, bar_height);
  //  fill(0);
  //  text("vocals", bar_pos_x, height / 2 + 1 * bar_spacing + 8);
 
  //  // drum bar is green
  //  fill(0, 200, 0);
  //  rect(bar_pos_x, height / 2 + 2 * bar_spacing, 4 * drum, bar_height);
  //  fill(0);
  //  text("drums", bar_pos_x, height / 2 + 2 * bar_spacing + 8);
 
  //  // bass bar is blue
  //  fill(50, 50, 240);
  //  rect(bar_pos_x, height / 2 + 3 * bar_spacing, 4 * bass, bar_height);
  //  fill(0);
  //  text("bass", bar_pos_x, height / 2 + 3 * bar_spacing + 8);
 
  //  // other bar is white
  //  fill(200, 200, 200);
  //  rect(bar_pos_x, height / 2 + 4 * bar_spacing, 4 * other, bar_height);
  //  fill(0);
  //  text("other", bar_pos_x, height / 2 + 4 * bar_spacing + 8);
  //  fill(255, 255, 0);
 
  //  // display "words"
  //  textAlign(CENTER);
  //  textSize(vocal);
  //  text(words, width/2, height/3);