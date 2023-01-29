/**
 * @param { (...args: any[]) => any } fn
 * @returns { (...args: any[]) => any }
 */
function curry(fn) {
  return function inner(...args) {
    // If there are enough args to satisfy what
    // the function expects, then we can just call
    // the function with the args
    if (args.length >= fn.length) {
      return fn(...args)
    }

    // In the case where it's not enough,
    // then we recursively wait until it does
    return (...otherArgs) => {
      return inner(...args, ...otherArgs)
    }
  }
}

module.exports = { curry }
