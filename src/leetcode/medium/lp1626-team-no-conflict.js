/**
 * This problem uses a variant of LIS
 *
 * @param {number[]} scores
 * @param {number[]} ages
 * @returns {number}
 */
export const bestTeamScore = function (scores, ages) {
  const data = scores.map((score, index) => ({ score, age: ages[index] }))

  data.sort((a, b) => {
    if (a.age === b.age) {
      return a.score - b.score
    }
    return a.age - b.age
  })

  const dp = new Array(data.length)
    .fill(0)
    .map((_value, index) => data[index].score)

  for (let i = 1; i < data.length; i++) {
    for (let j = 0; j < i; j++) {
      if (data[i].age >= data[j].age && data[i].score >= data[j].score) {
        dp[i] = Math.max(dp[i], dp[j] + data[i].score)
      }
    }
  }

  return Math.max(...dp)
}
