// Lebegés (float)
export function floatOffset(tick, phase, speed = 1) {
  return {
    x: Math.sin(tick * 0.015 * speed + phase) * 8,
    y: Math.cos(tick * 0.018 * speed + phase) * 8,
  };
}

// Pulzálás
export function pulse(tick, phase, min = 0.4, max = 1) {
  const value =
    (Math.sin(tick * 0.05 + phase) + 1) / 2;

  return min + value * (max - min);
}

// Aktív neuron
export function isActive(tick, phase) {
  return Math.sin(tick * 0.05 + phase) > 0.93;
}

// Impulzus pozíciója (0..1)
export function impulseProgress(tick, phase, speed = 0.015) {
  return ((tick * speed + phase) % 1 + 1) % 1;
}