var back,backgroundImage;
var PLAY = 1;
var OVER = 0;
gameState = PLAY;
var monkey,monkeyRunning;
var bananaGroup,stoneGroup,bananaImage,stoneImage;

function preload() {
  backgroundImage = loadImage("jungle.jpg");
  monkeyRunning =             loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_010.png");
  
  bananaImage = loadImage("banana.png");
  stoneImage = loadImage("stone.jpg");
}
                                
function setup() {
  createCanvas(400, 400);
  back = createSprite(400,350,800,10);
  back.x = ground.width/2;
  back.addImage(backgroundImage);
  
  monkey = createSprite(50,329);
}

function draw() {
  background(220);
  
  drawSprites();
}