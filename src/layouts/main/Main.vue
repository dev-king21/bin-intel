<!-- =========================================================================================
    File Name: Main.vue
    Description: Main layout
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
    Author: Pagos LLC
========================================================================================== -->


<template>
  <div class="layout--main" :class="[layoutTypeClass, navbarClasses, footerClasses, {'no-scroll': isAppPage}]">
    <img v-if="$route.path === '/'" class="fixed responsive" src="/background.png" style="opacity: 0.6"/>
    <header class="vs-navbar flex flex-end vs-navbar-null vs-navbar-color-transparent" style="background: transparent; z-index:99999;">
      <div class="vs-navbar--header">
        <button class="vs-navbar--btn-responsive">
          <span class="btn-responsive-line line--1"></span>
          <span class="btn-responsive-line line--2"></span>
          <span class="btn-responsive-line line--3"></span>
        </button>
        <div>
          <h3 class="vs-navbar--title flex items-center">
            <a href="/" class="router-link-active">
              <img src="/logo-bin.png" class="logo cursor-pointer">
            </a>
          </h3>
        </div>
      </div>
      <div class="vs-con-items">
        <li class="vs-navbar--item ml-4 is-active-item vs-navbar-item-primary"
          v-for="item in navMenuItems" :key="item.url">
          <a :href="item.url" v-if="!isLogin || item.name!='Pricing'" class="flex items-center font-bold mr-4" style="font-size: 14px;" :class="{'text-primary': item.url === $route.path}">
            {{item.name}} </a>
        </li>
        <li class="vs-navbar--item vs-navbar-item-primary">
          <template v-if="isLogin">

            <div class="the-navbar__user-meta flex items-center" >

              <div class="text-right leading-tight hidden sm:block">
                <p class="font-semibold">{{ user.first_name}} {{ user.last_name}}</p>
              </div>

              <vs-dropdown vs-custom-content vs-trigger-click class="cursor-pointer">

                <vs-avatar :src="user.profile_img"/>

                <vs-dropdown-menu class="vx-navbar-dropdown">
                  <ul style="min-width: 10rem">

                    <li class="flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white">
                      <router-link class="hover:text-white text-dark" to="/dashboard"><feather-icon icon="HomeIcon" svgClasses="w-4 h-4" />
                      <span class="ml-2">Dashboard</span></router-link>
                    </li>

                    <li class="flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white">
                      <router-link class="hover:text-white text-dark" to="/profile"><feather-icon icon="UserIcon" svgClasses="w-4 h-4" />
                      <span class="ml-2">Profile</span></router-link>
                    </li>

                    <vs-divider class="m-1" />

                    <li
                      class="flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white"
                      @click="logout">
                      <feather-icon icon="LogOutIcon" svgClasses="w-4 h-4" />
                      <span class="ml-2">Logout</span>
                    </li>
                  </ul>
                </vs-dropdown-menu>
              </vs-dropdown>
            </div>

          </template>
          <template v-else>
            <a class="h2 flex items-center cursor-pointer font-bold mr-4" style="font-size: 14px;" @click="$router.push('/pages/login').catch(() => {})">
              Sign In </a>
          </template>
        </li>
      </div>
    </header>

    <div id="" :class="[contentAreaClass, {'show-overlay': bodyOverlay}]">
      <div id="content-overlay" />


      <div class="content-wrapper">

        <div class="router-view">
          <div class="content">

            <transition :name="routerTransition">

              <div v-if="$route.meta.breadcrumb || $route.meta.pageTitle" class="router-header flex flex-wrap items-center mb-6">
                <div
                  class="content-area__heading"
                  :class="{'pr-4 border-0 md:border-r border-solid border-grey-light' : $route.meta.breadcrumb}">
                  <h2 class="mb-1">{{ routeTitle }}</h2>
                </div>

                <!-- BREADCRUMB -->
                <vx-breadcrumb class="ml-4 md:block hidden" v-if="$route.meta.breadcrumb" :route="$route" :isRTL="$vs.rtl" />

                <!-- DROPDOWN -->
                <vs-dropdown vs-trigger-click class="ml-auto md:block hidden cursor-pointer">
                  <vs-button radius icon="icon-settings" icon-pack="feather" />

                  <vs-dropdown-menu class="w-32">
                    <vs-dropdown-item>
                      <div @click="$router.push('/pages/profile').catch(() => {})" class="flex items-center">
                        <feather-icon icon="UserIcon" class="inline-block mr-2" svgClasses="w-4 h-4" />
                        <span>Profile</span>
                      </div>
                    </vs-dropdown-item>
                    <vs-dropdown-item>
                      <div @click="$router.push('/apps/todo').catch(() => {})" class="flex items-center">
                        <feather-icon icon="CheckSquareIcon" class="inline-block mr-2" svgClasses="w-4 h-4" />
                        <span>Tasks</span>
                      </div>
                    </vs-dropdown-item>
                    <vs-dropdown-item>
                      <div @click="$router.push('/apps/email').catch(() => {})" class="flex items-center">
                        <feather-icon icon="MailIcon" class="inline-block mr-2" svgClasses="w-4 h-4" />
                        <span>Inbox</span>
                      </div>
                    </vs-dropdown-item>
                  </vs-dropdown-menu>

                </vs-dropdown>

              </div>
            </transition>

            <div class="content-area__content">

              <back-to-top bottom="5%" :right="$vs.rtl ? 'calc(100% - 2.2rem - 38px)' : '30px'" visibleoffset="500" v-if="!hideScrollToTop">
                <vs-button icon-pack="feather" icon="icon-arrow-up" class="shadow-lg btn-back-to-top" />
              </back-to-top>

              <transition :name="routerTransition" mode="out-in">
                <router-view @changeRouteTitle="changeRouteTitle" @setAppClasses="(classesStr) => $emit('setAppClasses', classesStr)" />
              </transition>
            </div>
          </div>
        </div>
      </div>
      <the-footer />
    </div>
  </div>
