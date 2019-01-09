const path = require('path');

module.exports = {
  devtool: 'source-map',
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 4000
  },
  entry: {
    index: './src/components/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: './[name].js',
    libraryTarget: 'umd',
    publicPath: '/dist/',
    umdNamedDefine: true
  },
  externals: {
    react: {
      commonjs: "react",
      commonjs2: "react",
      amd: "React",
      root: "React"
    },
    "react-dom": {
      commonjs: "react-dom",
      commonjs2: "react-dom",
      amd: "ReactDOM",
      root: "ReactDOM"
    },
    "styled-components": {
      commonjs: "styled-components",
      commonjs2: "styled-components",
      amd: "StyledComponents",
      root: "StyledComponents"
    },
    "classnames": {
      commonjs: "classnames",
      commonjs2: "classnames",
      amd: "Classnames",
      root: "Classnames"
    }
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
      },
    }, ],
  },
};