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
        width: 10,
        height: 10,
        borderRadius: "9999px",
        background: "#ffffff",

        boxShadow:
          path.side === "old"
            ? `
                0 0 8px rgba(251,113,133,.95),
                0 0 18px rgba(251,113,133,.75),
                0 0 35px rgba(251,113,133,.45)
              `
            : `
                0 0 8px rgba(16,185,129,.95),
                0 0 18px rgba(16,185,129,.75),
                0 0 35px rgba(16,185,129,.45)
              `,
      }}
      initial={{
        x: start.x - 5,
        y: start.y - 5,
        opacity: 0,
        scale: 0.4,
      }}
      animate={{
        x: end.x - 5,
        y: end.y - 5,

        opacity: [0, 1, 1, 0],

        scale: [0.4, 1.25, 1, 0.5],
      }}
      transition={{
        duration: path.duration,
        delay: path.delay,
        repeat: Infinity,
        repeatDelay: 0.2,
        ease: "linear",
      }}
    />
  );
}

export default function SignalLayer() {
  return (
    <>
      {/* Old Network */}

      <div className="absolute left-12 top-24 w-56 h-56">
        {signalPaths
          .filter((path) => path.side === "old")
          .map((path, index) => (
            <Signal
              key={`old-${index}`}
              path={path}
            />
          ))}
      </div>

      {/* New Network */}

      <div className="absolute right-12 top-24 w-56 h-56">
        {signalPaths
          .filter((path) => path.side === "new")
          .map((path, index) => (
            <Signal
              key={`new-${index}`}
              path={path}
            />
          ))}
      </div>
    </>
  );
}