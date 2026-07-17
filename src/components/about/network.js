export const oldNodes = [
  { id: "o1", x: 28, y: 28, size: 14 },
  { id: "o2", x: 78, y: 58, size: 16 },
  { id: "o3", x: 142, y: 38, size: 18 },
  { id: "o4", x: 192, y: 68, size: 15 },

  { id: "o5", x: 42, y: 118, size: 15 },
  { id: "o6", x: 105, y: 108, size: 20 },
  { id: "o7", x: 176, y: 128, size: 16 },

  { id: "o8", x: 22, y: 190, size: 14 },
  { id: "o9", x: 82, y: 176, size: 15 },
  { id: "o10", x: 148, y: 194, size: 18 },
  { id: "o11", x: 205, y: 170, size: 15 },

  { id: "o12", x: 118, y: 242, size: 16 },
];

export const newNodes = [
  { id: "n1", x: 35, y: 35, size: 15 },
  { id: "n2", x: 92, y: 28, size: 18 },
  { id: "n3", x: 160, y: 42, size: 16 },

  { id: "n4", x: 48, y: 102, size: 15 },
  { id: "n5", x: 112, y: 98, size: 20 },
  { id: "n6", x: 178, y: 108, size: 16 },

  { id: "n7", x: 60, y: 170, size: 15 },
  { id: "n8", x: 118, y: 165, size: 18 },
  { id: "n9", x: 188, y: 170, size: 15 },

  { id: "n10", x: 82, y: 228, size: 16 },
  { id: "n11", x: 148, y: 226, size: 17 },
  { id: "n12", x: 210, y: 220, size: 14 },
];

export const oldConnections = [
  ["o1", "o2"],
  ["o1", "o5"],

  ["o2", "o3"],
  ["o2", "o5"],
  ["o2", "o6"],

  ["o3", "o4"],
  ["o3", "o6"],
  ["o3", "o7"],

  ["o4", "o7"],

  ["o5", "o6"],
  ["o5", "o8"],
  ["o5", "o9"],

  ["o6", "o7"],
  ["o6", "o9"],
  ["o6", "o10"],

  ["o7", "o10"],
  ["o7", "o11"],

  ["o8", "o9"],

  ["o9", "o10"],
  ["o9", "o12"],

  ["o10", "o11"],
  ["o10", "o12"],

  ["o11", "o12"],
];

export const newConnections = [
  ["n1", "n2"],
  ["n1", "n4"],

  ["n2", "n3"],
  ["n2", "n5"],

  ["n3", "n6"],

  ["n4", "n5"],
  ["n4", "n7"],

  ["n5", "n6"],
  ["n5", "n8"],

  ["n6", "n9"],

  ["n7", "n8"],
  ["n7", "n10"],

  ["n8", "n9"],
  ["n8", "n11"],

  ["n9", "n12"],

  ["n10", "n11"],

  ["n11", "n12"],

  ["n5", "n11"],
  ["n2", "n6"],
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
    duration: 1.2,
    delay: 0.35,
  },
  {
    side: "old",
    from: "o6",
    to: "o10",
    duration: 1.2,
    delay: 0.7,
  },
  {
    side: "old",
    from: "o10",
    to: "o12",
    duration: 1.2,
    delay: 1.05,
  },

  {
    side: "new",
    from: "n2",
    to: "n5",
    duration: 1.2,
    delay: 0.15,
  },
  {
    side: "new",
    from: "n5",
    to: "n8",
    duration: 1.2,
    delay: 0.5,
  },
  {
    side: "new",
    from: "n8",
    to: "n11",
    duration: 1.2,
    delay: 0.85,
  },
  {
    side: "new",
    from: "n11",
    to: "n12",
    duration: 1.2,
    delay: 1.2,
  },
];