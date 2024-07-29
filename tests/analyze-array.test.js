const analyzeArray = require('../src/analyze-array');

test("Analyze the min, max, average and length of the array", () => {
    expect(analyzeArray([1, 2, 4, 5, 10])).toEqual({ average: 4.4, min: 1, max: 10, length: 5 })
})