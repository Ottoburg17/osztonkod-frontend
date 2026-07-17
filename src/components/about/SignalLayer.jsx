/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

import {
  oldNodes,
  newNodes,
  signalPaths,
} from "./network";

function getNode(nodes, id) {
  return nodes.find((n) => n.id === id);
}

function Signal({ path }) {
  const nodes = path.side === "old" ? oldNodes : newNodes;

  const start = getNode(nodes, path.from);
  const end = getNode(nodes, path.to);

  if (!start || !end) return null;

  return (
    <motion.div
      className="absolute rounded-full"
      style={{
        width: 8,
        height: 8,
        background: "#ffffff",
        boxShadow:
          path.side === "old"
            ? "0 0 18px rgba(251,113,133,.9)"
            : "0 0 20px rgba(16,185,129,.95)",
      }}
      initial={{
        x: start.x - 4,
        y: start.y - 4,
        opacity: 0,
      }}
      animate={{
        x: end.x - 4,
        y: end.y - 4,
        opacity: [0, 1, 1, 0],
      }}
      transition={{
        duration: path.duration,
        delay: path.delay,
        repeat: Infinity,
        repeatDelay: 1,
        ease: "linear",
      }}
    />
  );
}

export default function SignalLayer() {
  return (
    <>
      <div className="absolute left-12 top-24 w-56 h-56">
        {signalPaths
          .filter((p) => p.side === "old")
          .map((path, index) => (
            <Signal key={index} path={path} />
          ))}
      </div>

      <div className="absolute right-12 top-24 w-56 h-56">
        {signalPaths
          .filter((p) => p.side === "new")
          .map((path, index) => (
            <Signal key={index} path={path} />
          ))}
      </div>
    </>
  );
}