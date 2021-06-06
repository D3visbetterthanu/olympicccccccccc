canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="red";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(200, 200, 40, 0, 2*Math.PI);
ctx.stroke();
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="blue";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(275, 200, 40, 0, 2*Math.PI);
ctx.stroke();
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="black";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(350, 200, 40, 0, 2*Math.PI);
ctx.stroke();
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="yellow";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(235, 250, 40, 0, 2*Math.PI);
ctx.stroke();
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="green";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(315, 250, 40, 0, 2*Math.PI);
ctx.stroke();


canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
    mouse_x=e.clientX-canvas.offsetLeft;
    mouse_y=e.clientY-canvas.offsetTop;
    console.log("x="+mouse_x+" y="+mouse_y);
    circle(mouse_x, mouse_y);
}
function circle(mouse_x, mouse_y){
ctx.beginPath()
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(mouse_x, mouse_y, 40, 0, 2*Math.PI);
ctx.stroke();
}
