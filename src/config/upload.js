const multer = require('multer');
const path = require('path');

module.exports = {
  // eslint-disable-next-line new-cap
  storage: new multer.diskStorage({
    destination: path.resolve(__dirname, '..', '..', 'uploads'),
    filename(request, file, callback) {
      callback(null, file.originalname);
    },
  }),
};
