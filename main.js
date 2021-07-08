function preload(){

}
function setup(){
   canvas=createCanvas(300,300);
   canvas.center();
   video=createCapture(VIDEO);
   video.hide()
   classifire=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/UJyf53mtH/model.json',modelLoaded)
}
function draw(){
   image(video,0,0,300,300);
   classifire.classify(video , gotResult);
}
function modelLoaded(){
   console.log("Model loded!")
}
function gotResult(error , Results){
   if(error){
      console.error(error);
   }
   else{
      console.log(Results);
      document.getElementById("object_name").innerHTML=Results[0].label;
      document.getElementById("accuracy_persantage").innerHTML=Results[0].confidence.toFixed(3);
   }
}
