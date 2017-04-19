var space = $('.space');
// var shape = $('.shape');
var currentColor;
var randomNumberR = 172;
var randomNumberG = 172;
var randomNumberB = 172;

space.on('mousemove', getPosition);
space.on('taphold', getPosition);
space.on('taphold', addDiv);
space.on('mousemove', addDiv);
space.on('mousewheel', changeBackground)

function getPosition(evt) {
  var convertedX = evt.clientX/window.innerWidth*100;
  var convertedY = evt.clientY/window.innerHeight*100;
  var convertedZ = (convertedX + convertedY)/2;
  var xPercent = Math.round((convertedX/100)*255);
  var zPercent = Math.round((convertedY/100)*255);
  var yPercent = Math.round((convertedZ/100)*255);
  generateColor(xPercent, yPercent, zPercent);
}

function changeBackground(evt) {
  randomNumberR -= 5;
  randomNumberG += 5;
  randomNumberB += 5;
  space.css('background-color', 'rgb('+randomNumberR+','+randomNumberG+','+randomNumberB+')');
}

function generateColor(x, y, z) {
  currentColor = 'rgb('+x+', '+y+', '+z+')'
  // space.css('background-color', currentColor);
}

function addDiv(evt) {
  var randomNumber = Math.floor(Math.random()*70 + 1);
  var htmlString = '<div class="shape"></div>';
  var shape = $('.shape');
  var lastShape = shape.last();
  space.append(htmlString);

  lastShape.css('width', randomNumber);
  lastShape.css('height', randomNumber);
  lastShape.css('background-color', currentColor);
  lastShape.css('left', evt.clientX-(randomNumber/2));
  lastShape.css('top', evt.clientY-(randomNumber/2));
}
var spaceText = space.children();
space.children().fadeOut(2000);
