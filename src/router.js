
import VueRouter from 'vue-router'

// 导入acount和goodslist组件
import acount from './main/acount.vue'
import goodslist from './main/goodslist.vue'
import Login from './subcom/login.vue'
import register from './subcom/register.vue'
var router = new VueRouter({
    routes:[
        // acount goodslist
        { 
          path:'/acount',
          component:acount,
          children:[
              {path:'login',component:Login},
              {path:'register',component:register}
          ]
        },
        {path:'/goodslist',component:goodslist}
    ]
}) 

export default router  //向外暴露