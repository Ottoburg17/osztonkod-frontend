/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { neurons } from "./neurons";

const connections = [];
const MAX_DISTANCE = 18;

// Kapcsolatok létrehozása
for (let i = 0; i < neurons.length; i++) {
  for (let j = i + 1; j < neurons.length; j++) {
    const dx = neurons[i].x - neurons[j].x;
    const dy = neurons[i].y - neurons[j].y;

    if (Math.sqrt(dx * dx + dy * dy) < MAX_DISTANCE) {
      connections.push({
        from: neurons[i],
        to: neurons[j],
      });
    }
  }
}

// Véletlenszerűen kiválasztunk néhány kapcsolatot
const signals = connections
  .sort(() => Math.random() - 0.5)
  .slice(0, 4);

export default function SignalLayer() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      <defs>
        <filter id="signalGlow">
          <feGaussianBlur stdDeviation="2.5" result="blur" />

          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {signals.map((signal, index) => (
        <motion.circle
          key={index}
          r="1.5"
          fill="#34d399"
          filter="url(#signalGlow)"
          initial={{
            cx: signal.from.x,
            cy: signal.from.y,
            opacity: 0,
          }}
          animate={{
            cx: signal.to.x,
            cy: signal.to.y,
            opacity: [0, 1, 1, 0],
            scale: [0.6, 1.8, 1.8, 0.6],
          }}
          transition={{
            duration: 1.6,
            repeat: Infinity,
            repeatDelay: 1 + index * 0.5,
            delay: index * 0.4,
            ease: "linear",
          }}
        />
      ))}
    </svg>
  );
}

