// "dev": "webpack-dev-server --open --port 3000 --contentBase src --hot",

// 由于webpack是基于nodejs构建的，所以webpack的配置文件中，任何合法的nodejs代码都是支持的
const path = require('path');

// 在内存中根据指定的模板页面，生成一份内存中的首页，同时把打包好的bundle自动注入到页面底部
// 如果要配置插件，需要在导出的对象中，挂载一个plugin节点
var  htmlWebpackPlugin = require('html-webpack-plugin')

const VueLoaderPlugin = require('vue-loader/lib/plugin');

// 当以命令形式运行 webpack或webpack-dev-server的时候，工具如果发现我们并没有提供 
// 要打包的入口文件路径 和出口文件路径，此时他会检查项目根目录配置文件，并读取这个文件 ，
// 就拿到了导出这个配置对象，然后根据这个对象，进行打包构建
module.exports = {
    mode: 'development',
    entry: path.join(__dirname,'/src/main.js'), // __dirname 直接指定项目根路径，所以后面就不需要用“./path1/path2”形式指定文件路径
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js' //指定输出文件的名称
    },
    plugins:[ // 所有webpack插件的配置节点
       new htmlWebpackPlugin({
            template: path.join(__dirname,'src/index.html'), //指定要挂载的文件路径
            filename:'index.html',  // 设置生成的内存页面名称
            inject: 'body'
       }),
       new VueLoaderPlugin()
    ],
    module:{ // 匹配所有第三方loader的
       rules:[  // 第三方模块匹配规则
        // 处理css文件的loader
        {test:/\.css$/, use:['style-loader','css-loader']}, 
        // 处理less文件的loader
        {test:/\.less$/, use:['style-loader','css-loader','less-loader']}, 
        // 处理sass文件的loader
        {test:/\.scss$/, use:['style-loader','css-loader','sass-loader']},
        // 处理图片路径的url loader
        {test:/\.(jpg|png|gif|bmp|jpeg|ttf)$/, 
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 1024,
                    name: '[name]-aaa.[ext]',
                    esModule: false, // 这里设置为false
                }
            }]
        },
        // 配置babel来转换高级的ES语法  
        { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/},
        { test: /.vue$/,loader: 'vue-loader' }
       ]
    },
    resolve:{
        alias:{
            
        }
    },
    devServer: {
        host: '192.168.31.225',
        port: '8899',
        contentBase: path.join(__dirname, 'dist'), // boolean | string | array, static file location
        compress: true, // enable gzip compression
        hot: true, // hot module replacement. Depends on HotModuleReplacementPlugin
        // ...
    }
}


// 通过Babel ，可以帮我们将 高级的语法 转换为 低级的语法
// 1、在webpack中，可以运行如下两套 命令，安装两套包，去安装Babel 相关的的loader功能