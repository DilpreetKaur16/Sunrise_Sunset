const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;



function preload() {
    // create getBackgroundImg( ) here

    backgroundImg = loadImage("sunrise1.png");
   
}

function setup(){
    var canvas = createCanvas(displayWidth-20,displayHeight-120);
    engine = Engine.create();
    world = engine.world;
    getBackgroundImg();
}

function draw(){
    background(backgroundImg)
     Engine.update(engine);
}

async function getBackgroundImg(){

    // write code to fetch time from API
    var output = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    //change the data in JSON format
    var outputJSON = await output.json();
    console.log(outputJSON);
    // write code slice the datetime
   var dateNtime = outputJSON.datetime;
   console.log(dateNtime);
   var hour = dateNtime.slice(11,13)
   console.log(hour);

    // add conditions to change the background images from sunrise to sunset
    if(hour>=04 && hour<=06){
        bg= "sunrise1.png";
    }
    else if(hour>=06 && hour<=08){
        bg= "sunrise2.png";
    }
    else if(hour>=08 && hour<=12){
        bg= "sunrise3.png";
    }
    else if(hour>=12 && hour<=16){
        bg= "sunset7.png";
    }
    else if(hour>=16 && hour<=17){
        bg= "sunset8.png";
    }
    else if(hour>=17 && hour<=19){
        bg= "sunset10.png";
    }
    else if(hour>=20 && hour<=23){
        bg="sunset11.png"
    }
  
    else{
        bg="sunset12.png"
    }
    backgroundImg = loadImage(bg);
    //load the image in backgroundImg variable here

}
