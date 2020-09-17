/*=========================================================================================
  File Name: router.js
  Description: Routes for vue-router. Lazy loading is enabled.
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior () {
    return { x: 0, y: 0 }
  },
  routes: [

    {
    // =============================================================================
    // MAIN LAYOUT ROUTES
    // =============================================================================
      path: '',
      component: () => import('./layouts/main/Main.vue'),
      children: [
        // =============================================================================
        // Theme Routes
        // =============================================================================
        {
          path: '/',
          name: 'home',
          component: () => import('./views/Home.vue')
        },
        {
          path: '/pricing',
          name: 'pricing',
          component: () => import('./views/Pricing.vue')
        },
        {
          path: '/faq',
          name: 'FAQ',
          component: () => import('./views/Faq.vue')
        },
        {
          path: '/aboutus',
          name: 'AboutUs',
          component: () => import('./views/AboutUs.vue')
        },
        {
          path: '/page2',
          name: 'page-2',
          component: () => import('./views/Page2.vue')
        },
        {
          path: '/product',
          name: 'Product',
          component: () => import('./views/Product.vue')
        }
      ]
    },
    {
    // =============================================================================
    // MAIN LAYOUT ROUTES WHEN USERS LOGS IN
    // =============================================================================
      path: '',
      component: () => import('./layouts/main/UserPage.vue'),
      children: [
        // =============================================================================
        // Theme Routes
        // =============================================================================
        {
          path: '/dashboard',
          name: 'DashBoard',
          component: () => import('./views/DashBoard.vue'),
          meta: {
            rule: 'user'
          }
        },
        {
          path: '/billing',
          name: 'Billing',
          component: () => import('./views/Billing.vue'),
          meta: {
            rule: 'user'
          }
        },
        {
          path: '/profile',
          name: 'Profile',
          component: () => import('./views/Profile.vue'),
          meta: {
            rule: 'user'
          }
        }
      ]
    },
    // =============================================================================
    // FULL PAGE LAYOUTS
    // =============================================================================
    {
      path: '',
      component: () => import('@/layouts/full-page/FullPage.vue'),
      children: [
        // =============================================================================
        // PAGES
        // =============================================================================
        {
          path: '/pages/login',
          name: 'page-login',
          component: () => import('@/views/pages/Login.vue'),
          meta: {
            rule: 'req'
          }
        },
        {
          path: '/pages/register',
          name: 'page-register',
          component: () => import('@/views/pages/Register.vue'),
          meta: {
            rule: 'req'
          }
        },
        {
          path: '/pages/error-404',
          name: 'page-error-404',
          component: () => import('@/views/pages/Error404.vue'),
          meta: {
            rule: 'req'
          }
        }
      ]
    },
    // Redirect to 404 page, if no match found
    {
      path: '*',
      redirect: '/pages/error-404'
    }
  ]
})

router.afterEach(() => {
  // Remove initial loading
  const appLoading = document.getElementById('loading-bg')
  if (appLoading) {
    appLoading.style.display = 'none'
  }
})

router.beforeEach((to, from, next) => {
  const Idtoken = localStorage.getItem('IdToken')
  if (to.meta && to.meta.rule === 'req') return next()
  if (!Idtoken && to.meta && to.meta.rule === 'user' ) {
    return next('/')
  }

  if (Idtoken && (!to.meta || to.meta.rule !== 'user')) {
    return next('/dashboard')
  }
  
  return next()
})

export default router
