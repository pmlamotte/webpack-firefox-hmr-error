const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
	entry: "./src/index.js",
	output: {
            path: path.resolve(__dirname, "dist"),
            filename: "[hash].[name].js"
        },
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NamedModulesPlugin(),
		new HtmlWebpackPlugin({
			template: "./src/index.html"
		}),
	],
	devServer: {
		hot: true,
		contentBase: "dist"
	},
	devtool: "eval"
};
