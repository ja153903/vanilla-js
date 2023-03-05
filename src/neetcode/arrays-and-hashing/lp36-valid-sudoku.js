/**
 * @param {character[][]} board
 * @returns {boolean}
 */
const isValidSudoku = function (board) {
  const seen = new Set()

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] !== '.') {
        const row = `row ${i} has value ${board[i][j]}`
        const col = `col ${j} has value ${board[i][j]}`
        const box = `box ${Math.floor(i / 3)},${Math.floor(j / 3)} has value ${
          board[i][j]
        }`

        if ([row, col, box].some((hash) => seen.has(hash))) {
          return false
        }

        ;[row, col, box].forEach((hash) => seen.add(hash))
      }
    }
  }

  return true
}

export { isValidSudoku }
