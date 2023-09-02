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
let numObjects = 50;
function draw() {
    frameRate(10);
    background(220);
    if (!focused) {
        //Draw cirlces
        for (let i = 0; i < numObjects; i++){
            strokeWeight(5);
            fill(random(254),random(254),random(254));
            ellipse(random(windowWidth-1),random(windowHeight-1),random(500));
        }
        pause();
    }else {
        //Draw rectangles
        for (let i = 0; i < numObjects; i++){
            strokeWeight(5);
            fill(random(254),random(254),random(254));
            rect(random(windowWidth-1),random(windowHeight-1),random(500),random(500));
        }
    }
}
function pause(){
    let str = 24;
    stroke(255,0,0);
    strokeWeight(str);
    //Red Cross strokes
    line(0,0,windowWidth,windowHeight);
    line(0,windowHeight,windowWidth,0);
    //Black Cross strokes
    stroke(0);
    strokeWeight(str);
    line(0,0-str,windowWidth,windowHeight-str);
    line(0,0+str,windowWidth,windowHeight+str);
    line(0,windowHeight-str,windowWidth,0-str);
    line(0,windowHeight+str,windowWidth,0+str);
    //Paused text
    strokeWeight(str);
    textSize(144);
    stroke(0,0,0);
    fill(255,0,0);
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