import chai from 'chai';
import chaiHttp from 'chai-http';
import homeRouter from './homeRouter';

chai.use(chaiHttp);
chai.should();

describe("the home router", () => {
    it("should return a status of 200")
})