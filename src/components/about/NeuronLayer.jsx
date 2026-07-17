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
      className="absolute"
      style={{
        left: x - size / 2,
        top: y - size / 2,
        width: size,
        height: size,
      }}
      animate={{
        scale: [1, 1.12, 1],
      }}
      transition={{
        duration: 2.5,
        repeat: Infinity,
        delay,
        ease: "easeInOut",
      }}
    >
      {/* Outer glow */}

      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background: color,
          filter: "blur(10px)",
          opacity: 0.35,
        }}
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.2, 0.45, 0.2],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          delay,
        }}
      />

      {/* Main circle */}

      <div
        className="absolute inset-0 rounded-full"
        style={{
          background: color,
          boxShadow: glow,
        }}
      />

      {/* White core */}

      <div
        className="absolute rounded-full bg-white"
        style={{
          width: size * 0.35,
          height: size * 0.35,
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          opacity: 0.95,
        }}
      />
    </motion.div>
  );
}

export default function NeuronLayer() {
  return (
    <>
      {/* Old */}

      <div className="absolute left-10 top-20 w-64 h-64">
        {oldNodes.map((node, index) => (
          <Node
            key={node.id}
            x={node.x}
            y={node.y}
            size={node.size}
            color="#fb7185"
            glow="0 0 20px rgba(251,113,133,.85)"
            delay={index * 0.12}
          />
        ))}
      </div>

      {/* New */}

      <div className="absolute right-10 top-20 w-64 h-64">
        {newNodes.map((node, index) => (
          <Node
            key={node.id}
            x={node.x}
            y={node.y}
            size={node.size}
            color="#10b981"
            glow="0 0 22px rgba(16,185,129,.9)"
            delay={index * 0.12}
          />
        ))}
      </div>
    </>
  );
}