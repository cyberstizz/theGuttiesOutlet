const chai = require('chai');
const chaiHttp = require('chai-http');
const productsRouter = require('./homeRouter');

chai.use(chaiHttp);
chai.should();