
// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(20)
  //textFont('Helvetica'); // please use CSS safe fonts
  rectMode(CENTER);
  textSize(24);
 //Bass is the car moving up and down
var car_height = map(bass, 0, 100, 150, 100);
let car_width = width/3;
let car_scale = 1.5
let backround = background

//colour pallette <3
let limeA = (190, 223, 153)

 push();
 stroke(255);
 strokeWeight(3);
 fill("#B28ADE");
 scale(car_scale)
 beginShape(); //main car body
  vertex(car_width,car_height); //top middle
  vertex(car_width+200,car_height);
  vertex(car_width+250,car_height+90);
  vertex(car_width+300,car_height+130);
  vertex(car_width+300,car_height+200);
  vertex(car_width-300,car_height+200);
  vertex(car_width-300,car_height+130);
  vertex(car_width-250,car_height+90);
  vertex(car_width-200,car_height);
 endShape(CLOSE);
pop()

push()
 stroke(255)
 strokeWeight(3)
 fill("#A2DDEF")
 scale(car_scale)
 beginShape(); //car windsheld
  vertex(car_width,car_height+12);
  vertex(car_width+195,car_height+12);
  vertex(car_width+235,car_height+90);
  vertex(car_width-235,car_height+90);
  vertex(car_width-195,car_height+12);
  vertex(car_width,car_height+12);
 endShape(CLOSE);
pop();

push(); //car hood
  stroke(255);
  strokeWeight(3);
  fill("#C29BED");
  scale(car_scale)
 beginShape();
  vertex(car_width+250,car_height+90);
  vertex(car_width+300,car_height+130);
  vertex(car_width-300,car_height+130);
  vertex(car_width-250,car_height+90);
 endShape(CLOSE);
 pop();

push();//car front
  stroke(255);
  strokeWeight(3);
  fill("#A47BD1");
  scale(car_scale)
 beginShape();
  vertex(car_width+300,car_height+130);
  vertex(car_width+300,car_height+200);
  vertex(car_width-300, car_height+200);
  vertex(car_width-300,car_height+130);
 endShape(CLOSE);
pop();

push();//car bar
  stroke(255);
  strokeWeight(3);
  fill(181);
  scale(car_scale);
 beginShape();
  vertex(car_width+310,car_height+190);
  vertex(car_width+310,car_height+220);
  vertex(car_width-310,car_height+220);
  vertex(car_width-310,car_height+190)
 endShape(CLOSE);
pop();

push();
  stroke(255);
  strokeWeight(3);
  fill("#EDE7D2");
  scale(car_scale);
 beginShape();
  vertex(car_width+75,car_height+190);
  vertex(car_width+75,car_height+250);
  vertex(car_width-75,car_height+250);
  vertex(car_width-75,car_height+190);
 endShape(CLOSE);
pop();


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