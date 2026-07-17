/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { neurons } from "./neurons";

const connections = [];
const maxDistance = 18;

// kapcsolatok létrehozása
for (let i = 0; i < neurons.length; i++) {
  for (let j = i + 1; j < neurons.length; j++) {
    const dx = neurons[i].x - neurons[j].x;
    const dy = neurons[i].y - neurons[j].y;

    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < maxDistance) {
      connections.push({
        from: neurons[i],
        to: neurons[j],
      });
    }
  }
}

export default function SignalLayer() {
  return (
    <svg
      className="absolute inset-0 h-full w-full pointer-events-none"
      preserveAspectRatio="none"
    >
      {connections.map((connection, index) => (
        <motion.circle
          key={index}
          r="3.5"
          fill="#10B981"

          filter="url(#glow)"

          animate={{
            cx: [
              `${connection.from.x}%`,
              `${connection.to.x}%`,
            ],
            cy: [
              `${connection.from.y}%`,
              `${connection.to.y}%`,
            ],
            opacity: [0, 1, 1, 0],
          }}

          transition={{
            duration: 1.8,
            repeat: Infinity,
            repeatDelay: 8,

            delay: (index * 0.35) % 8,

            ease: "linear",
          }}
        />
      ))}

      <defs>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="blur" />

          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
    </svg>
  );
}