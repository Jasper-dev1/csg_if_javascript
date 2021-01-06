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
  fill('blue');
  rect (20,0,30,30);
  rect (0,20,30,30);
  fill('black');
  //triangle(0,0,25,25,0,50);
  //fill('blue');
  fill('red')
  rect (0,0,30,30);
  rect(25,30,25,30);
  fill('white');
  rect(20,00,10,50);
  rect(00,20,50,10);
  fill('green');
  rect(22.5,00,5,50);
  rect(00,22.5,50,5);
  
  pop();
}