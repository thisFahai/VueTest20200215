const path = require('path');

const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry:path.join(__dirname,'./src/main.js'),
    output:{
        path:path.join(__dirname,'./dist'),
        filename:'bundle.js'
    },
    plugins:[
        new htmlWebpackPlugin({
            template:path.join(__dirname,'./src/index.html'),
            filename:'index.html'
        })
    ],
    module:{
        rules:[
            {test:/\.css$/,use:['style-loader','css-loader']},
            {test:/\.(jpg|phg|gif|bmp|jpeg)$/,use:'url-loader?limit=38500&name=[hash:8]-[name].[ext]'},  //处理图片路径的loader
            //limit给定的值，是图片的大小，单位是字节byte，如果我们引用的图片，大于或等于给定的limit值，则会被转
            //为base64格式的字符串，如果图片小于给定的limit值，则不会被转为base64的字符串
            {test:/\.(ttf|eot|svg|woff|woff2)&/,use:'url-loader'}, //处理字体文件
            {test:/\.vue$/,use:'vue-loader'}, //处理.vue文件的配置
            {test:/\.js$/,use:'babel-loader',exclude:/node_modules/} //处理ES6高级语法
        ]
    },
    resolve:{
        alias:{ //第二种、修改vue被导入时候包的路径
            // "vue$":"vue/dist/vue.js"
        }
    }
}