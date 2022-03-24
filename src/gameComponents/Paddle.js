export default (context, canvas, paddleProps) => {
    class Paddle {
      constructor(x) {
        this.x = x;
        this.y = canvas.height - 30;
        this.height = 20;
        this.width = paddleProps.width;
        this.colors = ["red", "linen"];
      }
      move() {
        context.beginPath();
        context.rect(this.x, this.y, this.width, this.height);
        context.fillStyle = this.broke ? "white" : this.colors[1];
        context.strokeStyle = this.broke ? "white" : "red";
        context.lineWidth = 1;
        context.fillStyle = this.broke ? "white" : this.colors[1];
        context.shadowBlur = 10;
        context.shadowColor = "red";
        context.strokeRect(this.x, this.y, this.width, this.height);
        context.fill();
      }
    }
  
    let paddle = new Paddle(paddleProps.x);
    paddle.move();
    if (paddleProps.x <= 0) {
      paddleProps.x = 0;
    } else if (paddleProps.x + paddleProps.width >= canvas.width) {
      paddleProps.x = canvas.width - paddleProps.width;
    }
  };