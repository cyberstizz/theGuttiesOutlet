const chai = require('chai');
const chaiHttp = require('chai-http');
const productsRouter = require('./productsRouter');

chai.use(chaiHttp);
chai.should();

describe("the product router", () => {
    it("should return a status of 200", () 