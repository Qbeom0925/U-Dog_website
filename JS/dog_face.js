let model, labelContainer, maxPredictions;
const URL = 'https://teachablemachine.withgoogle.com/models/ow6Ayj4KF/';

document.write("<script type='text/javascript' class='jsbin' src='https://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js'><"+"/script>");  

async function init() {
    const modelURL = URL + 'model.json';
    const metadataURL = URL + 'metadata.json';
    model = await tmImage.load(modelURL, metadataURL);
    maxPredictions = model.getTotalClasses();
    labelContainer = document.getElementById('label-container');
    for (let i = 0; i < maxPredictions; i++) {
        labelContainer.appendChild(document.createElement('div'));
    }
}

async function predict() {
    var iamge = document.getElementById('animal-image');
    const prediction = await model.predict(iamge, false);
    prediction.sort((a,b)=> parseFloat(b.probability)-parseFloat(a.probability))
    console.log(prediction[0].className);
    var resultMessege;            
        $('.result-Messege').html(resultMessege)
    
var barWidth;
for (let i = 0; i < maxPredictions; i++) {
    if (prediction[i].probability.toFixed(2) > 0.1) {
        barWidth = Math.round(prediction[i].probability.toFixed(2) * 100) + "%";
    } else if (prediction[i].probability.toFixed(2) >= 0.01) {
        barWidth = "4%"
    } else {
        barWidth = "2%"
    }
    if(prediction[i].probability.toFixed(2)>0){
    var labelTitle = prediction[i].className;
    var label = "<div class='animal-label d-flex align-items-center'>" + labelTitle+"</div>"
    var bar = "<div class='bar-container position-relative container'><div class='" + prediction[i].className + "-box'></div><div class='d-flex justify-content-center align-items-center " + prediction[i].className + "-bar' style='width: " + barWidth + "'><span class='d-block percent-text'>" + Math.round(prediction[i].probability.toFixed(2) * 100) + "%</span></div></div>"
    labelContainer.childNodes[i].innerHTML = label + bar;}
}             
}
