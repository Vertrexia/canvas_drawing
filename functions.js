function getMousePos(canvas, evt)
{
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}
var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');
var type = "line";

var lastPointX = lastPointY = 0;
var lineActive = false;

canvas.addEventListener('mousemove', function(evt)
{
    var mousePos = getMousePos(canvas, evt);
    var context = canvas.getContext('2d');
    
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.font = '12pt Calibri';
    context.fillStyle = 'black';
    context.fillText("x: " + mousePos.x, 1, 15);
    
    context.font = '12pt Calibri';
    context.fillStyle = 'black';
    context.fillText("y: " + mousePos.y, 1, 30);
    
    if (lineActive)
    {
        context.font = '12pt Calibri';
        context.fillStyle = 'black';
        context.fillText("Line: " + (lineActive?"Active":"Inactive"), 1, 45);
        
        content.beginPath();
        content.moveTo(lastPointX, lastPointY);
        content.lineTo(mousePos.x, mousePos.y);
        context.strokeStyle = '#ff0000';
        content.stroke();
    }
}, false);

canvas.addEventListener('click', function(evt)
{
    var mousePos = getMousePos(canvas, evt);
    var context = canvas.getContext('2d');
    
    if ((lastPointX == mousePos.x) && (lastPointY == mousePos.y))
    {
        lineActive = false;
    }
    else
    {
        lineActive = true;
        
        lastPointX = mousePos.x;
        lastPointY = mousePos.y;
    }
}, false);