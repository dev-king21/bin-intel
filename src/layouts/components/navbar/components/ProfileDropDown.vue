<template>
  <div class="the-navbar__user-meta flex items-center" v-if="activeUserInfo.email">

    <div class="text-right leading-tight hidden sm:block">
      <p class="font-semibold">{{ activeUserInfo.first_name}} {{ activeUserInfo.last_name}}</p>
      <small>Available</small>
    </div>

    <vs-dropdown vs-custom-content vs-trigger-click class="cursor-pointer">

      <div class="con-img ml-3">
        <img :src="`${activeUserInfo.profile_img ? activeUserInfo.profile_img : 'images/profile.png'}`" alt="user-img" width="40" height="40" class="rounded-full shadow-md cursor-pointer block" />
      </div>

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

<script>
export default {
  computed: {
    activeUserInfo () {
      return this.$store.state.AppActiveUser
    }
  },
  methods: {
    logout () {
      localStorage.removeItem('IdToken')
      localStorage.removeItem('AccessToken')
      localStorage.removeItem('RefreshToken')
      localStorage.removeItem('userInfo')
      // This is just for demo Purpose. If user clicks on logout -> redirect
      this.$router.push('/pages/login').catch(() => {})
    }
  }
}
</script>
