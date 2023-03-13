/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
const searchMatrix = function (matrix, target) {
  const rows = matrix.length
  const cols = matrix[0].length

  // binary search on the rows then on the cols once we find the appropriate one

  let rowLeft = 0
  let rowRight = rows - 1

  while (rowLeft <= rowRight) {
    const rowMid = rowLeft + Math.floor((rowRight - rowLeft) / 2)
    const currentRow = matrix[rowMid]

    const first = currentRow[0],
      last = currentRow.at(-1)

    if (first <= target && target <= last) {
      let colLeft = 0
      let colRight = cols - 1

      while (colLeft <= colRight) {
        const colMid = colLeft + Math.floor((colRight - colLeft) / 2)
        if (currentRow[colMid] === target) {
          return true
        } else if (currentRow[colMid] < target) {
          colLeft = colMid + 1
        } else {
          colRight = colMid - 1
        }
      }

      return false
    } else if (first > target) {
      rowRight = rowMid - 1
    } else {
      rowLeft = rowMid + 1
    }
  }

  return false
}

export { searchMatrix }
