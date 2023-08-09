Webcam.set({
    width: 350,
    height: 300,
    image_format: "jpg",
    jpg_quality: 90,

});

my_camera = document.getElementById("camera_video");

Webcam.attach(my_camera);
console.log("version of ml5 is", ml5.version)

function capture_img(){
    Webcam.snap(function(picture){
        document.getElementById("img_result").innerHTML = "<img id = 'image' src = '"+ picture +"'>"       
    });
}

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/RVNg5E3SW/model.json", model_loaded);

function model_loaded(){
    console.log("My model is loaded");
}

function identify(){
  myimage = document.getElementById("image");
  classifier.classify(myimage, my_result);

}

function my_result(error, output){
    if(error){
        console.error("ERROR",error);;
    }
    else{
        console.log(output);
        document.getElementById("object_name").innerHTML= output[0].label;
        accuracy =(output[0].confidence*100).toFixed(2);
        document.getElementById("object_accuracy").innerHTML=  accuracy + "%";
    }
    
    
    
}