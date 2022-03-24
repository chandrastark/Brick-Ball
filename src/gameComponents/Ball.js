export function BallMovement(context, ballObj) {
    let data = new Ball(ballObj.x, ballObj.y, ballObj.rad);
    data.draw(context);
    ballObj.x += ballObj.dx;
    ballObj.y += ballObj.dy;
  }
  
  class Ball {
    constructor(x, y, rad) {
      this.x = x;
      this.y = y;
      this.rad = rad;
    }
    draw(context) {
      context.beginPath();
      context.fillStyle = "yellow";
      context.arc(this.x, this.y, this.rad, 0, 2 * Math.PI);
      context.strokeStyle = "black";
      context.lineWidth = 2;
      context.fill();
      context.stroke();
    }
  }