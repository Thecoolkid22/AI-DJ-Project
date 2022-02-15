Money_song="";
Yummy_song="";
rightWrist_x = 0;
rightWrist_y = 0;
leftWrist_x = 0;
leftWrist_y = 0;
scoreleftWrist = 0;
song_name = "";

function preload(){
    Money_song = loadSound("Money_192(PaglaSongs).mp3");
    Yummy_song = loadSound("Justin-Bieber-Yummy--[TunezJam.com].mp3");
}

function setup(){
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);

}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        scoreLeftWrist = results[0].pose.keypoints[9].score;
        console.log("scoreleftWrist = " + scoreLeftWrist);
    
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = " + leftWristX +" leftWristY"+ leftWristY);
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWrist = " + rightWristX +" rightWristY = "+ rightWristY);
    }
}

function draw()
{
    image(video,0,0,600,530);
    fill("#00ff00");
    stroke("#ff0000");

    song_name = Money_song.isPlaying();
    console.log(song_name);

    if(scoreleftWrist > 0.2){
        circle(leftWrist_x,leftWrist_y,20);
        Yummy_song.stop();
        if(song_name == false){
            Money_song.play();
}

function play()
{
    song.play();
    song.setVolume(1);
    song.rate(1);
}

    }
}