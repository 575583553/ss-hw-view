import Info from './seekInfo';

const mockInfo = [
  { Level: 2, info: 'book1' },
  { Level: 2, info: 'book2' },
  { Level: 4, info: 'unit' },
  { Level: 8, info: 'lesson' },
  { Level: 16, info: 'activity' },
];

const info = new Info(mockInfo);

test('should have a well working seekInfo function', () => {
  const result = info.seek(2);
  expect(result).toEqual([
    { Level: 2, info: 'book1' },
    { Level: 2, info: 'book2' },
  ]);
});

test('should have a well working book function', () => {
  const result = testSeekInfoCalledCorrectlyWith('book', 2);
  expect(result).toEqual([
    { Level: 2, info: 'book1' },
    { Level: 2, info: 'book2' },
  ]);
});

test('should have a well working unit function', () => {
  const result = testSeekInfoCalledCorrectlyWith('unit', 4);
  expect(result).toEqual([{ Level: 4, info: 'unit' }]);
});

test('should have a well working lesson function', () => {
  const result = testSeekInfoCalledCorrectlyWith('lesson', 8);
  expect(result).toEqual([{ Level: 8, info: 'lesson' }]);
});

test('should have a well working activity function', () => {
  const result = testSeekInfoCalledCorrectlyWith('activity', 16);
  expect(result).toEqual([{ Level: 16, info: 'activity' }]);
});

function testSeekInfoCalledCorrectlyWith(type, level) {
  const spySeek = jest.spyOn(info, 'seek');
  const result = info[type];
  expect(spySeek).toHaveBeenCalledWith(level);
  spySeek.mockRestore();
  return result;
}
