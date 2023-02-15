/**
 * A reason this could fail is because of overflow.
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
const addToArrayForm = function (num, k) {
  const asNum = BigInt(num.map((n) => n.toString()).join(''))
  return (asNum + BigInt(k))
    .toString()
    .split('')
    .map((n) => parseInt(n))
}

export { addToArrayForm }
