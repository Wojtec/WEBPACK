const path = require('path');
const webpack = require('webpack');

module.exports = {

    entry: './src/main.js',

    output: {
        path: path.resolve(__dirname),
        filename: 'bundle.js'
    },

    plugins: [
        new webpack.ProvidePlugin({
             $: "jquery",
             jQuery: "jquery"
         })
    ],

    module:{
        rules:[
            {
            test: /\.s[ac]ss$/i,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader',
            ],
          },
          {
              test: /\.(png|jp(e*)g|svg)$/,
              use:[{
                  loader: 'url-loader',
                  options: {
                      limit: 10 * 8000,
                      name: 'assets/[hash]-[name].[ext]'
                  }
              }],
          },
        ],
    },

};
