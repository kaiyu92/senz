process.env.NODE_ENV = 'test';

const expect = require('chai').expect;
const request = require('supertest');

const app = require('../../../index');
const conn = require('../../../db/index');

describe('Testing POST request for User', function() {
	before(function(done) {
		this.timeout(60000);
		conn.connect()
			.then(() => done())
			.catch((err) => done(err));
	});

	after(function(done) {
		conn.close()
			.then(() => done())
			.catch((err) => done(err));
	});

	it('Testing Successful Registration', function(done) {
		request(app).post('/register')
			.send({ user: 'john', 
				password: '123', 
				email: 'john@gmail.com',
				firstName: 'John',
				lastName: 'Doe'
			})
			.then((res) => {
				const body = res.body;
				expect(body.status).to.equal('success');
				done();
			})
			.catch((err) => done(err));
	});

	it('Testing Successful Login', function(done) {
		request(app).post('/login')
			.send({ identifier: 'john', 
				password: '123', 
			})
			.then((res) => {
				const body = res.body;
				expect(body.status).to.equal('success');
				done();
			})
			.catch((err) => done(err));
	});
})