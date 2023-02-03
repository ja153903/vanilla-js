/**
 * @param {any[]} arr
 * @param {number} depth
 * @returns {any[]}
 */
function flat(arr, depth = 1) {
  return arr.reduce((acc, item) => {
    if (Array.isArray(item) && depth > 0) {
      return [...acc, ...flat(item, depth - 1)]
    }

    return [...acc, item]
  }, [])
}

export { flat }
