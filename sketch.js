let t = 0;

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
}

function draw() {
  background(255);
  //noFill();

  translate(width / 2, height / 2);
  rotate(radians(t));
  for (let i = 0; i < 8; i++) {
    fill(255,100);
    rect(0,0,2*width,2*height);
    stroke(0);
    strokeWeight(5);
    fill(255);

    ellipse(0, 100 * sin((t + (i * 20)) / 100), 100, 100);
    ellipse(0, 100 * sin(-(t + (i * 20)) / 100), 100, 100);
    //ellipse(width/2+50, height/2 + 100*sin(-(t+(i*20))/100),50 , 50);
    //ellipse(100 * sin((t + (i * 20)) / 100), 0, 100, 100);
   // line(100 * sin((t + (i * 20)) / 100),0,0,100 * sin(-(t + (i * 20)) / 100));
    //ellipse(100 * sin(-(t + (i * 20)) / 100), 0, 100, 100);

   /////////////////////////
   /*
    ellipse(0, 100 * sin((t + (i * 20)) / 100),  100 * sin((t + (i * 20)) / 100),100 * sin((t + (i * 20)) / 100));
    ellipse(0, 100 * sin(-(t + (i * 20)) / 100), 100 * sin((t + (i * 20)) / 100),100 * sin((t + (i * 20)) / 100));
    //ellipse(width/2+50, height/2 + 100*sin(-(t+(i*20))/100),50 , 50);
    ellipse(100 * sin((t + (i * 20)) / 100), 0, 100 * sin((t + (i * 20)) / 100),100 * sin((t + (i * 20)) / 100));

    ellipse(100 * sin(-(t + (i * 20)) / 100), 0, 100 * sin((t + (i * 20)) / 100), 100 * sin((t + (i * 20)) / 100));
 */
      

    t = t + 0.3;

  }


}