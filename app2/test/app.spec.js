const { User } = require('../src/app');
const axios = require('axios');
const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const expect = chai.expect;
chai.use(sinonChai);

describe('the User Class', () => {
    it('should get the user id', (done) => {
        const user = new User('sayan-maity');
        const getStub = sinon.stub(axios, 'get').resolves({ data: { id: 89021746 }});
        user.getUserId()
        .then(result => {
            expect(result).to.be.a('number');
            expect(result).to.equal(89021746);
            expect(getStub).to.have.been.calledOnce;
            expect(getStub).to.have.been.calledWith('https://api.github.com/users/sayan-maity');
            done();
        })
        .catch(done);
    })
})