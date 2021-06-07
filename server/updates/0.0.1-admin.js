const keystone = require('keystone');
const User = keystone.list('User');

exports = module.exports = (done) => {
	new User.model({
		name: 'Alyson Renan',
		email: 'alyson.renan@citi.org.br',
		password: 'admin123',
		canAccessKeystone: true,
	}).save(done);
};
