import { COLORS } from "./constants";

export default function NeuronLayer({ neurons }) {
  return (
    <>
      {neurons.map((n) => (
        <g key={n.id}>
          {/* Glow */}
          <circle
            cx={n.x}
            cy={n.y}
            r={n.active ? 10 : 7}
            fill={n.active ? COLORS.activeGlow : COLORS.neuronGlow}
            opacity={0.18}
          />

          {/* Neuron */}
          <circle
            cx={n.x}
            cy={n.y}
            r={n.active ? 4 : 2.6}
            fill={n.active ? COLORS.active : COLORS.neuron}
          />
        </g>
      ))}
    </>
  );
}