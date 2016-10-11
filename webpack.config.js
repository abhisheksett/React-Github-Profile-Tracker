var path = require('path');

module.exports = {
  //entry: "app/components/main.js",
  entry: [__dirname, 'app', 'app.js'].join(path.sep),
  output: {
    filename: "public/bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ["react", "es2015"]
        }
      }
    ]
  }
};
