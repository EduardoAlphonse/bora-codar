import { useEffect, useRef } from "react";

interface RadialGraphProps {
  complete: number;
  color1: string;
  color2: string;
}

export const RadialGraph = ({ complete, color1, color2 }: RadialGraphProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const arcSize = 180;
  const lineWidthSize = 28;

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const radius = arcSize / 2 - lineWidthSize / 2;
      const startAngle = Math.PI * 1.5;
      const endAngle = startAngle + Math.PI * 2 * (complete / 100);
      const counterClockwise = false;
      const lineWidth = lineWidthSize;
      const lineCap = "round";
      const lineJoin = "round";

      if (context) {
        const gradient = context.createLinearGradient(
          0,
          0,
          canvas.width,
          canvas.height
        );
        gradient.addColorStop(0, color1);
        gradient.addColorStop(1, color2);

        context.beginPath();
        context.arc(
          centerX,
          centerY,
          radius,
          startAngle,
          endAngle,
          counterClockwise
        );
        context.lineWidth = lineWidth;
        context.lineCap = lineCap;
        context.lineJoin = lineJoin;
        context.strokeStyle = gradient;
        context.stroke();
      }
    }
  }, []);

  return (
    <div className="flex justify-center items-center">
      <canvas ref={canvasRef} width={arcSize} height={arcSize} />
    </div>
  );
};
