import Vue from 'vue'

import Vrouter from 'vue-router'

Vue.use(Vrouter)



export default new Vrouter({
    routes:[
      {path:'/',redirect: '/home'},
      {path:'/home',component:resolve=>{require(['@/page/home'],resolve)}},
      {path:'/personal',component:resolve=>{require(['@/page/personal'],resolve)}},
      {
        path:'/com',redirect:'/com/base',
        component:resolve=>{require(['@/page/com/comPage'],resolve)},
        children:[
          {path:'base',component:resolve=>{require(['@/page/com/base.vue'],resolve)}},
          {path:'son',component:resolve=>{require(['@/page/com/son.vue'],resolve)}},
          {path:'parent',component:resolve=>{require(['@/page/com/parent.vue'],resolve)}},
          {path:'is',component:resolve=>{require(['@/page/com/is.vue'],resolve)}},
          {path:'slot',component:resolve=>{require(['@/page/com/slot.vue'],resolve)}},
          {path:'slotName',component:resolve=>{require(['@/page/com/slotName.vue'],resolve)}}
        ]   
      },
      {
        path:'/router',
        component:resolve=>{require(['@/page/router/route'],resolve)},
        children:[
          {path:'route1/:id',component:resolve=>{require(['@/page/router/route1.vue'],resolve)}},
          {path:'route2',component:resolve=>{require(['@/page/router/route2.vue'],resolve)}},
        ]
      }
    ]
  })