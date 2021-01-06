function setup() {
  canvas = createCanvas(1000,450);
  canvas.parent('processing');
}

function draw() {
  for (var rij = 0;rij < 450;rij += 50) {
    for (var kolom = 0;kolom < 450;kolom += 50) {
      tekenTegel(kolom,rij,1);
    }
  }
  translate(100,0);
  tekenTegel(50,0,9);
}

function tekenTegel(x,y,s) {
  push();
  scale(s);
  translate(x,y);
  noStroke();
  fill('red');
  triangle(0,0,25,25,50,0);  
  fill('black');
  //triangle(0,0,25,25,0,50);
  //fill('blue');
  fill('blue')
  rect(25,30,25,30)
  triangle(0,50,25,25,25,50);
  fill('orange');
  rect(20,00,10,50);
  rect(00,20,50,10);
  
  pop();
}