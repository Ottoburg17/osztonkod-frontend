/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

import {
  oldNodes,
  newNodes,
  oldConnections,
  newConnections,
} from "./network";

function getNode(nodes, id) {
  return nodes.find((node) => node.id === id);
}

function Connections({
  nodes,
  connections,
  color,
  opacity = 0.25,
  delay = 0,
}) {
  return (
    <svg
      className="absolute inset-0 h-full w-full overflow-visible"
      viewBox="0 0 560 260"
      preserveAspectRatio="none"
    >
      {connections.map(([from, to], index) => {
        const start = getNode(nodes, from);
        const end = getNode(nodes, to);

        if (!start || !end) return null;

        return (
          <motion.line
            key={`${from}-${to}`}
            x1={start.x}
            y1={start.y}
            x2={end.x}
            y2={end.y}
            stroke={color}
            strokeWidth="2"

            strokeLinecap="round"

            initial={{
              pathLength: 0,
              opacity: 0,
            }}

            animate={{
              pathLength: 1,
              opacity,
            }}

            transition={{
              duration: 1.2,
              delay: delay + index * 0.08,
            }}
          />
        );
      })}
    </svg>
  );
}

export default function ConnectionLayer() {
  return (
    <>
      {/* Régi hálózat */}

      <div className="absolute left-12 top-24 w-56 h-56">
        <Connections
          nodes={oldNodes}
          connections={oldConnections}
          color="#fb7185"
          opacity={0.35}
        />
      </div>

      {/* Új hálózat */}

      <div className="absolute right-12 top-24 w-56 h-56">
        <Connections
          nodes={newNodes}
          connections={newConnections}
          color="#10b981"
          opacity={0.4}
          delay={0.4}
        />
      </div>
    </>
  );
}