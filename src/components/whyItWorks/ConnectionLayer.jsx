// ConnectionLayer.jsx

const neurons = [
  { x: 18, y: 22 },
  { x: 25, y: 16 },
  { x: 33, y: 28 },
  { x: 42, y: 18 },
  { x: 52, y: 30 },
  { x: 61, y: 20 },
  { x: 72, y: 26 },

  { x: 21, y: 42 },
  { x: 31, y: 48 },
  { x: 45, y: 43 },
  { x: 58, y: 46 },
  { x: 69, y: 40 },

  { x: 24, y: 64 },
  { x: 38, y: 71 },
  { x: 52, y: 67 },
  { x: 66, y: 63 },

  { x: 35, y: 84 },
  { x: 50, y: 88 },
  { x: 63, y: 81 },
];

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
          stroke="rgba(16,185,129,.35)"
          strokeWidth="1.3"
          strokeLinecap="round"
        />
      ))}
    </svg>
  );
}