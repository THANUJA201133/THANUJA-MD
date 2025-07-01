const fs = require('fs');

const uploadFile = (filePath) => {
  if (fs.existsSync(filePath)) {
    return `https://yourserver.com/uploads/${filePath.split('/').pop()}`;
  } else {
    return 'File not found';
  }
};

module.exports = { uploadFile };
