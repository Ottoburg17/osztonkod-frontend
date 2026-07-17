// components/whyItWorks/PatternNetwork.jsx

import { useEffect, useRef } from "react";

export default function PatternNetwork() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width;
    let height;

    const dpr = window.devicePixelRatio || 1;

    const leftNodes = [];
    const rightNodes = [];

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

    function createNodes(arr, startX, endX, color) {
      for (let i = 0; i < 35; i++) {
        arr.push({
          x: startX + Math.random() * (endX - startX),
          y: 25 + Math.random() * (height - 50),

          vx: (Math.random() - 0.5) * 0.25,
          vy: (Math.random() - 0.5) * 0.25,

          size: 1 + Math.random() * 2,

          color,
        });
      }
    }

    createNodes(leftNodes, 20, width * 0.38, "#ef4444");
    createNodes(rightNodes, width * 0.62, width - 20, "#10b981");

    const all = [...leftNodes, ...rightNodes];

    function animate() {
      ctx.clearRect(0, 0, width, height);

      all.forEach((n) => {
        n.x += n.vx;
        n.y += n.vy;

        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;
      });

      // Connections

      for (let i = 0; i < all.length; i++) {
        for (let j = i + 1; j < all.length; j++) {
          const a = all[i];
          const b = all[j];

          if (a.color !== b.color) continue;

          const dx = a.x - b.x;
          const dy = a.y - b.y;

          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 110) {
            ctx.strokeStyle =
              a.color === "#ef4444"
                ? `rgba(239,68,68,${1 - dist / 110})`
                : `rgba(16,185,129,${1 - dist / 110})`;

            ctx.lineWidth = 1;

            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // Nodes

      all.forEach((n) => {
        ctx.beginPath();

        ctx.arc(n.x, n.y, n.size, 0, Math.PI * 2);

        ctx.fillStyle = n.color;

        ctx.shadowBlur = 12;
        ctx.shadowColor = n.color;

        ctx.fill();

        ctx.shadowBlur = 0;
      });

      requestAnimationFrame(animate);
    }

    animate();

    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="absolute inset-0"
      />

      {/* Felismerés */}

      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="
            h-28
            w-28

            rounded-full

            border
            border-white/60

            bg-white/80

            backdrop-blur-xl

            shadow-2xl

            flex
            items-center
            justify-center

            font-semibold
            text-gray-700
          "
        >
          Felismerés
        </div>
      </div>
    </>
  );
}