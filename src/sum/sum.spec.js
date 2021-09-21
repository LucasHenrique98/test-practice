import sum from './sum';
import { expect } from 'chai';

describe('Sum function', () => {
  it('should be a function', () => {
    expect(sum).to.be.a('function');
  });

  it('sum(2,1) should return 3', () => {
    expect(sum(2, 1)).to.be.deep.equal(3);
  });

  it('sum() should throw an error', () => {
    expect(sum()).to.throw('expected NaN to be a function');
  });
});
