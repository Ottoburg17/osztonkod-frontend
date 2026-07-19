

import { useEffect, useRef } from "react";

export default function NeuralNetwork() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width;
    let height;

    const dpr = window.devicePixelRatio || 1;

    const nodes = [];

    function resize() {
      const rect = canvas.parentElement.getBoundingClientRect();

      width = rect.width;
      height = rect.height;

      canvas.width = width * dpr;
      canvas.height = height * dpr;

      canvas.style.width = width + "px";
      canvas.style.height = height + "px";

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    resize();

    function createNodes() {
      nodes.length = 0;

      for (let i = 0; i < 1; i++) {
        nodes.push({
          x: 30 + Math.random() * (width - 60),
          y: 30 + Math.random() * (height - 60),

          vx: (Math.random() - 0.5) * 0.2,
          vy: (Math.random() - 0.5) * 0.2,

          size: 1 + Math.random() * 1.8,
        });
      }
    }

    createNodes();

    function animate() {
      ctx.clearRect(0, 0, width, height);

      nodes.forEach((n) => {
        n.x += n.vx;
        n.y += n.vy;

        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;
      });

      // Connections

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];

          const dx = a.x - b.x;
          const dy = a.y - b.y;

          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            ctx.strokeStyle = `rgba(74,222,128,${0.25 * (1 - dist / 120)})`;

            ctx.lineWidth = 1;

            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // Nodes

      nodes.forEach((n) => {
        ctx.beginPath();

        ctx.arc(n.x, n.y, n.size, 0, Math.PI * 2);

        ctx.fillStyle = "#4ade80";

        ctx.shadowBlur = 10;
        ctx.shadowColor = "#4ade80";

        ctx.fill();

        ctx.shadowBlur = 0;
      });

      requestAnimationFrame(animate);
    }

    animate();

    window.addEventListener("resize", () => {
      resize();
      createNodes();
    });

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0"
    />
  );
}