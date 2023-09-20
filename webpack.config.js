const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
	entry: './src/index.tsx',
	mode: 'development',
	output: {
		publicPath: '/',
	},
	devServer: {
		static: path.join(__dirname, 'dist'),
		compress: true,
		port: 80,
		open: false,
		historyApiFallback: true,
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.jsx', '.scss'],
	},
	module: {
		rules: [
			{
				test: /\.(ts|js)x?$/,
				exclude: /node_modules/,
				use: {
					loader: 'ts-loader',
				},
			},
			{
				test: /\.html$/i,
				loader: 'html-loader',
			},
			{
				test: /\.scss$/,
				use: [
					{
						loader: 'style-loader',
					},
					{
						loader: 'css-loader',
					},
					{
						loader: 'sass-loader',
					},
				],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html',
		}),
	],
}
