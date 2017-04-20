var space = $('.space');
var currentColor;

space.on('taphold', getPosition);
space.on('taphold', addDiv);
space.on('mousemove', addDiv);

function addDiv(evt) {
  var htmlString = '<div class="shape"></div>';
  space.append(htmlString);
  addBlob(evt);
}

function addBlob(evt) {
  getPosition(evt);
  var randomNumber = Math.floor(Math.random()*70 + 1);
  var shape = $('.shape');
  var lastShape = shape.last();
  lastShape.css({
    'width': randomNumber,
    'height': randomNumber,
    'background-color': currentColor,
    'left': evt.clientX-(randomNumber/2),
    'top': evt.clientY-(randomNumber/2)
  });
  lastShape.delay(8000).fadeOut(2000);
}

function getPosition(evt) {
  var convertedX = evt.clientX/window.innerWidth*100;
  var convertedY = evt.clientY/window.innerHeight*100;
  var convertedZ = (convertedX + convertedY)/2;
  var xPercent = Math.round((convertedX/100)*255);
  var zPercent = Math.round((convertedY/100)*255);
  var yPercent = Math.round((convertedZ/100)*255);
  generateColor(xPercent, yPercent, zPercent);
}

function generateColor(x, y, z) {
  currentColor = 'rgb('+x+', '+y+', '+z+')'
}

// page text
$('.title').hide().show().delay(3000).fadeOut(2000).delay(5000).fadeIn(2000).delay(3000).fadeOut(1000);
$('.seriously').hide().text('Just ').delay(10000).fadeIn(2000).delay(3000).fadeOut(1000);
