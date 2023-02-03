/**
 * Simple implementation for binary search
 *
 * @param {number[]} nums
 * @param {number} target
 * @param {number | undefined} start
 * @param {number | undefined} end
 * @returns {number}
 */
export function binarySearch(nums, target, start = 0, end = nums.length - 1) {
  let left = start
  let right = end

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2)
    if (nums[mid] === target) {
      return mid
    } else if (nums[mid] < target) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }

  return -1
}

/**
 * Binary search implementation where we return the point of insertion
 * into the array
 *
 * @param {number[]} nums
 * @param {number} target
 * @returns {number}
 */
export function findInsertionPoint(nums, target) {
  let left = 0
  let right = nums.length

  while (left < right) {
    const mid = left + Math.floor((right - left) / 2)

    if (nums[mid] < target) {
      left = mid + 1
    } else {
      right = mid
    }
  }

  return left
}
