function setup() {
createCanvas(400, 269)
background(250)
//Odd Row Pattern
  for(x = 1; x < width; x += 6){
    for(y = 5; y < height; y += 6){
      stroke(0, 0, 250)
      strokeWeight(2)
      point(x, y)
}
}
//Even Row Pattern
  for(x = 4; x < width; x += 6){
    for(y = 8; y < height; y +=6){
      stroke(0, 0, 250)
      strokeWeight(2)
      point(x, y)
}
}
}

function draw(){
//Body Part Shapes
  //Lines under Body
  stroke(0)
  strokeWeight(9)
  line(0, 240, 120, 240)
  stroke(250)
  strokeWeight(7)
  line(0, 255, 120, 255)
  //Skin Fill
  noStroke()
  fill(255,220,209)
  beginShape()
  vertex(0, 95)
  vertex(35, 110)
  vertex(35, 160)
  vertex(25, 210)
  vertex(25, 269)
  vertex(0, 269)
  endShape()
  //Skin Outline + Triangle part 
  stroke(0)
  strokeWeight(9)
  noFill()
  beginShape()
  curveVertex(35, 110)
  curveVertex(35, 110)
  curveVertex(35, 160)
  curveVertex(25, 210)
  curveVertex(25, 269)
  curveVertex(25, 269)
  endShape()
  fill(0)
  noStroke()
  beginShape()
  vertex(0, 269)
  vertex(25, 269)
  vertex(25, 253)
  endShape()
  //clothes Part
  noStroke()
  fill(0)
  quad(0, 95, 100, 95, 100, 0, 0, 0)
  beginShape()
  curveVertex(100, 95)
  curveVertex(100, 95)
  curveVertex(60, 120)
  curveVertex(20, 110)
  curveVertex(0, 95)
  curveVertex(0, 95)
  endShape()
//Lines
  //Mid White lines
  stroke(250)
  strokeWeight(3)
  line(147, 53, 272, 269)
  strokeWeight(9)
  line(180, 150, 248, 269)
  //Mid Black Lines
  stroke(0)
  strokeWeight(3)
  line(137, 53, 262, 269)
  strokeWeight(7)
  line(212, 95, 335, 272)

//Rectangles
  //Top Black Rect
  stroke(0)
  fill(0)
  rect(0, 0, 400, 52)
  //Black Borderless Rect
  noStroke()
  fill(0)
  quad(265, 0, 290, 0, 325, 269, 300, 269)
  quad(310, 260, 325, 260, 330, 269, 310, 269)
  //White Borderless Rect
  noStroke()
  fill(250)
  quad(325, 0, 375, 0, 400, 30, 400, 85)
  //White Bordered Rect
  stroke(0)
  strokeWeight(8)
  quad(75, -5, 120, -5, 165, 274, 120, 274)
  //Black Parallel Lines
  noFill()
  stroke(0)
  strokeWeight(4)
  quad(250, 45, 265, 45, 400, 215, 400, 240)
  //White Borderless Rect near pervious item
  noStroke()
  fill(250)
  quad(200, 0, 220, 0, 306, 130, 282, 130)
  quad(282, 130, 306, 130, 340, 190, 335, 200)  
  //Mid Black & White Parallel Lines 
  noFill()
  stroke(250)
  strokeWeight(4)
  quad(125, -5, 140, -5, 170, 50, 155, 50)
  noFill()
  stroke(0)
  strokeWeight(5)
  quad(155, 50, 170, 50, 320, 269, 300, 269)

//Blue Parts in Clothes
  fill(0, 0, 70)
  noStroke()
  beginShape()
  vertex(75, 0)
  vertex(80, 25)
  vertex(75, 20)
  vertex(76, 30)
  vertex(65, 0)
  vertex(60, 0)
  vertex(65, 30)
  vertex(55, 0)
  vertex(52, 10)
  vertex(47, 0)
  vertex(40, 0)
  vertex(40, 10)
  vertex(35, 15)
  vertex(37, 30)
  vertex(25, 0)
  vertex(0, 0)
  endShape()
  beginShape()
  vertex(0, 0)
  vertex(15, 40)
  vertex(0, 20)
  vertex(8, 55)
  vertex(0, 45)
  vertex(5, 75)
  vertex(0, 90)
  endShape()
}
