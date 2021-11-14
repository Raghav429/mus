peterpan = 0;
harrypotter = 0;
leftwristx = 0;
leftwristy = 0;
rightwristx = 0;
rightwristy = 0;
function preload()
{
song=loadSound("music.mp3");
song=loadSound("music2.mp3");
}

function setup()
{
canvas = createCanvas(450, 500);
canvas.center();

video = createCapture(VIDEO);
video.hide();
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log("Model is Initialised");
}

function draw()
{
    image(video, 0, 0, 450, 500);
}
function gotPoses(results)
{
    if(results.length > 0 )
    {
        console.log(results);
        leftwristx = results[0].pose.leftWrist.x;
        leftwristy = results[0].pose.leftWrist.y;
    console.log(leftwristx, leftwristy);
        rightwristx = results[0].pose.rightWrist.x;
        rightwristy = results[0].pose.rightWrist.y;
        console.log(rightwristx, rightwristy);
    }
}
