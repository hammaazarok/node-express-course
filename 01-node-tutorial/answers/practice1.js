const fs = require('fs');
const os = require('os');

const sentence = require('./practice2');

fs.writeFile('./content/practice.txt', sentence, () => {
  fs.writeFile(
    './content/practice.txt',
    os.userInfo().username,
    { flag: 'a' },
    () => {}
  );
});