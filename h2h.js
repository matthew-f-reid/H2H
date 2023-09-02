let started = false;

function setup() {
    console.log("setup");

    console.log("displayWidth");
    console.log(displayWidth);

    console.log("displayHeight");
    console.log(displayHeight);

    console.log("pixelDensity()");
    console.log(pixelDensity());
    
    //let myCanvas = createCanvas(displayWidth, displayHeight);
    let myCanvas = createCanvas(windowWidth, windowHeight);
    myCanvas.parent('game-container');
}
function draw() {
    background(220);
    if (!focused) {
        pause();
    }
}
function pause(){
    stroke(255,0,0);
    strokeWeight(6);
    //Red Cross strokes
    line(0,0,windowWidth,windowHeight);
    line(0,windowHeight,windowWidth,0);
    //Paused text
    strokeWeight(1);
    textSize(144);
    stroke(0,0,0);
    textAlign(CENTER);
    text("Paused",windowWidth/2,windowHeight/2);
}
function touchStarted() {
    console.log("touchStarted");
}
function touchMoved(){
    console.log("touchMoved");
}
function touchEnded() {
    console.log("touchEnded");
}
function mousePressed(){    

    if(!started) {
        started = true;
        let fs = fullscreen();
        fullscreen(!fs);
    }
}
function mouseMoved() {
    console.log("mouseMoved");
}
function mouseDragged(){
    console.log("mouseDragged");
}
function mouseClicked(){
    console.log("mouseClicked");
}
function mouseReleased(){
    console.log("mouseReleased");
}
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
 }