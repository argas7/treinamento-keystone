const keystone = require('keystone');

const Post = keystone.list('Posts');

module.exports = (req, res) => {
  Post.model.find((err, data) => {
    if (err) {
      res.status(500).send('DB Error');
    } else {
      res.send(data);
    }
  });
};
