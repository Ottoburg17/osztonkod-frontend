/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { neurons } from "./neurons";

export default function ConnectionLayer() {
  const connections = [];
  const maxDistance = 18;

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

  return (
    <svg
      className="absolute inset-0 h-full w-full pointer-events-none"
      preserveAspectRatio="none"
    >
      {connections.map((connection, index) => (
        <motion.line
          key={index}
          x1={`${connection.from.x}%`}
          y1={`${connection.from.y}%`}
          x2={`${connection.to.x}%`}
          y2={`${connection.to.y}%`}
          stroke="rgba(16,185,129,.45)"
          strokeWidth="1.4"
          strokeLinecap="round"
          initial={{ opacity: 0.25 }}
          animate={{
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 3 + (index % 4) * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.05,
          }}
        />
      ))}
    </svg>
  );
}