const path=require('path')
// 1.导入html插件，得到一个构造函数
const HtmlPlugin=require('html-webpack-plugin')
// 2.创建html插件的实例对象
const htmlPlugin=new HtmlPlugin({
    // 指定源文件的存放路径
    template:'./src/index.html',
    // 指定生成文件的存放路径       
    filename:'./index.html',
})
const{CleanWebpackPlugin}=require('clean-webpack-plugin');
// 使用node.js中的到导出语法，向外到处一个webpack的配置对象
module.exports = {
    // mode代表webpack运行的模式，可选值有两个development(测试模式)和production(上线模式)
    mode: 'development',
    // 在开发调试jiedaun，建议大家都把devtool的值设置为eval-source-map
    devtool:'eval-source-map',
    // 在实际发布的时候，建议大家把devtool的值设置为nosources-source-map
    // devtool:'nosources-source-map',
    // devtool:'source-map',
    // entry: '指定要处理哪个文件'
    entry:path.join(__dirname, './src/index1.js'),
    // 指定生成的文件要存放到哪里
    output:{
        // 存放的目录
        path:path.join(__dirname,'dist'),
        // 生成的文件名
        filename:'js/bundle.js'
    },
     // 3.插件的数据，通过plugins节点，使htmlPlugin插件生效
     plugins:[htmlPlugin,new CleanWebpackPlugin()],
     devServer:{
        // 首次打包能自动打开浏览器
        open:true,
        // 在http协议中，如果端口是80，则可以省略
        port:80,
        // 指定运行的主机地址
        host:'127.0.0.1'
     },
     module:{
        rules:[
            // 定义了不同模块对应的loader
            {test:/\.css$/,use:['style-loader','css-loader']},
            // 处理.less文件的loader
            {test:/\.less$/,use:['style-loader','css-loader','less-loader']},
            // 处理img文件的loader
            // 如果需要调用的loader只有一个，则只需要传递一个字符串就可以了，如果有多个loader，则必须指定数组
            // 在配置yrl-lpader的时候，多个参数直接，使用&符号进行分隔
            {test:/\.jpg|png|gif$/,use:'url-loader?limit=22229&outputPath=images'},
            // 处理高级js
            // 在配置babel-loader的时候，程序员只需要将自己的代码转换就可以了，一定要排除node_modules下的js文件
            // 因为第三方包应该帮我解决兼容性问题了
            {test:/\.js$/,use:'babel-loader',exclude:/node_modules/}
        ]
     },
     resolve:{
        alias:{
            // 告诉webpack，程序员写的代码中，@符号表示src这一层目录
            '@':path.join(__dirname,'./src/')
        }
     }
}