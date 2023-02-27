/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNonDuplicate = function (nums) {
  // since this is sorted, we can use binary search
  let left = 0,
    right = nums.length - 1

  while (left < right) {
    const mid = Math.floor((left + right) / 2)
    if (
      (mid % 2 === 1 && nums[mid - 1] === nums[mid]) ||
      (mid % 2 === 0 && nums[mid] === nums[mid + 1])
    ) {
      left = mid + 1
    } else {
      right = mid
    }
  }

  return nums[left]
}

export { singleNonDuplicate }
