let selectedRect = null;
let hoverTime = 0;

function setup() {
  createCanvas(400, 400);
}

function draw(){
  background(220);
  
  // Draw the first rectangle
  if (selectedRect === 1) {
    fill(255, 0, 0);
  } else {
    fill(0, 0, 200);
  }
  rect(50, 50, 150, 100);
  
  // Draw the second rectangle
  if (selectedRect === 2) {
    fill(255, 0, 0);
  } else {
    fill(0, 0, 200);
  }
  rect(200, 50, 150, 100);
  
  // Add text to the first rectangle
  fill(255);
  textSize(20);
  textAlign(CENTER, CENTER);
  text("Option1", 125, 100);
  
  // Add text to the second rectangle
  fill(255);
  textSize(20);
  textAlign(CENTER, CENTER);
  text("Option2", 275, 100);
  
  // Check if mouse is over a rectangle and start timing
  if (selectedRect !== null) {
        hoverTime++;
        if (hoverTime >= 5000 && selectedRect===1) {
        redirectToPage1();
        } 
        else if (hoverTime >= 5000 && selectedRect===2) {
        redirectToPage2();
        }
    } else {
    hoverTime = 0;
  }
}

//now working on mouseX and mouseY
function selection() {
  if (mouseX > 50 && mouseX < 200 && mouseY > 50 && mouseY < 150) {
    selectedRect = 1;
  } else if (mouseX > 200 && mouseX < 350 && mouseY > 50 && mouseY < 150) {
    selectedRect = 2;
  } else {
    selectedRect = null;
  }
}

function redirectToPage1() {
  window.location.href = "results.html";
}

function redirectToPage2() {
    window.location.href = "results2.html";
}





