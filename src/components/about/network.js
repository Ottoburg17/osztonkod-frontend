// Organic neural network
// x = horizontal (%)
// y = vertical (%)
// size = node diameter (px)

export const neurons = [
  // Top
  { id: 2, x: 25, y: 18, size: 3 },
  { id: 3, x: 36, y: 32, size: 12 },
  { id: 4, x: 48, y: 27, size: 10 },
  { id: 5, x: 64, y: 37, size: 11 },
  { id: 6, x: 79, y: 34, size: 13 },

  // Upper middle
  { id: 7, x: 27, y: 46, size: 9 },
  { id: 8, x: 49, y: 41, size: 12 },
  { id: 9, x: 42, y: 47, size: 16 }, // Main hub
  { id: 10, x: 75, y: 40, size: 11 },
  { id: 11, x: 79, y: 49, size: 10 },

  // Lower middle
  { id: 12, x: 38, y: 79, size: 22 },
  { id: 13, x: 43, y: 86, size: 12 },
  { id: 14, x: 59, y: 71, size: 18 },
  { id: 15, x: 74, y: 78, size: 16 },

  // Bottom
  { id: 16, x: 43, y: 86, size: 10 },
  { id: 17, x: 66, y: 88, size: 15 },
  { id: 18, x: 78, y: 80, size: 11 },
];

export const connections = [
  // Top
  [1, 2],
  [1, 6],

  [2, 3],
  [2, 7],
  [2, 8],

  [3, 4],
  [3, 7],
  [3, 8],
  [3, 9],

  [4, 5],
  [4, 8],
  [4, 9],

  [5, 8],
  [5, 9],
  [5, 10],

  // Middle
  [6, 7],
  [6, 11],
  [6, 12],

  [7, 8],
  [7, 11],
  [7, 12],
  [7, 13],

  [8, 9],
  [8, 12],
  [8, 13],
  [8, 14],

  [9, 10],
  [9, 13],
  [9, 14],

  [10, 13],
  [10, 14],

  // Bottom
  [11, 12],
  [11, 15],
  [11, 16],

  [12, 13],
  [12, 15],
  [12, 16],

  [13, 14],
  [13, 16],
  [13, 17],

  [14, 17],

  [15, 16],
  [16, 17],

  // Long organic links
  [2, 8],
  [3, 9],
  [6, 12],
  [7, 13],
  [8, 14],
  [11, 16],
];