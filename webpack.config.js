const path = require('path');

module.exports = {
  entry: './src/index.js', // Entry point of your JavaScript
  output: {
    filename: 'custom-script.js', // Output file
    path: path.resolve(__dirname, 'assets'), // Output path, Shopify uses 'assets' folder
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'], // To load CSS files
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // For transpiling JavaScript if needed
        },
      },
    ],
  },
  mode: 'production', // or 'development'
};
