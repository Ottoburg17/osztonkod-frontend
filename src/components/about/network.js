export const oldNodes = [
  { id: "o1", x: 25, y: 35, size: 14 },
  { id: "o2", x: 70, y: 70, size: 16 },
  { id: "o3", x: 130, y: 35, size: 18 },
  { id: "o4", x: 190, y: 60, size: 15 },

  { id: "o5", x: 40, y: 120, size: 15 },
  { id: "o6", x: 105, y: 110, size: 20 },
  { id: "o7", x: 175, y: 130, size: 16 },

  { id: "o8", x: 20, y: 205, size: 14 },
  { id: "o9", x: 80, y: 180, size: 15 },
  { id: "o10", x: 135, y: 205, size: 17 },
  { id: "o11", x: 200, y: 180, size: 14 },
  { id: "o12", x: 105, y: 245, size: 16 },
];

export const newNodes = [
  { id: "n1", x: 30, y: 40, size: 16 },
  { id: "n2", x: 95, y: 35, size: 18 },
  { id: "n3", x: 165, y: 45, size: 16 },

  { id: "n4", x: 45, y: 105, size: 15 },
  { id: "n5", x: 110, y: 105, size: 20 },
  { id: "n6", x: 175, y: 105, size: 16 },

  { id: "n7", x: 55, y: 170, size: 15 },
  { id: "n8", x: 120, y: 170, size: 18 },
  { id: "n9", x: 185, y: 170, size: 15 },

  { id: "n10", x: 80, y: 230, size: 16 },
  { id: "n11", x: 150, y: 230, size: 16 },
  { id: "n12", x: 205, y: 230, size: 14 },
];

export const oldConnections = [
  ["o1", "o2"],
  ["o2", "o3"],
  ["o3", "o4"],

  ["o2", "o5"],
  ["o3", "o6"],
  ["o4", "o7"],

  ["o5", "o6"],
  ["o6", "o7"],

  ["o5", "o8"],
  ["o6", "o9"],
  ["o6", "o10"],
  ["o7", "o11"],

  ["o8", "o9"],
  ["o9", "o10"],
  ["o10", "o11"],

  ["o9", "o12"],
  ["o10", "o12"],
  ["o6", "o12"],

  ["o2", "o6"],
  ["o3", "o7"],
];

export const newConnections = [
  ["n1", "n2"],
  ["n2", "n3"],

  ["n1", "n4"],
  ["n2", "n5"],
  ["n3", "n6"],

  ["n4", "n5"],
  ["n5", "n6"],

  ["n4", "n7"],
  ["n5", "n8"],
  ["n6", "n9"],

  ["n7", "n8"],
  ["n8", "n9"],

  ["n7", "n10"],
  ["n8", "n11"],
  ["n9", "n12"],

  ["n10", "n11"],
  ["n11", "n12"],

  ["n5", "n11"],
  ["n2", "n5"],
  ["n8", "n10"],
];

export const signalPaths = [
  {
    side: "old",
    from: "o1",
    to: "o2",
    duration: 1.2,
    delay: 0,
  },
  {
    side: "old",
    from: "o2",
    to: "o6",
    duration: 1.3,
    delay: 0.4,
  },
  {
    side: "old",
    from: "o6",
    to: "o10",
    duration: 1.3,
    delay: 0.8,
  },
  {
    side: "old",
    from: "o10",
    to: "o12",
    duration: 1.2,
    delay: 1.2,
  },

  {
    side: "new",
    from: "n2",
    to: "n5",
    duration: 1.2,
    delay: 0.2,
  },
  {
    side: "new",
    from: "n5",
    to: "n8",
    duration: 1.2,
    delay: 0.7,
  },
  {
    side: "new",
    from: "n8",
    to: "n11",
    duration: 1.2,
    delay: 1.1,
  },
  {
    side: "new",
    from: "n11",
    to: "n12",
    duration: 1.2,
    delay: 1.5,
  },
];