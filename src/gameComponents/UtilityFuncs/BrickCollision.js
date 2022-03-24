export default function BrickCollision(ball, brick) {
    var distX = Math.abs(ball.x - brick.x - brick.width / 2);
    var distY = Math.abs(ball.y - brick.y - brick.height / 2);
  
    if (distX > brick.width / 2 + ball.rad) {
      
      return {
        hit: false,
      };
    }
    if (distY > brick.height / 2 + ball.rad) {
     
      return {
        hit: false,
      };
    }
  
    if (distX <= brick.width / 2) {
      
      return {
        hit: true,
        axis: "Y",
      };
    }
    if (distY <= brick.height / 2) {
     
      return {
        hit: true,
        axis: "X",
      };
    }
  
    var dx = distX - brick.width / 2;
    var dy = distY - brick.height / 2;
  
    return {
      hit: dx * dx + dy * dy <= ball.rad * ball.rad,
      axis: "X",
    };
  }