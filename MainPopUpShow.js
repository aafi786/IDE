//  var myCircle = new Path.Circle(new Point(100, 70), 10);
// myCircle.fillColor = 'red';
// function onKeyDown(event){
// var maxPoint=new Point(100,100)
// new Path.Circle(maxPoint,10).fillcolor="orange"
// }
var keyData={
  q:{
   color:"red",
   sound:new Howl(
     {src:['/sounds/confetti.mp3']}
   )
  },
  w:{
    color:"#5E6A76",
    sound:new Howl(
      {src:['/sounds/bubbles.mp3']}
    )
   },
   e:{
    color:"#BDBFC1",
    sound:new Howl(
      {src:['/sounds/clay.mp3']}
    )
   },
   r:{
    color:"#475062",
    sound:new Howl(
      {src:['/sounds/corona.mp3']}
    )
   },
   t:{
    color:"#3668D8",
    sound:new Howl(
      {src:['/sounds/dotted-spiral.mp3']}
    )
   },
   y:{
    color:"#92C1BE",
    sound:new Howl(
      {src:['/sounds/flash-1.mp3']}
    )
   },
   u:{
    color:"#05F9E5",
    sound:new Howl(
      {src:['/sounds/flash-2.mp3']}
    )
   },
   i:{
    color:"#455946",
    sound:new Howl(
      {src:['/sounds/flash-3.mp3']}
    )
   },
   o:{
    color:"#00FD11",
    sound:new Howl(
      {src:['/sounds/glimmer.mp3']}
    )
   },
   p:{
    color:"#FD0098",
    sound:new Howl(
      {src:['/sounds/moon.mp3']}
    )
   },
   a:{
    color:"#D500FD",
    sound:new Howl(
      {src:['/sounds/pinwheel.mp3']}
    )
   },
   s:{
    color:"#B499B9",
    sound:new Howl(
      {src:['/sounds/piston-1.mp3']}
    )
   },
   d:{
    color:"#DD8DEB",
    sound:new Howl(
      {src:['/sounds/piston-2.mp3']}
    )
   },
   f:{
    color:"#B88DEB",
    sound:new Howl(
      {src:['/sounds/piston-3.mp3']}
    )
   },
   g:{
    color:"#2D2A62",
    sound:new Howl(
      {src:['/sounds/prism-1.mp3']}
    )
   },

   h:{
    color:"#9894E9",
    sound:new Howl(
      {src:['/sounds/prism-2.mp3']}
    )
   }, 
    j:{
    color:"#6B9EBC",
    sound:new Howl(
      {src:['/sounds/prism-3.mp3']}
    )
   },
   k:{
    color:"#B1DD96",
    sound:new Howl(
      {src:['/sounds/splits.mp3']}
    )
   },
   l:{
    color:"#96DDCB",
    sound:new Howl(
      {src:['/sounds/squiggle.mp3']}
    )
   },
   z:{
    color:"#7E8738",
    sound:new Howl(
      {src:['/sounds/strike.mp3']}
    )
   },
   x:{
    color:"purple",
    sound:new Howl(
      {src:['/sounds/suspension.mp3']}
    )
   },
   c:{
    color:"yellow",
    sound:new Howl(
      {src:['/sounds/timer.mp3']}
    )
   },
   v:{
    color:"grey",
    sound:new Howl(
      {src:['/sounds/ufo.mp3']}
    )
   },
   b:{
    color:"orange",
    sound:new Howl(
      {src:['/sounds/veil.mp3']}
    )
   },
     n:{
    color:"blue",
    sound:new Howl(
      {src:['/sounds/wipe.mp3']}
    )
   },
   m:{
    color:"green",
    sound:new Howl(
      {src:['/sounds/zig-zag.mp3']}
    )
   }
  }
  var circles=[];
function onKeyDown(event) {
  var maxPoint=new Point(view.size.width,view.size.height)
  var point=Point.random()*maxPoint
 
  var keyValue=event.key;

var path=new Path.Circle(point, 400);

path.fillColor = keyData[keyValue].color
  
   circles.push(path);
   keyData[keyValue].sound.play();
   console.log(view.size.height)
 
}
function onFrame(event){
  for(var i = 0; i < circles.length; i++){
    circles[i].scale(0.9);
  console.log(circles[i])
    circles[i].fillColor.hue += 1;
    if(circles[i].area < 1){
      circles[i].remove();
      circles.splice(i, 1);
      console.log(circles);
    }
  }
}
