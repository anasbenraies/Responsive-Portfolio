import { useEffect, useRef } from "react";

interface Props {
  timeout: number;
}

const MatrixAnimation: React.FC<Props> = ({ timeout }) => {
  const canvas = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const el = canvas.current;
    if (!el) return;

    const context = el.getContext("2d");
    if (!context) return;

    const width = document.body.offsetWidth;
    const height = document.body.offsetHeight;

    el.width = width;
    el.height = height;

    context.fillStyle = "#000";
    context.fillRect(0, 0, width, height);

    const columns = Math.floor(width / 20) + 1;
    const yPositions: number[] = Array(columns).fill(0);

    const drawMatrix = () => {
      if (!context) return;

      context.fillStyle = "#0001";
      context.fillRect(0, 0, width, height);

      context.fillStyle = "#0f0";
      context.font = "15pt monospace";

      yPositions.forEach((y, index) => {
        const text = String.fromCharCode(Math.random() * 128);
        const x = index * 20;

        context.fillText(text, x, y);

        if (y > 100 + Math.random() * 10000) {
          yPositions[index] = 0;
        } else {
          yPositions[index] = y + 20;
        }
      });
    };

    const interval = setInterval(drawMatrix, timeout);
    return () => clearInterval(interval);
  }, [timeout]);

  return (
    <div
      className="matrix-canvas-container"
      style={{
        background: "#000000",
        overflow: "hidden",
        position: "fixed",
        height: "100%",
        width: "100%",
        zIndex: -1,
        left: "0",
        top: "0",
      }}
    >
      <canvas ref={canvas} />
    </div>
  );
};

export default MatrixAnimation;
