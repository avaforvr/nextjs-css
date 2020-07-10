const path = require('path');
const genericNames = require('generic-names');

const generate = genericNames('[local]__[hash:base64:5]', {
    context: process.cwd()
});

const generateScopedName = (localName, filePath) => {
    var relativePath = path.relative(process.cwd(), filePath);
    return generate(localName, relativePath);
};
module.exports = generateScopedName;
