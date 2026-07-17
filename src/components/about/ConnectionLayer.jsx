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
  opacity = 0.35,
  delay = 0,
}) {
  return (
    <svg
      className="absolute inset-0 h-full w-full overflow-visible"
      viewBox="0 0 230 260"
    >
      {connections.map(([from, to], index) => {
        const start = getNode(nodes, from);
        const end = getNode(nodes, to);

        if (!start || !end) return null;

        // véletlenszerű vastagság
        const strokeWidth =
          index % 5 === 0
            ? 2.4
            : index % 2 === 0
            ? 1.8
            : 1.2;

        return (
          <motion.line
            key={`${from}-${to}`}
            x1={start.x}
            y1={start.y}
            x2={end.x}
            y2={end.y}
            stroke={color}
            strokeWidth={strokeWidth}
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
              duration: 1,
              delay: delay + index * 0.04,
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
      <div className="absolute left-10 top-20 w-64 h-64">
        <Connections
          nodes={oldNodes}
          connections={oldConnections}
          color="#fb7185"
          opacity={0.28}
        />
      </div>

      <div className="absolute right-10 top-20 w-64 h-64">
        <Connections
          nodes={newNodes}
          connections={newConnections}
          color="#10b981"
          opacity={0.32}
          delay={0.25}
        />
      </div>
    </>
  );
}