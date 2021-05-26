Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:100,
    constraints:{
        facingMode:"environment"
    }
});

cam=document.getElementById("camera");
Webcam.attach("#cam")

function capture(){
    Webcam.snap(function(data_url){
        document.getElementById("result").innerHTML='<img id="image" src='+data_url+'>'
    }
    )
}
console.log(ml5.version, "this is the version of ml5");

classifier=ml5.imageClassifier("MobileNet", modeloaded)

function modeloaded(){
    console.log("model has loaded")
}

function check(){
    img=document.getElementById("image")
    classifier.classify(img, gotResult())
}

function gotResult(error, result){
    if (error){
        console.log(error)
    }
    else{
        console.log(result)
    }
}