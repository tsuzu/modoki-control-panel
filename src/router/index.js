import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import Containers from '@/components/Containers'
import NotFound from '@/components/NotFound'
import NewContainer from '@/components/Containers/New'
import Setting from '@/components/Setting'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/containers/',
      name: 'containers',
      component: Containers
    },
    {
      path: '/containers/new',
      name: 'newContainer',
      component: NewContainer
    },
    {
      path: '/setting',
      name: 'setting',
      component: Setting
    },
    {
      path: '*',
      component: NotFound
    }
  ]
})
