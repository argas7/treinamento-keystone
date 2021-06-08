const keystone = require('keystone');

const AboutUs = keystone.list('Posts');

module.exports = (req, res) => {
  AboutUs.model.find((err, data) => {
    if (err) {
      res.status(500).send('DB Error');
    } else {
      res.send(data);
    }
  });
};
