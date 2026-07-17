export const oldNodes = [
  { id: "o1", x: 40, y: 40, size: 16 },
  { id: "o2", x: 120, y: 70, size: 18 },
  { id: "o3", x: 80, y: 140, size: 16 },
  { id: "o4", x: 170, y: 160, size: 18 },
  { id: "o5", x: 180, y: 50, size: 16 },
  { id: "o6", x: 35, y: 180, size: 15 },
  { id: "o7", x: 145, y: 115, size: 15 },
  { id: "o8", x: 90, y: 210, size: 14 },
];

export const newNodes = [
  { id: "n1", x: 35, y: 60, size: 18 },
  { id: "n2", x: 110, y: 30, size: 16 },
  { id: "n3", x: 160, y: 90, size: 18 },
  { id: "n4", x: 60, y: 170, size: 16 },
  { id: "n5", x: 160, y: 180, size: 16 },
  { id: "n6", x: 110, y: 120, size: 18 },
  { id: "n7", x: 175, y: 60, size: 15 },
  { id: "n8", x: 175, y: 210, size: 14 },
];

export const oldConnections = [
  ["o1", "o2"],
  ["o2", "o5"],
  ["o2", "o7"],
  ["o7", "o4"],
  ["o7", "o3"],
  ["o3", "o6"],
  ["o6", "o8"],
  ["o3", "o8"],
  ["o5", "o4"],
];

export const newConnections = [
  ["n1", "n2"],
  ["n2", "n3"],
  ["n3", "n7"],
  ["n3", "n6"],
  ["n6", "n4"],
  ["n6", "n5"],
  ["n5", "n8"],
  ["n4", "n8"],
  ["n2", "n6"],
];
export const signalPaths = [
  {
    side: "old",
    from: "o1",
    to: "o2",
    duration: 1.4,
    delay: 0,
  },
  {
    side: "old",
    from: "o2",
    to: "o7",
    duration: 1.6,
    delay: 0.5,
  },
  {
    side: "old",
    from: "o7",
    to: "o4",
    duration: 1.5,
    delay: 1,
  },

  {
    side: "new",
    from: "n2",
    to: "n6",
    duration: 1.6,
    delay: 1.2,
  },
  {
    side: "new",
    from: "n6",
    to: "n5",
    duration: 1.5,
    delay: 1.8,
  },
  {
    side: "new",
    from: "n5",
    to: "n8",
    duration: 1.6,
    delay: 2.3,
  },
];

