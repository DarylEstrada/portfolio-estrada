import { RotateCcw } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { Tilt } from "react-tilt";

const BrickBreaker: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [displayRestartBtn, setDisplayRestartBtn] = useState(false);
  const [instructions, setIntructions] = useState(true);

  useEffect(() => {
    const w = 400,
      h = 600,
      ballSize = 10,
      brickW = 30,
      brickH = 20,
      batW = 100,
      batH = 20;

    let ballX: number,
      ballY: number,
      dx: number,
      dy: number,
      bricks: { x: number; y: number; active: boolean }[] = [],
      batX = w / 2,
      batY = h - 50;

    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");

    if (!canvas || !ctx) {
      console.error("Canvas or context not available.");
      return;
    }

    canvas.width = w;
    canvas.height = h;
    canvas.className = "rounded-[20px]";

    function init() {
      bricks = [];
      ballX = w / 2;
      ballY = h - 100;
      dx = 1;
      dy = -1;
      for (let y = 0; y < 4; y++) {
        for (let x = y; x < 10 - y; x++) {
          bricks.push({ x: 50 + x * brickW, y: 50 + y * brickH, active: true });
        }
      }
    }

    function drawRect(
      color: string,
      x: number,
      y: number,
      width: number,
      height: number
    ) {
      if (ctx) {
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.rect(x, y, width, height);
        ctx.fill();
        ctx.stroke();
      }
    }

    function drawCircle(color: string, x: number, y: number, radius: number) {
      if (ctx) {
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
        ctx.fill();
      }
    }

    function draw() {
      drawRect("#0a0b0b", 0, 0, w, h);
      drawCircle("white", ballX, ballY, ballSize);
      for (let i = 0; i < bricks.length; i++) {
        const b = bricks[i];
        if (!b.active) continue;
        drawRect("white", b.x, b.y, brickW, brickH);
      }
      drawRect("white", batX - batW / 2, batY, batW, batH);
    }

    function move() {
      if (ballX - ballSize + dx < 0 || ballX + ballSize + dx > w) dx = -dx;
      if (ballY - ballSize + dy < 0) dy = -dy;
      if (ballY - ballSize > batY) return false;
      if (
        ballY + ballSize > batY &&
        ballX + ballSize > batX - batW / 2 &&
        ballX - ballSize < batX + batW / 2
      )
        dy = -dy;
      ballX += dx;
      ballY += dy;
      for (let i = 0; i < bricks.length; i++) {
        const b = bricks[i];
        if (!b.active) continue;
        if (
          b.x < ballX + ballSize &&
          ballX - ballSize < b.x + brickW &&
          b.y < ballY + ballSize &&
          ballY - ballSize < b.y + brickH
        ) {
          b.active = false;
          dy = -dy;
          break;
        }
      }
      return true;
    }

    function game() {
      if (!move()) {
        setDisplayRestartBtn(true);
      }
      draw();
    }

    const keyDownHandler = (e: KeyboardEvent) => {
      switch (e.keyCode) {
        case 37:
          if (batX > batW) batX -= 20;
          break;
        case 39:
          if (batX < w - batW) batX += 20;
          break;
      }
    };

    document.addEventListener("keydown", keyDownHandler);
    init();
    const intervalId = setInterval(game, 1);

    return () => {
      document.removeEventListener("keydown", keyDownHandler);
      clearInterval(intervalId);
    };
  }, [displayRestartBtn]);

  return (
    <div className="flex flex-col  gap-[20px]">
      <p className="text-2xl font-bold text-start">Brick Breaker Game</p>
      <div className="relative flex items-center justify-center glass p-[20px] w-[440px] h-[640px] glow">
        {displayRestartBtn && (
          <div className="absolute flex items-center justify-center  backdrop-blur-[5px] h-[600px] w-[400px] rounded-[20px] text-[12px] ">
            <Tilt>
              <p
                onClick={() => setDisplayRestartBtn(false)}
                className="glass-no-radius rounded-full p-[10px] glow cursor-pointer"
              >
                <RotateCcw width={20} height={20} />
              </p>
            </Tilt>
          </div>
        )}

        {instructions && (
          <div
            onClick={() => setIntructions(false)}
            className="absolute flex flex-col gap-[10px] items-center justify-center  backdrop-blur-[5px] h-[600px] w-[400px] rounded-[20px] text-[12px] "
          >
            <p className="cursor-pointer text-[20px]">Click here to play!</p>
            <p>Use {"< >"} keys to control.</p>
          </div>
        )}

        <canvas id="canvas" ref={canvasRef}></canvas>
      </div>
    </div>
  );
};

export default BrickBreaker;
