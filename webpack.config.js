var webpack = require('webpack');
var WebpackShellPlugin = require('webpack-shell-plugin');
var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
var path = require('path');
var env = require('yargs').argv.mode;

var libraryName = 'tutorial-content';

var plugins = [], outputFile;

plugins.push(new UglifyJsPlugin({ minimize: true }));
outputFile = libraryName + '.js';
plugins.push(new WebpackShellPlugin({
  onBuildEnd: ['node src/prepare-kirby.js', 'node src/copy-assets.js']
}));

let config = {
  entry: __dirname + '/src/index.js',
  output: {
    path: __dirname + '/lib',
    filename: outputFile,
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    loaders: [
      {
        test: /(\.jsx|\.js)$/,
        loader: 'babel',
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /(\.jsx|\.js)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      },
      { 
        test: /\.md$/, 
        loader: 'raw-loader'
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: 'url-loader?limit=100000'
      }
    ]
  },
  resolve: {
    root: path.resolve('./src'),
    extensions: ['', '.js']
  },
  plugins: plugins
};

module.exports = config;