</template>


<script>
import BackToTop           from 'vue-backtotop'
import HNavMenu            from '@/layouts/components/horizontal-nav-menu/HorizontalNavMenu.vue'
import navMenuItems        from '@/layouts/components/vertical-nav-menu/navMenuItems.js'
import TheNavbarHorizontal from '@/layouts/components/navbar/TheNavbarHorizontal.vue'
import TheNavbarVertical   from '@/layouts/components/navbar/TheNavbarVertical.vue'
import TheFooter           from '@/layouts/components/TheFooter.vue'
import themeConfig         from '@/../themeConfig.js'

export default {
  components: {
    BackToTop,
    HNavMenu,
    TheFooter,
    TheNavbarHorizontal,
    TheNavbarVertical
  },
  data () {
    return {
      footerType        : themeConfig.footerType  || 'static',
      hideScrollToTop   : themeConfig.hideScrollToTop,
      isNavbarDark      : false,
      navbarColor       : themeConfig.navbarColor || '#fff',
      navbarType        : themeConfig.navbarType  || 'floating',
      navMenuItems,
      routerTransition  : themeConfig.routerTransition || 'none',
      routeTitle        : this.$route.meta.pageTitle,
      isLogin           : localStorage.getItem('IdToken')
    }
  },
  watch: {
    '$route' () {
      this.routeTitle = this.$route.meta.pageTitle
    },
    isThemeDark (val) {
      const color = this.navbarColor === '#fff' && val ? '#10163a' : '#fff'
      this.updateNavbarColor(color)
    },
    '$store.state.mainLayoutType' (val) {
      this.setNavMenuVisibility(val)
    }
  },
  computed: {
    user () {
      return this.$store.state.AppActiveUser
    },
    bodyOverlay () { return this.$store.state.bodyOverlay },
    contentAreaClass () {
      if (this.mainLayoutType === 'vertical') {
        if      (this.verticalNavMenuWidth === 'default') return 'content-area-reduced'
        else if (this.verticalNavMenuWidth === 'reduced') return 'content-area-lg'
        else return 'content-area-full'
      } else return 'content-area-full'
    },
    footerClasses () {
      return {
        'footer-hidden': this.footerType === 'hidden',
        'footer-sticky': this.footerType === 'sticky',
        'footer-static': this.footerType === 'static'
      }
    },
    isAppPage () {
      return this.$route.meta.no_scroll
    },
    isThemeDark ()     { return this.$store.state.theme === 'dark' },
    layoutTypeClass () { return `main-${this.mainLayoutType}`      },
    mainLayoutType ()  { return this.$store.state.mainLayoutType   },
    navbarClasses ()   {
      return {
        'navbar-hidden'   : this.navbarType === 'hidden',
        'navbar-sticky'   : this.navbarType === 'sticky',
        'navbar-static'   : this.navbarType === 'static',
        'navbar-floating' : this.navbarType === 'floating'
      }
    },
    verticalNavMenuWidth () { return this.$store.state.verticalNavMenuWidth },
    windowWidth ()          { return this.$store.state.windowWidth }
  },

  methods: {
    changeRouteTitle (title) {
      this.routeTitle = title
    },
    updateNavbarColor (val) {
      this.navbarColor = val
      if (val === '#fff') this.isNavbarDark = false
      else this.isNavbarDark = true
    },
    setNavMenuVisibility (layoutType) {
      if ((layoutType === 'horizontal' && this.windowWidth >= 1200) || (layoutType === 'vertical' && this.windowWidth < 1200)) {
        this.$store.commit('TOGGLE_IS_VERTICAL_NAV_MENU_ACTIVE', false)
        this.$store.dispatch('updateVerticalNavMenuWidth', 'no-nav-menu')
      } else {
        this.$store.commit('TOGGLE_IS_VERTICAL_NAV_MENU_ACTIVE', true)
      }
    },
    logout () {

      // If JWT login
      if (localStorage.getItem('IdToken')) {
        localStorage.removeItem('IdToken')
        localStorage.removeItem('AccessToken')
        localStorage.removeItem('RefreshToken')
        localStorage.removeItem('userInfo')
        this.$router.push('/pages/login')
      }

      // This is just for demo Purpose. If user clicks on logout -> redirect
      this.$router.push('/pages/login').catch(() => {})
    }
  }
}

</script>
