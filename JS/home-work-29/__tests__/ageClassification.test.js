const { test, expect } = require('@jest/globals');
const ageClassification = require('../ageClassification');

test('Тест 1: приймає число менше нуля і повертає null', () => {
  expect(ageClassification(-1)).toBe(null);
});
test('Тест 2: приймає число 0 і повертає Дитинство', () => {
  expect(ageClassification(0)).toBe('Дитинство');
});
test('Тест 3: приймає число 24 і повертає Дитинство', () => {
  expect(ageClassification(24)).toBe('Дитинство');
});
test('Тест 4: приймає число 24.01 і повертає Молодість', () => {
  expect(ageClassification(24.01)).toBe('Молодість');
});
test('Тест 5: приймає число 44 і повертає Молодість', () => {
  expect(ageClassification(44)).toBe('Молодість');
});
test('Тест 6: приймає число 44.01 і повертає Молодість', () => {
  expect(ageClassification(44.01)).toBe('Зрілість');
});
test('Тест 7: приймає число 65 і повертає Молодість', () => {
  expect(ageClassification(65)).toBe('Зрілість');
});
test('Тест 8: приймає число 65.1 і повертає Молодість', () => {
  expect(ageClassification(65.1)).toBe('Старість');
});
test('Тест 9: приймає число 75 і повертає Молодість', () => {
  expect(ageClassification(75)).toBe('Старість');
});
test('Тест 10: приймає число 75.01 і повертає Молодість', () => {
  expect(ageClassification(75.01)).toBe('Довголіття');
});
test('Тест 11: приймає число 90 і повертає Молодість', () => {
  expect(ageClassification(90)).toBe('Довголіття');
});
test('Тест 12: приймає число 90.01 і повертає Молодість', () => {
  expect(ageClassification(90.01)).toBe('Рекорд');
});
test('Тест 13: приймає число 122 і повертає Молодість', () => {
  expect(ageClassification(122)).toBe('Рекорд');
});
test('Тест 14: приймає число 122.01 і повертає Молодість', () => {
  expect(ageClassification(122.01)).toBe(null);
});
test('Тест 15: приймає число 150 і повертає Молодість', () => {
  expect(ageClassification(122.01)).toBe(null);
});
