const chai = require('chai');
const chaiHttp = require('chai-http');
const homeRouter = require('./homeRouter');

chai.use(chaiHttp);
chai.should();

describe("the home router", () => {
    it("should return a status of 200", () => {
        chai.request(homeRouter)
        .get('/')
        .end((err, res) => {
            res.should.have.status(200)
        })
    })
})