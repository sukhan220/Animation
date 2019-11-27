var canvas=document.getElementById('myCanvas');
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
var c=canvas.getContext('2d');

function Circle(x,y,dx,dy,radius){
  this.x=x;
  this.y=y;
  this.dx=dx;
  this.dy=dy;
  this.radius=radius;

  //Make a function or method for Draw
  this.draw=function(){
    //draw a circle
    c.beginPath();
    c.arc(this.x,this.y,this.radius,0,Math.PI*2);
    c.fillStyle="rgba(255,144,240,1)";
    c.stroke();
  }

  //draw function update for Animation
  this.update=function(){
    if(this.x+this.radius>innerWidth || this.x-this.radius<0){
      this.dx=-this.dx;
    }

    if(this.y+this.radius>innerHeight || this.y-this.radius<0){
      this.dy=-this.dy;
    }
    this.x+=this.dx;
    this.y+=this.dy;
    this.draw();
  }

}

 //getting a array for include one more circle
 // Hold on to array

var circleArray=new Array();
for(var i=0;i<100;i++){
  var x=Math.random()*innerWidth;
  var y=Math.random()*innerHeight;
  var dx=(Math.random()-0.5)*8;
  var dy=(Math.random()-0.5)*8;
  var radius=30;

  //now one by one put the circle (using circleArray[])
  //into the array (using push)
  //after drawing(using  Circle(x,y,dx,dy,r))
  var aCircle = new Circle(x,y,dx,dy,radius);
  circleArray[i]=new Array();
  circleArray[i].push(aCircle);

}
 var x=0;

//create a animation function
//for animate all circle
function animate(){
  requestAnimationFrame(animate);
  c.clearRect(0,0,innerWidth,innerHeight);
  //aCircle.update();


  for(var j=0;j<circleArray.length;j++){
    circleArray[j].update();
    

  }

}

animate();
