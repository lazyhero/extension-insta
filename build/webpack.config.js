 var path = require('path')
 var utils = require('./utils')


 module.exports = {
     entry: {
         main: './src/main.js',
         tool: './src/vendor/tool.js',
         chromeapi: './src/vendor/chromeapi.js',
         check: './src/vendor/check.js'
     },
     output: {
         path: path.join(__dirname, "extension-bundle"),
         filename: "[name].js"
     },
     resolve: {
         extensions: ['', '.js', '.vue'],
         fallback: [path.join(__dirname, '../node_modules')],
         alias: {
             'vue$': 'vue/dist/vue',
             'src': path.resolve(__dirname, '../src'),
             'asset': path.resolve(__dirname, '../src/asset'),
             'component': path.resolve(__dirname, '../src/component')
         }
     },
     resolveLoader: {
         fallback: [path.join(__dirname, '../node_modules')]
     },
     module: {
         loaders: [
             {
                test: /\.vue$/,
                loader: 'vue'
            }, 
            {
                test: /\.js$/,
                loader: 'babel',
                include: projectRoot,
                exclude: /node_modules/
            },
            {
                test: /\.json$/,
                loader: 'json'  
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url',
                query: {
                limit: 10000,
                name: utils.assetsPath('image/[name].[ext]')
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url',
                query: {
                limit: 10000,
                name: utils.assetsPath('font/[name].[ext]')
                }
            }
        ]
     },
     vue: {
        loaders: utils.cssLoaders(),
        postcss: [
        require('autoprefixer')({
            browsers: ['last 2 versions']
        })
        ]
    }
 };