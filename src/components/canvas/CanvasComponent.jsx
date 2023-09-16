
import React, { useEffect, useRef } from 'react';

function CanvasComponent() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Draw on the canvas using 'ctx'
    ctx.fillStyle = 'cyred';
    ctx.fillRect(50, 50, 200, 100);
  }, []);

  return <canvas ref={canvasRef} width={800} height={500} />;
}

export default CanvasComponent;
