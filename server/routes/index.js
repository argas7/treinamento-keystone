const path = require('path');
const cors = require('cors');

const postController = require('../controllers/postController');
const aboutUsController = require('../controllers/aboutUsController');

module.exports = (app) => {
  app.use(cors());

  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });

  app.get('/api/posts', postController);
  app.get('/api/about-us', aboutUsController);

  app.get('*', (req, res) => {
		res.redirect('/');
	});
};
