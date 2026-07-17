const LEFT = {
  cx: 355,
  cy: 355,
  rx: 180,
  ry: 220,
};

const RIGHT = {
  cx: 545,
  cy: 355,
  rx: 180,
  ry: 220,
};

function insideEllipse(x, y, e) {
  return (
    ((x - e.cx) * (x - e.cx)) / (e.rx * e.rx) +
      ((y - e.cy) * (y - e.cy)) / (e.ry * e.ry) <=
    1
  );
}

export function insideBrain(x, y) {
  const left = insideEllipse(x, y, LEFT);
  const right = insideEllipse(x, y, RIGHT);

  if (!(left || right)) return false;

  // levágjuk az alsó "szárat"
  if (y > 590) return false;

  // homlok rész
  if (x > 730 && y < 250) return false;

  return true;
}

export function generateBrainNeurons(count) {
  const neurons = [];

  while (neurons.length < count) {
    const x = 160 + Math.random() * 580;
    const y = 120 + Math.random() * 470;

    if (!insideBrain(x, y)) continue;

    neurons.push({
      id: neurons.length,
      x,
      y,
      dx: (Math.random() - 0.5) * 0.35,
      dy: (Math.random() - 0.5) * 0.35,
      phase: Math.random() * Math.PI * 2,
    });
  }

  return neurons;
}