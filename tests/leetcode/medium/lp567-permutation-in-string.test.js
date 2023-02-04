import { checkInclusion } from '@/leetcode/medium/lp567-permutation-in-string'

describe('Permutation in String', () => {
  it('should pass the sample case', () => {
    const s1 = 'ab'
    const s2 = 'eidbaooo'

    expect(checkInclusion(s1, s2)).toBe(true)
  })

  it('should pass another sample case', () => {
    const s1 = 'ab'
    const s2 = 'eidboaoo'

    expect(checkInclusion(s1, s2)).toBe(false)
  })

  itk('should pass another case', () => {
    const s1 = 'adc'
    const s2 = 'dcda'

    expect(checkInclusion(s1, s2)).toBe(true)
  })
})
