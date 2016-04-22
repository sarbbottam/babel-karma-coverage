import double from '../src/index.js';

describe('double', () => {
  it('should return double', () => {
    assert.deepEqual(double(1, 2, 3, 4, 5), [2, 4, 6, 8, 10]);
  });
})
