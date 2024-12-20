const { test, expect } = require('@jest/globals');
const weekFn = require('../weekFn');

test('Тест 1: Приймає число 1 і повертає Понеділок', () => {
  expect(weekFn(1)).toBe('Понеділок');
});
test('Тест 2: Приймає число 3 і повертає Середа', () => {
  expect(weekFn(3)).toBe('Середа');
});
test('Тест 3: Приймає число 7 і повертає Неділя', () => {
  expect(weekFn(7)).toBe('Неділя');
});
test('Тест 4: Приймає число 9 і повертає null', () => {
  expect(weekFn(9)).toBe(null);
});
test('Тест 5: Приймає число 1.5 і повертає null', () => {
  expect(weekFn(1.5)).toBe(null);
});
test("Тест 6: Приймає строку '2' і повертає null", () => {
  expect(weekFn('2')).toBe(null);
});
