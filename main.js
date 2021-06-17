var l=document.getElementById("divc");
Webcam.set({height:300,width:310,image_format:"png",png_quality:90});
Webcam.attach(l);
function CI(){
    Webcam.snap(function(data_uri){
        document.getElementById("divine").innerHTML='<img id="img1" src="'+data_uri+'"/>';
    });
}

console.log('ml5version',ml5.version);
var classifier=ml5.imageClassifier("MobileNet",modelLoaded);
function modelLoaded(){console.log("Teachable Model Has Been Loaded");}
function II(){img=document.getElementById("img1");
classifier.classify(img,gotResult);
}
function gotResult(error,Results){
if (error) {
    console.error(error);
} else {
    console.log(Results);
document.getElementById("OS").innerHTML=Results[0].label;

}    
}
