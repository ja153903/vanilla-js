/**
 * @param {number[]} nums
 * @returns {number[]}
 */
const productExceptSelf = function (nums) {
  const result = new Array(nums.length).fill(1)

  for (let i = 1; i < nums.length; i++) {
    result[i] = result[i - 1] * nums[i - 1]
  }

  for (let i = nums.length - 1, right = 1; i >= 0; right *= nums[i], i--) {
    result[i] *= right
  }

  return result
}

export { productExceptSelf }
