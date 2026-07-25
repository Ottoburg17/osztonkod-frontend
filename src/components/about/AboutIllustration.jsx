/* eslint-disable react-hooks/purity */
import { useEffect, useMemo, useState } from "react";


const NODE_COUNT = 60;
const CONNECTION_DISTANCE = 125;

function random(min, max) {
  return Math.random() * (max - min) + min;
}

function distance(a, b) {
  return Math.hypot(a.x - b.x, a.y - b.y);
}

export default function LivingNeuralNetwork() {
  const [size, setSize] = useState(600);

  useEffect(() => {
    function updateSize() {
      const width = window.innerWidth;

      if (width < 640) setSize(340);
      else if (width < 768) setSize(420);
      else if (width < 1024) setSize(520);
      else setSize(620);
    }

    updateSize();

    window.addEventListener("resize", updateSize);

    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const nodes = useMemo(() => {
    const list = [];

    const center = 300;

    for (let i = 0; i < NODE_COUNT; i++) {
      const angle = Math.random() * Math.PI * 2;

      const radius = random(80, 250);

      list.push({
        id: i,

        x: center + Math.cos(angle) * radius,

        y: center + Math.sin(angle) * radius,

        radius:
          Math.random() > 0.9
            ? random(5,7)
            : Math.random() > 0.6
            ? random(3,4.5)
            : random(1.8,3),

        opacity: random(0.25,0.9),
      });
    }

    return list;
  }, []);

  const connections = useMemo(() => {
    const lines = [];

    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const d = distance(nodes[i], nodes[j]);

        if (d < CONNECTION_DISTANCE) {
          lines.push({
            from: nodes[i],
            to: nodes[j],
            opacity: 1 - d / CONNECTION_DISTANCE,
          });
        }
      }
    }

    return lines;
  }, [nodes]);

  return (
    <div
      className="
        relative
        mx-auto
        flex
        items-center
        justify-center
      "
      style={{
        width: size,
        height: size,
      }}
    >
      {/* Glow */}

      <div className="absolute w-[340px] h-[340px] rounded-full bg-emerald-400/6 blur-[160px]" />

      <div className="absolute w-[240px] h-[240px] rounded-full bg-emerald-400/10 blur-[100px]" />

      <div className="absolute w-[150px] h-[150px] rounded-full bg-emerald-300/15 blur-[50px]" />
      
      <div
        className="
        absolute
        w-[460px]
        h-[460px]
        rounded-full
        bg-emerald-500/5
        blur-[220px]
        "
        />

      <svg
        viewBox="0 0 600 600"
        className="absolute inset-0 w-full h-full"
      >
       
      {Array.from({ length: 45 }).map((_, i) => (
        <circle
          key={`bg-${i}`}
          cx={random(0, 600)}
          cy={random(0, 600)}
          r={random(0.5, 1.8)}
          fill="white"
          opacity="0.05"
        />
      ))}



        {/* CONNECTIONS */}

        {connections.map((line, index) => (
          <line
            key={index}
            x1={line.from.x}
            y1={line.from.y}
            x2={line.to.x}
            y2={line.to.y}
            stroke="#6EE7B7"
            strokeWidth={line.opacity > 0.6 ? 1.5 : 0.8}
            opacity={line.opacity * 0.28}
          />
        ))}

        {/* NODES */}

        {nodes.map((node) => (
        <g key={node.id}>

          <circle
            cx={node.x}
            cy={node.y}
            r={node.radius + 3}
            fill="#34D399"
            opacity="0.08"
          />

          <circle
            cx={node.x}
            cy={node.y}
            r={node.radius}
            fill="#10B981"
            opacity={node.opacity}
          />

        </g>
      ))}

              {/* CENTER GLASS */}

        <defs>
          <radialGradient id="centerGlow" cx="50%" cy="50%" r="60%">
            <stop offset="0%" stopColor="#34D399" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#34D399" stopOpacity="0" />
          </radialGradient>

          <linearGradient id="ring" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#A7F3D0" />
            <stop offset="100%" stopColor="#10B981" />
          </linearGradient>
        </defs>

        {/* Glow */}

        <circle
          cx="300"
          cy="300"
          r="120"
          fill="url(#centerGlow)"
          opacity="0.35"
        />

        {/* Glass Circle */}

        <circle
          cx="300"
          cy="300"
          r="82"
          fill="rgba(255,255,255,.05)"
          stroke="url(#ring)"
          strokeWidth="2"
        />

        {/* Inner Circle */}

        <circle
          cx="300"
          cy="300"
          r="62"
          fill="rgba(255,255,255,.02)"
          stroke="rgba(255,255,255,.15)"
        />

     

        {/* Ö Symbol */}

        <g opacity="0.95">

          <text
            x="300"
            y="318"
            textAnchor="middle"
            fontSize="58"
            fontWeight="400"
            fill="#6B7280"
            fontFamily="Inter, sans-serif"
          >
            Ö
          </text>

        </g>

                        

                        
                
      </svg>
    </div>
  );
}  

