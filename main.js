function setup()
{
    canvas = createCanvas(600, 500);
    canvas.position(650, 200);

    video = createCapture(VIDEO);
    video.hide();
}

function draw()
{
    image(video, 0, 0, 600, 500);
}