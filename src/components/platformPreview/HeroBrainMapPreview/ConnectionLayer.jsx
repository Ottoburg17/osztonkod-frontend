import { COLORS, SETTINGS } from "./constants";

function distance(a, b) {
  return Math.hypot(a.x - b.x, a.y - b.y);
}

export default function ConnectionLayer({ neurons, tick }) {
  const elements = [];

  for (let i = 0; i < neurons.length; i++) {
    for (let j = i + 1; j < neurons.length; j++) {
      const a = neurons[i];
      const b = neurons[j];

      const d = distance(a, b);

      if (d > SETTINGS.connectionDistance) continue;

      const opacity =
        (1 - d / SETTINGS.connectionDistance) * 0.45;

      const active = a.active || b.active;

      // Görbe vezérlőpont
      const mx = (a.x + b.x) / 2;
      const my = (a.y + b.y) / 2;

      const dx = b.x - a.x;
      const dy = b.y - a.y;

      const length = Math.max(Math.hypot(dx, dy), 1);

      const nx = (-dy / length) * 10;
      const ny = (dx / length) * 10;

      const path = `
        M ${a.x} ${a.y}
        Q ${mx + nx} ${my + ny}
        ${b.x} ${b.y}
      `;

      elements.push(
        <g key={`${a.id}-${b.id}`}>
          {/* Glow */}
          <path
            d={path}
            fill="none"
            stroke="#67E8F9"
            strokeWidth="3"
            opacity={opacity * 0.12}
          />

          {/* Main line */}
          <path
            d={path}
            fill="none"
            stroke={COLORS.connection}
            strokeWidth="1.1"
            opacity={opacity}
          />

          {active && (
            <Impulse
              a={a}
              b={b}
              tick={tick}
            />
          )}
        </g>
      );
    }
  }

  return <g>{elements}</g>;
}

function Impulse({ a, b, tick }) {
  const t =
    ((tick * 0.015 + a.phase) % 1 + 1) % 1;

  const x = a.x + (b.x - a.x) * t;
  const y = a.y + (b.y - a.y) * t;

  return (
    <>
      <circle
        cx={x}
        cy={y}
        r="8"
        fill="#6EE7F9"
        opacity=".12"
      />

      <circle
        cx={x}
        cy={y}
        r="3"
        fill="#10B981"
      />
    </>
  );
}