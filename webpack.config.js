module.exports = {
    entry: './src/app.ts', // from where start
    output: {
        filename: 'app.js',
        path: __dirname + './dist' // __dirname is global variable pointing to current location
    },
    resolve: {
        extensions: ['.ts', '.js'] // what to resolve
    },
    module: {
        rules: [
          { test: /\.ts$/, use: 'awesome-typescript-loader' } // automaticly use tsconfig
        ]
    },
    devServer: {
        port: 3000,
    },
};