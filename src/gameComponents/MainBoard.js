import React, { useRef, useEffect } from 'react'
import { BallMovement } from './Ball';
import data from '../data';
import WallCollision from './UtilityFuncs/WallCollision';
import Paddle from './Paddle';
import Brick from './Brick';
import BrickCollision from './UtilityFuncs/BrickCollision';
import PaddleStrike from './UtilityFuncs/PaddleStrike';
import Stats from './Stats';
import AllBroke from './UtilityFuncs/AllBroke';
import ResetBall from './UtilityFuncs/ResetBall';



let bricks = [];
export default function MainBoard() {
    
    const canvasReference = useRef(null);
    let { ballObj,paddleProps,brickObj,player } = data;
    useEffect(() => {
        const render = () => {
            const canvas = canvasReference.current;
            const context = canvas.getContext("2d");
            paddleProps.y=canvas.height-30;
            let newBrickArray=Brick(player.level,bricks,canvas,brickObj);
            if(newBrickArray && newBrickArray.length>0){
                bricks=newBrickArray;
            }
            context.clearRect(0, 0, canvas.width, canvas.height);
            Stats(context,player,canvas);

            if(player.lives===0){
               alert("Game Over !! Click OK to restart");
               bricks.length=0;
               player.level=1;
               player.lives=5;
               player.score=0;
               ResetBall(ballObj,canvas,paddleProps);
            }
            bricks.map((brick)=>{
                return brick.draw(context);
            });
            BallMovement(context, ballObj);
            AllBroke(bricks,player,canvas,ballObj);
            WallCollision(ballObj,canvas,player);
            
            let brickCollision;
            for (let i = 0; i < bricks.length; i++) {
                brickCollision = BrickCollision(ballObj, bricks[i]);
                if (brickCollision.hit && !bricks[i].broke) {
                  if (brickCollision.axis === "X") {
                    ballObj.dx *= -1;
                    bricks[i].broke = true;
                  } else if (brickCollision.axis === "Y") {
                    ballObj.dy *= -1;
                    bricks[i].broke = true;
                  }
                  player.score+=10;
                }
              }
            Paddle(context,canvas,paddleProps)
            PaddleStrike(ballObj,paddleProps);
            requestAnimationFrame(render);
        }
        render();
    }, [])


    return (
        <div className="canvasDiv"style={{ textAlign: "center" }}>
      <h1 className='title'>Brick And Ball Game</h1>
        <canvas
        id="canvas"
        ref={canvasReference}
        onMouseMove={(event) =>
          (paddleProps.x =
            event.clientX -
            (window.innerWidth < 900 ? 10 : (window.innerWidth * 20) / 200) -
            paddleProps.width / 2 -
            10)
        }
        height="500"
        width={
          window.innerWidth < 900
            ? window.innerWidth - 20
            : window.innerWidth - (window.innerWidth * 20) / 100
        }
      />
      </div>
        
    )
}
