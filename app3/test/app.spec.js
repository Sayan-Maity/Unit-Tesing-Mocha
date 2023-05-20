const { add, sub } = require('../src/app');
const expect = require('chai').expect;

// BDD 
describe('Test 1)', () => {
    it('should return 5 upon add(2, 3)', () => {
        expect(add(2, 3)).to.be.equal(5);
    })
})

context('Test 2)', () => {
    specify('should return 6 upon add(3, 3)', () => {
        expect(add(3, 3)).to.be.equal(6);
    })
})

const { suite, test } = require('mocha');

// TDD 
suite('Test 3)', () => {
    test('should return 5 upon add(2, 3)', () => {
        expect(add(2, 3)).to.be.equal(5);
    })
})