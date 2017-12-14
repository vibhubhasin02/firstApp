module.exports = {
    entry: "./App.jsx",
    output: {
        filename: "public/bundle.js"
    },
    module: {
        loaders: [
            {test: /\.jsx$/, loader: 'jsx-loader'},
            {
                test : /\.jsx?$/,
                exclude : /node_modules/,
                loader : 'babel-loader'
            }
        ]
    }
};