import Vue from 'vue'
import VueRouter from "vue-router"
import App from './App.vue'
import Home from './components/Home'
import Admin from  './components/Admin'
import Header from  './components/Header'
import Login from  './components/Login'
import Menu from './components/Menu'
import Register from './components/Register'
import About from './components/about/About'


Vue.use(VueRouter)

const routes=[
  {path:"/",name:"homeLink",component:Home},
  {path:"/admin",name:"adminLink",component:Admin},
  {path:"/header",name:"headerLink",component:Header},
  {path:"/login",name:"loginLink",component:Login},
  {path:"/menu",name:"menuLink",component:Menu},
  {path:"/register",name:"registerLink",component:Register},
  {path:"/about",name:"aboutLink",component:About},
  {path:"*",redirect:"/"}

]
//输错链接，引导到主页
const router=new VueRouter({
  routes,
  mode:"history"
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
