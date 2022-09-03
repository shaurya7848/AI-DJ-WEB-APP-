song="";


function preload(){
song = loadSound("music.mp3");
}

function preload(){
canvas = createCanvas(600,500);
canvas.center();

video = createCapture(VIDEO);
video.hide();
}

function draw(){
image(video,0,0,600,500);
}

function play(){
    song.play();
}