// NeuronLayer.jsx

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

export default function NeuronLayer() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {neurons.map((neuron, index) => (
        <div
          key={index}
          className="absolute"
          style={{
            left: `${neuron.x}%`,
            top: `${neuron.y}%`,
            transform: "translate(-50%, -50%)",
          }}
        >
          {/* Glow */}
          <div
            className="absolute w-5 h-5 rounded-full bg-emerald-400/30 blur-md animate-pulse"
            style={{
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              animationDelay: `${index * 0.25}s`,
              animationDuration: "3s",
            }}
          />

          {/* Neuron */}
          <div
            className="relative w-2.5 h-2.5 rounded-full bg-emerald-400 border border-white shadow-lg"
            style={{
              animation: `pulse ${2 + (index % 3)}s ease-in-out infinite`,
              animationDelay: `${index * 0.18}s`,
            }}
          />
        </div>
      ))}
    </div>
  );
}