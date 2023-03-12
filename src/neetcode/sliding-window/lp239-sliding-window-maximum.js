/**
 * @param {number[]} nums
 * @param {number} k
 * @returns {number[]}
 */
const maxSlidingWindow = function(nums, k) {
  // one naive way of solving this is to keep track of a window of size k
  // and just slide it through the array
  // let's think of a smarter way for optimizing this
  // we can still keep the idea of having a deque/queue
  // however we should think about pruning it as much as we can
  const result = []
  const deque = []

  for (let i = 0; i < nums.length; i++) {
    // remove items from the deque that are outside of the window
    while (deque.length > 0 && deque[0] < i - k + 1) {
      deque.shift()
    }

    // remove items from the list if they are less than the current element
    while (deque.length > 0 && nums[deque[deque.length - 1]] < nums[i]) {
      deque.pop()
    }

    deque.push(i)

    if (i - k + 1 >= 0) {
      result.push(nums[deque[0]])
    }
  }

  return result
}

export { maxSlidingWindow }
