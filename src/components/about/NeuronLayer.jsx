/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

import {
  oldNodes,
  newNodes,
} from "./network";

function Node({
  x,
  y,
  size,
  color,
  glow,
  delay,
}) {
  return (
    <motion.div
      className="absolute rounded-full"
      style={{
        left: x - size / 2,
        top: y - size / 2,
        width: size,
        height: size,
        background: color,
        boxShadow: glow,
      }}
      animate={{
        scale: [1, 1.18, 1],
        opacity: [0.8, 1, 0.8],
      }}
      transition={{
        duration: 2.2,
        repeat: Infinity,
        delay,
      }}
    />
  );
}

export default function NeuronLayer() {
  return (
    <>
      {/* Régi hálózat */}

      <div className="absolute left-12 top-24 w-56 h-56">

        {oldNodes.map((node, index) => (
          <Node
            key={node.id}
            x={node.x}
            y={node.y}
            size={node.size}
            color="#fb7185"
            glow="0 0 22px rgba(251,113,133,.8)"
            delay={index * 0.15}
          />
        ))}

      </div>

      {/* Új hálózat */}

      <div className="absolute right-12 top-24 w-56 h-56">

        {newNodes.map((node, index) => (
          <Node
            key={node.id}
            x={node.x}
            y={node.y}
            size={node.size}
            color="#10b981"
            glow="0 0 26px rgba(16,185,129,.9)"
            delay={index * 0.18}
          />
        ))}

      </div>
    </>
  );
}