// ConnectionLayer.jsx
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
      className="absolute inset-0 w-full h-full pointer-events-none"
      preserveAspectRatio="none"
    >
      {connections.map((connection, index) => (
        <line
          key={index}
          x1={`${connection.from.x}%`}
          y1={`${connection.from.y}%`}
          x2={`${connection.to.x}%`}
          y2={`${connection.to.y}%`}
          stroke="rgba(16,185,129,.5)"
          strokeWidth="1.3"
          strokeLinecap="round"
        />
      ))}
    </svg>
  );
}