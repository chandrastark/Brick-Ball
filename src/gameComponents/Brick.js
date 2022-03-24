export default function Brick(level, bricks, canvas, brick) {
    brick.width = canvas.width / 5 - 1;
    let newbricks = [];
    if (!bricks) {
      return [];
    }
    
    if (bricks.length >= 5 * level) {
      return;
    }
  
    
    for (let i = 0; i < 5 * level; i++) {
      let newBrick = new SingleBrick(
        brick.x + brick.width,
        brick.y,
        brick.width,
        brick.height,
        brick.colors
      );
      newbricks.push(newBrick);
      
      brick.x += brick.width + 1;
      if (brick.x + brick.width >= canvas.width) {
        brick.x = 0.5;
        brick.y += brick.height + 1;
      }
    }
    return newbricks;
  }
  
  class SingleBrick {
    constructor(x, y, w, h, c) {
      this.x = x - w;
      this.y = y;
      this.width = w;
      this.height = h;
      this.colors = c;
      this.broke = false;
    }
    draw(context) {
      context.beginPath();
      context.rect(this.x, this.y, this.width, this.height);
      context.fillStyle = this.broke ? "rgba(213, 6, 5,0)" : this.colors[1];
  
      context.lineWidth = 4;
      context.strokeStyle = this.broke ? "rgba(213, 6, 5,0)" : "transparent";
      
      context.fill();
      context.strokeRect(this.x, this.y, this.width, this.height);
    }
  }