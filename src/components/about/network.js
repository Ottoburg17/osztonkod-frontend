// Organic neural network
// x = horizontal (%)
// y = vertical (%)
// size = node diameter (px)

export const neurons = [
  // Top
  { id: 1, x: 20, y: 16, size: 8 },
  { id: 2, x: 31, y: 28, size: 10 },
  { id: 3, x: 44, y: 18, size: 13 },
  { id: 4, x: 58, y: 29, size: 9 },
  { id: 5, x: 71, y: 22, size: 10 },

  // Upper middle
  { id: 6, x: 17, y: 46, size: 9 },
  { id: 7, x: 34, y: 41, size: 12 },
  { id: 8, x: 47, y: 47, size: 16 }, // Main hub
  { id: 9, x: 65, y: 40, size: 11 },
  { id: 10, x: 78, y: 49, size: 10 },

  // Lower middle
  { id: 11, x: 28, y: 59, size: 10 },
  { id: 12, x: 43, y: 66, size: 13 },
  { id: 13, x: 59, y: 61, size: 14 },
  { id: 14, x: 74, y: 58, size: 10 },

  // Bottom
  { id: 15, x: 33, y: 81, size: 10 },
  { id: 16, x: 53, y: 89, size: 15 },
  { id: 17, x: 71, y: 78, size: 11 },
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