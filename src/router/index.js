import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../views/HomePage.vue'
import PinView from '../views/PinView.vue'
import ProfilePage from '../views/ProfilePage.Vue'
import QuadrantView from '../views/QuadrantView.vue'
import SignInPage from '../views/SignInPage.vue'
import SignUpPage from '../views/SignUpPage.vue'
import SupportPage from '../views/SupportPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/pins',
    name: 'pins',
    component: PinView
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfilePage
  },
  {
    path: '/quadrants',
    name: 'quadrants',
    component: QuadrantView
  },
  {
    path: '/sign-in',
    name: 'sign-in',
    component: SignInPage
  },
  {
    path: '/sign-up',
    name: 'sign-up',
    component: SignUpPage
  },
  {
    path: '/support',
    name: 'support',
    component: SupportPage
  }
]

const router = new VueRouter({
  routes
})

export default router
