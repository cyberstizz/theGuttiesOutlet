const chai = require('chai');
const chaiHttp = require('chai-http');
const homeRouter = require('./homeRouter');

chai.use(chaiHttp);
chai.should();