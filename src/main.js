//这是入口文件
console.log('ok')

//如何在webpack构建的项目中，使用vue进行开发


//复习：在普通网页中如何使用vue：
// 1、使用script标签引入vue的包
// 2、创建一个id为app的div容器，在index页面中
// 3、通过new Vue得到一个vm的实例

// 在webpack中尝试使用Vue：
// 在webpack中，使用import Vue from 'vue'导入的vue构造函数，功能不完整，只提供了runtime-only的方式，并没有提供像网页中那样的使用方式
// import Vue from 'vue'
import Vue from '../node_modules/vue/dist/vue.js'
// 第一种可以这样导入包，或者第三种修改package.json的main属性的值
// 包的查找规则：
// 1、找项目跟目录中有没有node_modules的文件夹
// 2、在node_modules中根据包名，找对应的vue文件夹
// 3、在vue文件夹中，找一个叫做package.json的包配置文件
// 4、在package.json文件中，查找一个main属性【main属性指定了这个包在被加载的时候，的入口文件】

// var login = {
//     template:'<h1>这是一个login组件</h1>'
// }

import login from './login.vue'
// 默认，webpack无法打包 .vue文件，需要安装相关loader
// cnpm i vue-loader vue-template-compiler -D
// 在配置文件中，新增loader配置项{test:/\.vue$/,use:'vue-loader'}

// 导入App组件
import App from './App.vue'
// 1、导入vue-router
import VueRouter from 'vue-router'
// 2、手动安装VueRouter
Vue.use(VueRouter)
// 3、创建一个路由对象

// 自定义路由模块
import router from './router.js'


var vm = new Vue({
    el:'#app',
    data:{
        msg:'这是一个vue组件'
    },
    // render:function(createElements){}
    render:(createElements) =>{ //在webpack中，如果想要通过vue，把一个组件放到页面中去展示，vm实例中的render函数可以实现
        return createElements(App);
    },
    router //4、将路由对象挂载到vm实例身上
})


//总结，webpack中如何使用vue
// 1、安装vue的包 npm i vue -S
// 2、由于在webpack中推荐使用.vue这个组件模板文件定义组件，所以需要安装能解析这种文件的loader
// npm i vue-loader vue-template-compiler -D
// 3、在main.js中导入vue模块，import Vue from 'vue' 
// 4、定义一个.vue结尾的组件，其中，组件由三个部分组成：template script style 
// 5、使用import导入这个组件
// 6、创建vm的实例  var vm = new Vue({el:'#app',data:{},render:(creatElement)=>{return creatElement(login)}})
// 7、在页面中创建一个id为app的div元素，作为我们vm实例要控制的区域


// 测试
// import m1,{title,content} from './test.js'
// console.log(m1);
// console.log(title + '---------------' + content);


//=================================================================================
