/**
 * @param {number[]} nums
 * @returns {number[]}
 */
const leftRigthDifference = function (nums) {
  const leftPrefixSums = new Array(nums.length).fill(0)
  const rightPrefixSum = new Array(nums.length).fill(0)

  for (let i = 1; i < nums.length; i++) {
    leftPrefixSums[i] = leftPrefixSums[i - 1] + nums[i - 1]
  }

  for (let i = nums.length - 2; i >= 0; i--) {
    rightPrefixSum[i] = rightPrefixSum[i + 1] + nums[i + 1]
  }

  const result = new Array(nums.length).fill(0)

  for (let i = 0; i < nums.length; i++) {
    result[i] = Math.abs(leftPrefixSums[i] - rightPrefixSum[i])
  }

  return result
}

export { leftRigthDifference }
