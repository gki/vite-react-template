import { addOne } from './foo';

describe('sample test', () => {
  it('addOne returns a number added one', () => {
    expect(addOne(1)).toBe(2);
  });
});
