const keystone = require('keystone');
const AboutUs = keystone.list('AboutUs');

exports = module.exports = (done) => {
	new AboutUs.model({
		mission: 'Digite aqui a missão de sua empresa',
		vision: 'Digite aqui a visão de sua empresa',
		virtues: ['Valor X', 'Valor Y'],
	}).save(done);
};
