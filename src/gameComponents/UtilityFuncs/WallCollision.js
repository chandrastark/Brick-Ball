export default function WallCollision(ballObj,canvas,player){
    if( ballObj.y + ballObj.dy >= canvas.height){
          player.lives--;
          ballObj.dy *= -1;
    }
    if (ballObj.x - ballObj.rad < 0 || ballObj.x + ballObj.dx > canvas.width) {
        ballObj.dx *= -1;
    }
    if (ballObj.y - ballObj.rad < 0) {
        ballObj.dy *= -1;
    }
}