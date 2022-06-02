Webcam.set({
    width:350,
    height:300,
    image_format :'png',
    png_quality:90
});

camera=document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot()
{
    Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'">';
    });
}

classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/3bJcMFaw7/',modelLoaded);

function modelLoaded()
{
console.log("model loaded!");
}
function check()
{
    img= document.getElementById('captured_image')
    classifier.classify(img, gotResult);
}
function gotResult(error, results)
{
if (error)
{
    console.error(error);
}
else{
    console.log(results);
    document.getElementById("result_gesture_name").innerHTML=results[0].label;
    document.getElementById("result_gesture_accuracy").innerHTML=results[0].confidence.toFixed(3);
}
}