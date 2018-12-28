import Vue from 'vue'
import Router from 'vue-router'
import Chat from '@/components/chat'
import { store } from '../store'
import SignUp from '@/components/Authentication/signup'
import SignIn from '@/components/Authentication/signin'
import authCheck from '../middleware/authCheck'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Chat',
      component: Chat,
      beforeEnter (to, from, next) {
        authCheck(store, next, to)
        next()
      }
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/signin',
      name: 'SignIn',
      component: SignIn
    }
  ]
})
