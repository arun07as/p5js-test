function setup() {
  createCanvas(800, 800)
  startDrawing()
}

function draw() {}

async function startDrawing() {
  drawEllipse(400, 400, 400, 400, "#FFFF00")
  await sleep(1000)

  fill(color("red"))
  rect(260, 260, 280, 280)

  await sleep(1000)

  fill(color("green"))
  triangle(260, 450, 400, 260, 540, 450)
}

function drawEllipse(xCoordinate, yCoordinate, width, height, colorHex) {
  fill(color(colorHex))
  noStroke()
  ellipse(xCoordinate, yCoordinate, height, width)
}

async function sleep(milliseconds) {
  return new Promise((r) => setTimeout(r, milliseconds))
}
