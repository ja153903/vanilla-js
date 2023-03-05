const DIRECTIONS = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
]

/**
 * @param {number[][]} grid
 * @returns {number}
 */
const maxDistance = function (grid) {
  // We want to create a queue of all the land cells and the current number
  // of edges it has taken so far.
  // we also want to memoize part of the grid

  /** @type {{x: number, y: number}[]} */
  const queue = []

  /** @type {Set<string>} */
  const visited = new Set()

  const rows = grid.length
  const cols = grid[0].length

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (grid[row][col] === 1) {
        queue.push({ x: row, y: col })
        visited.add(`${row},${col}`)
      }
    }
  }

  if (queue.length === 0 || queue.length === rows * cols) {
    return -1
  }

  let max = -1

  while (queue.length > 0) {
    const size = queue.length
    for (let i = 0; i < size; i++) {
      const { x, y } = queue.shift()

      for (const [dx, dy] of DIRECTIONS) {
        const [nx, ny] = [x + dx, y + dy]
        if (
          nx >= 0 &&
          nx < rows &&
          ny >= 0 &&
          ny < cols &&
          !visited.has(`${nx},${ny}`)
        ) {
          visited.add(`${nx},${ny}`)
          queue.push({ x: nx, y: ny })
        }
      }
    }
    max++
  }

  return max
}

export { maxDistance }
