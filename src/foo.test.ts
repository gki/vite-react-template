import { addOne } from './foo';

describe('sample test', () => {
  test('addOne returns a number added one', () => {
    expect(addOne(1)).toBe(2);
  });
});
