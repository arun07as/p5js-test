function setup() {
  createCanvas(800, 800)
  startDrawing()
}

function draw() {}

async function startDrawing() {
  drawEllipse(400, 400, 400, 400, "#FFFF00")
  await sleep(300)

  fill(color("red"))
  rect(260, 260, 280, 280)

  await sleep(300)
  fill(color("orange"))
  quad(200, 400, 400, 200, 600, 400, 400, 600)

  fill(color("orange"))
  await sleep(300)
  quad(230, 300, 510, 230, 580, 510, 300, 580)

  fill(color("orange"))
  await sleep(300)
  quad(580, 310, 510, 580, 230, 510, 310, 230)

  // await sleep(300)
  // fill(color("green"))
  // triangle(260, 450, 400, 260, 540, 450)

  // await sleep(300)
  // fill(color("green"))
  // triangle(400, 550, 260, 360, 540, 360)
}

function drawEllipse(xCoordinate, yCoordinate, width, height, colorHex) {
  fill(color(colorHex))
  noStroke()
  ellipse(xCoordinate, yCoordinate, height, width)
}

async function sleep(milliseconds) {
  return new Promise((r) => setTimeout(r, milliseconds))
}
