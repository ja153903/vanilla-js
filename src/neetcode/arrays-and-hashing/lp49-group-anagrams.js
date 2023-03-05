/**
 * @param {string[]} strs
 * @returns {string[][]}
 */
const groupAnagrams = function (strs) {
  const groups = new Map()

  for (const s of strs) {
    const sorted = s.split('').sort().join('')
    if (!groups.has(sorted)) {
      groups.set(sorted, [])
    }

    groups.get(sorted)?.push(s)
  }

  return [...groups.values()]
}

export { groupAnagrams }
