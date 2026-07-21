// components/about/PatternNetwork.jsx

import { useEffect, useRef } from "react";

export default function PatternNetwork() {
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

      const centerX = width / 2;
      const centerY = height / 2;

      const radiusX = width * 0.34;
      const radiusY = height * 0.42;

      for (let i = 0; i < 24; i++) {
        const angle = Math.random() * Math.PI * 2;

        const r = 0.45 + Math.random() * 0.55;

        nodes.push({
          x: centerX + Math.cos(angle) * radiusX * r,
          y: centerY + Math.sin(angle) * radiusY * r,

          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,

          size: 2 + Math.random() * 1.4,
        });
      }
    }

    createNodes();

    function animate() {
      ctx.clearRect(0, 0, width, height);

      nodes.forEach((n) => {
        n.x += n.vx;
        n.y += n.vy;

        if (n.x < width * 0.15 || n.x > width * 0.85) n.vx *= -1;
        if (n.y < height * 0.12 || n.y > height * 0.88) n.vy *= -1;
      });

      // Connections

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];

          const dx = a.x - b.x;
          const dy = a.y - b.y;

          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 60) {
            ctx.strokeStyle = `rgba(16,185,129,${
              0.22 * (1 - dist / 80)
            })`;

            ctx.lineWidth = 0.8;

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

        ctx.fillStyle = "rgba(41, 172, 15, 0.95)";

        ctx.shadowBlur = 8;
        ctx.shadowColor = "rgba(125, 231, 75, 0.5)";

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
      className="absolute inset-0 pointer-events-none"
    />
  );
}

