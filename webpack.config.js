// webpack.config.js
const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/alerthub.js', // Replace with your entry file
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'), // Output directory
    },
};