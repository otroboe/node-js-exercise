import jsonfile from 'jsonfile';

/**
 * @param {String} filePath
 * @returns {Promise}
 */
const parseFile = filePath => new Promise((resolve, reject) => {
  jsonfile.readFile(filePath, (err, data) => {
    if (err) {
      reject(err);
    }

    resolve(data);
  });
});

export {
  parseFile,
};
