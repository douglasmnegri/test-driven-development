const calculator = require('../src/calculator');

test('Add two numbers', () => {
  expect(calculator.add(1, 2)).toBe(3);
  expect(calculator.add(-1, -2)).toBe(-3);
  expect(calculator.add(0, 0)).toBe(0);
});

test('Subtract two numbers', () => {
  expect(calculator.subtract(5, 3)).toBe(2);
  expect(calculator.subtract(-1, -2)).toBe(1);
  expect(calculator.subtract(0, 0)).toBe(0);
});

test('Multiply two numbers', () => {
  expect(calculator.multiply(2, 3)).toBe(6);
  expect(calculator.multiply(-2, 3)).toBe(-6);
  expect(calculator.multiply(0, 5)).toBe(0);
});

test('Divide two numbers', () => {
  expect(calculator.divide(6, 3)).toBe(2);
  expect(calculator.divide(-6, 3)).toBe(-2);
  expect(calculator.divide(0, 1)).toBe(0);
});

test('Divide by zero', () => {
  expect(() => calculator.divide(1, 0)).toThrow(); // Division by zero should throw an error
});
