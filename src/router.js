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
    {
      // =============================================================================
      // MAIN LAYOUT ROUTES WITH DOCUMENTATIONS
      // =============================================================================
      path: 'doc',
      component: () => import('./layouts/main/Doc.vue'),
      children: [
        // =============================================================================
        // Theme Routes
        // =============================================================================
        {
          path: '/doc',
          name: 'DocHome',
          component: () => import('./views/doc/Home.vue'),
          meta: {
            rule: 'req'
          }
        },
        {
          path: '/doc/bin-intel-api',
          name: 'doc-bin-intel-api',
          component: () => import('./views/doc/Home.vue'),
          meta: {
            rule: 'req'
          }
        },
        {
          path: '/doc/java-sdk',
          name: 'doc-java-sdk',
          component: () => import('./views/doc/Home.vue'),
          meta: {
            rule: 'req'
          }
        },
        {
          path: '/doc/csharp-sdk',
          name: 'doc-csharp-sdk',
          component: () => import('./views/doc/Home.vue'),
          meta: {
            rule: 'req'
          }
        },
        {
          path: '/doc/php-sdk',
          name: 'doc-php-sdk',
          component: () => import('./views/doc/Home.vue'),
          meta: {
            rule: 'req'
          }
        },
        {
          path: '/doc/javascript-sdk',
          name: 'doc-javascript-sdk',
          component: () => import('./views/doc/Home.vue'),
          meta: {
            rule: 'req'
          }
        },
        {
          path: '/doc/jquery-sdk',
          name: 'doc-jquery-sdk',
          component: () => import('./views/doc/Home.vue'),
          meta: {
            rule: 'req'
          }
        },
        {
          path: '/doc/collections/model',
          name: 'doc-col-model',
          component: () => import('./views/doc/Home.vue'),
          meta: {
            rule: 'req'
          }
        },
        {
          path: '/doc/collections/list',
          name: 'doc-col-list',
          component: () => import('./views/doc/Home.vue'),
          meta: {
            rule: 'req'
          }
        },
        {
          path: '/doc/collections/get',
          name: 'doc-col-get',
          component: () => import('./views/doc/Home.vue'),
          meta: {
            rule: 'req'
          }
        },
        {
          path: '/doc/fields',
          name: 'doc-fields',
          component: () => import('./views/doc/Home.vue'),
          meta: {
            rule: 'req'
          }
        },
        {
          path: '/doc/items',
          name: 'doc-items',
          component: () => import('./views/doc/Home.vue'),
          meta: {
            rule: 'req'
          }
        },
        {
          path: '/doc/images',
          name: 'doc-images',
          component: () => import('./views/doc/Home.vue'),
          meta: {
            rule: 'req'
          }
        },
        {
          path: '/doc/webhooks',
          name: 'doc-webhooks',
          component: () => import('./views/doc/Home.vue'),
          meta: {
            rule: 'req'
          }
        },
        {
          path: '/doc/errors',
          name: 'doc-errors',
          component: () => import('./views/doc/Home.vue'),
          meta: {
            rule: 'req'
          }
        },
        {
          path: '/doc/rate-limits',
          name: 'doc-rate-limits',
          component: () => import('./views/doc/Home.vue'),
          meta: {
            rule: 'req'
          }
        },
        {
          path: '/doc/api-versions',
          name: 'doc-api-versions',
          component: () => import('./views/doc/Home.vue'),
          meta: {
            rule: 'req'
          }
        },
        {
          path: '/doc/changelog',
          name: 'doc-changelog',
          component: () => import('./views/doc/Home.vue'),
          meta: {
            rule: 'req'
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
  if (!Idtoken && to.meta && to.meta.rule === 'user') {
    return next('/')
  }

  if (Idtoken && (!to.meta || to.meta.rule !== 'user')) {
    return next('/dashboard')
  }

  return next()
})

export default router
