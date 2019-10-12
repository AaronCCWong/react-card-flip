var path = require('path');
var webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: './example/App.tsx',
  devtool: 'eval-source-map',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './example/build')
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js|\.tsx|\.ts)$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader'
          }
        ]
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, './example')
  },
  resolve: {
    alias: {
      'react-card-flip': path.resolve(__dirname, './src/ReactCardFlip')
    },
    extensions: ['.js', '.jsx', 'tsx', 'ts']
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  plugins: [new webpack.LoaderOptionsPlugin({ debug: true })]
};
