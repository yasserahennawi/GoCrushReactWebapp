var path = require('path');

module.exports = {
  entry: path.join(process.cwd(), 'app/app.js'),
  output: {
    path: path.join(process.cwd(), 'app'),
    filename: 'build/bundle.js',
  },
  module: {
    loaders: [
      { 
        test: path.join(process.cwd(), 'app'),
        loader: 'babel-loader',
        query: {
          "plugins": [
            "transform-object-rest-spread",
          ],
          presets: [
            "react"
          ]
        }
      },
      {
        test: /\.html$/,
        loader: "raw-loader"
      }
    ]
  }
};