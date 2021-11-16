function setup(){
    canvas = createCanvas(600,500);
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 0, 0, 550, 500);
}

function save_image(){
    save("imagephoto.png");
}