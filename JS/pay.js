var canvas, context;

function init(){
    canvas = document.getElementById("myCanvas");
    context = canvas.getContext("2d");
    context.lineWidth = 2; 
    context.strokeStyle = "black";
    canvas.addEventListener("mousemove", function (e) { move(e) }, false);
    canvas.addEventListener("mousedown", function (e) { down(e) }, false);
    canvas.addEventListener("mouseup", function (e) { up(e) }, false);
    canvas.addEventListener("mouseout", function (e) { out(e) }, false);
}
var startX=0, startY=0; 
var dragging=false;
function draw(curX, curY) {
    context.beginPath();
    context.moveTo(startX, startY);
    context.lineTo(curX, curY);
    context.stroke();
}
function down(e) {
    startX = e.offsetX; startY = e.offsetY; dragging = true;
}
function up(e) { dragging = false; }
function move(e) {
    if(!dragging) return; 
    var curX = e.offsetX, curY = e.offsetY;
    draw(curX, curY);
    startX = curX; startY = curY;
}
function out(e) { dragging = false; }

function comple(){
    alert("결제완료");
    opener.location.href="index.html";
    self.close();
}