var nakami;
var botan;
var ques=['あいうえお','かきく'];
function setup(){
  createCanvas(400,400);
  nakami=createInput();
  nakami.position(20,100);
  botan=createButton("解答する");
  botan.position(250,100);
  


  }

  function draw(){
    background(220);
    text(ques[0],10,50);
    }
