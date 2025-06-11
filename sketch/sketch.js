let font;
let img;
let originalDots = [];
let targetDots = [];
let movers = [];

function preload() {
  img = loadImage('코딩-01.png'); 
  font = loadFont('https://cdnjs.cloudflare.com/ajax/libs/topcoat/0.8.0/font/SourceCodePro-Regular.otf');
}

function setup() {
  createCanvas(842, 1191); // A4 세로 비율
  background(0);

  for (let i = 0; i < 1000; i++) {
    let x = random(360, 1050);
    let y = random(760, 1080);
    originalDots.push(createVector(x, y));
  }

  // ✅ SEOUL 글자의 점 생성
  let textPoints = font.textToPoints('SEOUL', 300, 940, 90, {
    sampleFactor: 0.065 // 글자 점 밀도
  });

  let minLen = min(originalDots.length, textPoints.length);
  for (let i = 0; i < minLen; i++) {
    targetDots.push(createVector(textPoints[i].x, textPoints[i].y));
    movers.push(originalDots[i].copy());
  }
}
    // <“Chat GPT”, https://chatgpt.com/, 22~32, 2025.06>

function draw() {
  background(0);
  image(img, 0, 0, width, height); // 배경 

  fill(255, 204, 0); // 노란색
  noStroke();

  let amt = map(mouseX, 0, width, 0, 1); // 마우스로 제어
  amt = constrain(amt, 0, 1);
  // <“Chat GPT”, https://chatgpt.com/, 42~43, 2025.05>
  
  for (let i = 0; i < movers.length; i++) {
    let from = originalDots[i];
    let to = targetDots[i];
    let interX = lerp(from.x, to.x, amt);
    let interY = lerp(from.y, to.y, amt);
    ellipse(interX, interY, 10, 10); // 원의 크기
  }
}