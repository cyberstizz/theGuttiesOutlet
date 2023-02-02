const chai = require('chai');
const chaiHttp = require('chai-http');
const productsRouter = require('./productsRouter');

chai.use(chaiHttp);
chai.should();