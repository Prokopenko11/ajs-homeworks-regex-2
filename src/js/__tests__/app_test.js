import clearPhone from '../app';

test('testing clearPhone function', () => {
  const phone = '8 (927) 000-00-00';
  const expectedResult = '+79270000000';
  const result = clearPhone(phone);
  expect(result).toBe(expectedResult);
});

test('testing chinese number', () => {
  const chineseNumber = '+86 000 000 0000';
  const expectedResult = '+860000000000';
  const result = clearPhone(chineseNumber);
  expect(result).toBe(expectedResult);
});
