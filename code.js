setScreen("welcomeScreen");
var num = 0;
var ans1 = 0;
var ans2 = 0;
var ans3 = 0;
var ans4 = 0;
var ans5 = 0;
var ans6 = 0;
var ans7 = 0;
var ans8 = 0;
var ans9 = 0;
var ans10 = 0;
var ans11 = 0;
var ans12 = 0;
var ans13 = 0;
var ans14 = 0;
var ans15 = 0;
var ans16 = 0;
var ans17 = 0;
var ans18 = 0;
var ans19 = 0;
var ans20 = 0;
var ans21 = 0;
var ans22 = 0;
var ans23 = 0;
var ans24 = 0;
var xValue = 0;
var xPosition = 0;
var xCoord = 0;
var yValue = 0;
var yPosition = 0;
var yCoord = 0;
var zValue = 0;
var zPosition = 0;
var zCoord = 0;
function endTest(){
  calculatePlacement("x");
  calculatePlacement("y");
  calculatePlacement("z");
  plotResults();
}
function calculatePlacement(variable){
  if (variable === "x"){
  xValue = (ans1 + ans2 + ans3 + ans4 - ans5 - ans6 - ans7 - ans8)/4;
  xPosition = xValue*16+155;
  xCoord = (xValue).toFixed(2);
  }
  if (variable === "y"){
  yValue = (ans9 + ans10 + ans11 + ans12 - ans13 - ans14 - ans15 - ans16)/4;
  yPosition = yValue*16+195;
  yCoord = (-(yValue)).toFixed(2);
  }
  if (variable === "z"){
  zValue = (ans17 + ans18 + ans19 + ans20 - ans21 - ans22 - ans23 - ans24)/4;
  zPosition = zValue*16+160;
  zCoord = (zValue).toFixed(2); 
  }
}
function plotResults(){
  write("Your results: (" + xCoord + "," + yCoord + "," + zCoord + ")");
  setPosition("dot",xPosition,yPosition);
  setPosition("bar",zPosition,364);
}
function nextQuestion(){
  num = num + 1;
  var num1 = num - 1;
  var previousSlider = "slider" + num1;
  var previousQuest = "text_area" + num1;
  var currentSlider = "slider" + num;
  var currentQuest = "text_area" + num;
  if(num > 1){
  hideElement(previousSlider);
  hideElement(previousQuest);
  }
  console.log(currentSlider);
  showElement(currentSlider);
  console.log(currentQuest);
  showElement(currentQuest);
}
onEvent("button1","click",function(){
  setScreen("gameScreen");
  setStyle("numline", "z-index: -10");
  hide();
  penUp();
  moveTo(0,-3);
  penDown();
  penWidth(15);
  penColor("white");
  turnRight();
  nextQuestion();
});
onEvent("slider1","change",function(){
  moveForward(13);
  ans1 = getNumber("slider1");
  nextQuestion();
});
onEvent("slider2","change",function(){
  moveForward(13);
  ans2 = getNumber("slider2");
  nextQuestion();
});
onEvent("slider3","change",function(){
  moveForward(13);
  ans3 = getNumber("slider3");
  nextQuestion();
});
onEvent("slider4","change",function(){
  moveForward(13);
  ans4 = getNumber("slider4");
  nextQuestion();
});
onEvent("slider5","change",function(){
  moveForward(13);
  ans5 = getNumber("slider5");
  nextQuestion();
});
onEvent("slider6","change",function(){
  moveForward(13);
  ans6 = getNumber("slider6");
  nextQuestion();
});
onEvent("slider7","change",function(){
  moveForward(13);
  ans7 = getNumber("slider7");
  nextQuestion();
});
onEvent("slider8","change",function(){
  moveForward(13);
  ans8 = getNumber("slider8");
  nextQuestion();
});
onEvent("slider9","change",function(){
  moveForward(13);
  ans9 = getNumber("slider9");
  nextQuestion();
});
onEvent("slider10","change",function(){
  moveForward(13);
  ans10 = getNumber("slider10");
  nextQuestion();
});
onEvent("slider11","change",function(){
  moveForward(13);
  ans11 = getNumber("slider11");
  nextQuestion();
});
onEvent("slider12","change",function(){
  moveForward(13);
  ans12 = getNumber("slider12");
  nextQuestion();
});
onEvent("slider13","change",function(){
  moveForward(13);
  ans13 = getNumber("slider13");
  nextQuestion();
});
onEvent("slider14","change",function(){
  moveForward(13);
  ans14 = getNumber("slider14");
  nextQuestion();
});
onEvent("slider15","change",function(){
  moveForward(13);
  ans15 = getNumber("slider15");
  nextQuestion();
});
onEvent("slider16","change",function(){
  moveForward(13);
  ans16 = getNumber("slider16");
  nextQuestion();
});
onEvent("slider17","change",function(){
  moveForward(13);
  ans17 = getNumber("slider17");
  nextQuestion();
});
onEvent("slider18","change",function(){
  moveForward(13);
  ans18 = getNumber("slider18");
  nextQuestion();
});
onEvent("slider19","change",function(){
  moveForward(13);
  ans19 = getNumber("slider19");
  nextQuestion();
});
onEvent("slider20","change",function(){
  moveForward(13);
  ans20 = getNumber("slider20");
  nextQuestion();
});
onEvent("slider21","change",function(){
  moveForward(13);
  ans21 = getNumber("slider21");
  nextQuestion();
});
onEvent("slider22","change",function(){
  moveForward(13);
  ans22 = getNumber("slider22");
  nextQuestion();
});
onEvent("slider23","change",function(){
  moveForward(13);
  ans23 = getNumber("slider23");
  nextQuestion();
});
onEvent("slider24","change",function(){
  moveForward(13);
  ans24 = getNumber("slider24");
  hideElement("slider24");
  showElement("button2");
});
onEvent("button2","click",function(){
  setScreen("testResults");
  setStyle("dot", "z-index: 10");
  hide();
  endTest();
});
onEvent("radio_button1","click",function(){
  showElement("symbols");
  hideElement("images");
  hideElement("labels");
  hideElement("parties");
});
onEvent("radio_button2","click",function(){
  showElement("images");
  hideElement("symbols");
  hideElement("labels");
  hideElement("parties");
});
onEvent("radio_button4","click",function(){
  hideElement("images");
  hideElement("symbols");
  showElement("labels");
  hideElement("parties");
});
onEvent("radio_button5","click",function(){
  hideElement("images");
  hideElement("symbols");
  hideElement("labels");
  showElement("parties");
});