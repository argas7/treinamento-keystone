const path = require('path');
const keystone = require('keystone');
const cors = require('cors');

const postController = require('../controllers/postController');
const AboutUs = keystone.list('AboutUs');

module.exports = (app) => {
  app.use(cors());

  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });

  app.get('/api/posts', postController);

  app.get('/api/about-us', (req, res) => {
    AboutUs.model.find((err, data) => {
      if (err) {
        res.status(500).send('DB Error');
      } else {
        res.send(data);
      }
    })
  });

  app.get('*', (req, res) => {
		res.redirect('/');
	});
};