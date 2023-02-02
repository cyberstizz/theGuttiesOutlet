import chai from 'chai';
import chaiHttp from 'chai-http';
import homeRouter from './homeRouter';

chai.use(chaiHttp);
chai.should();