/* eslint-env jest */

const { add } = require('../../utils/add')

/**
 * add - number adding test
 */
describe('add - number adding test', () => {
  const testCases = [
    {
      caseNo: 1,
      description: 'when number have 1 and 2, then adding result is 3',
      number1: 1,
      number2: 2,
      expected: 4
    }
  ]

  it.each(testCases)('case $caseNo: $description', async ({ number1, number2, expected }) => {
    const result = add(number1, number2)

    expect(result).toEqual(expected)
  })
})
