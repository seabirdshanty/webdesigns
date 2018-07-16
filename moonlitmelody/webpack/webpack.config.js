module.exports = {
  entry: './app.js',
  output: {
    path: __dirname + '',
    filename: 'bundle.min.js'
  },
  module: {
  	rules: [
  		{ test: /\.scss$/, use: [ 'style-loader', 'css-loader', 'sass-loader' ] },
  		{ test: /\.(svg|gif|png|jpg|jpeg|eot|woff|ttf)$/, use: [ 'url-loader' ] }
  	] // rules
	}
} // module.exports

