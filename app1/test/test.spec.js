const assert = require('assert');
const { add, sub } = require('../src/app');
const { expect } = require('chai');

describe('the add function ', () => {
    it('should add 2 numbers', () => {
        // assert.equal(add(2, 3), 5);
        const result = add(2, 3);
        // assert.equal(result, 5);
        expect(result).to.be.equal(5);
    })
    it('should able to handle 1 number', () => {
        const result = add(2);
        expect(result).to.be.equal(2);
    })
    it('should able to handle 0 number', () => {
        const result = add();
        expect(result).to.be.equal(0);
    })
    it('should return 0 if either argument is not a function', () => {
        const result = add(2, 'test');
        expect(result).to.be.equal(0);
    })
})
describe('the sub function ', () => {
    it('should sub 2 numbers', () => {
        // assert.equal(sub(2, 3), 5);
        const result = sub(2, 3);
        expect(result).to.be.equal(-1);
    })
    it('should able to handle 1 number', () => {
        const result = sub(2);
        expect(result).to.be.equal(2);
    })
    it('should able to handle 0 number', () => {
        const result = sub();
        expect(result).to.be.equal(0);
    })
    it('should return 0 if either argument is not a function', () => {
        const result = sub(2, 'test');
        expect(result).to.be.equal(0);
    })
})