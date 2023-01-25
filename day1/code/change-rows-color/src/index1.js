// 1.使用Es6导入语法，导入jQuery
import $ from "jquery"
// 导入样式 在webpack中一切皆模块，都可以通过es6导入语法进行导入和使用
import '@/css/index.css'
import '@/css/index.less'

// 导入 src/js/test/info.js
import '@/js/test/info.js'
// 1.导入图片，得到图片文件
import bg from '../images/bg.jpg'
// 2.给img标签的src动态赋值
$(".box").attr("src",bg)
// 2.定义jquery的入口函数
$(function(){
    // 3.实现奇偶行变色
    // 奇数变成红色
    $('li:odd').css('background-color','yellow')
    $('li:even').css('background-color','red')
});

// 定义一个装饰器函数
function info(target){
    target.info='Person info'
}
// 定义一个普通的类
@info
class Person{}
console.log(Person.info);