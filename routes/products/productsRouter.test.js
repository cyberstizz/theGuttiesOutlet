const chai = require('chai');
const chaiHttp = require('chai-http');
const productsRouter = require('./productsRouter');

chai.use(chaiHttp);
chai.should();

describe("the product router", () => {
    it("should return a status of 200", () => {
        chai.request(productsRouter)
        .get('/3')
        .end((err, res) => {
            res.should.have.status(200)
        })
    })
})
