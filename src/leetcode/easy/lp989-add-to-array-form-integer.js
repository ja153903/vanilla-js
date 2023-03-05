/**
 * A reason this could fail is because of overflow.
 * So we have to use BigInt here.
 *
 * @param {number[]} num
 * @param {number} k
 * @returns {number[]}
 */
const addToArrayForm = function (num, k) {
  const asNum = BigInt(num.map((n) => n.toString()).join(''))
  return (asNum + BigInt(k))
    .toString()
    .split('')
    .map((n) => parseInt(n))
}

export { addToArrayForm }
