<!-- =========================================================================================
    File Name: Register.vue
    Description: Register Page
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
  <div class="h-screen flex w-full bg-img vx-row no-gutter items-center justify-center" id="page-login">
    <div class="vx-col sm:w-1/2 md:w-1/2 lg:w-3/4 xl:w-3/5 sm:m-0 m-4">
      <vx-card>
        <div slot="no-body" class="full-page-bg-color">

          <div class="vx-row no-gutter justify-center items-center">

            <div class="vx-col hidden lg:block lg:w-1/2">
              <img src="/background.png" alt="login" style="width: 100%">
            </div>

            <div class="vx-col sm:w-full md:w-full lg:w-1/2 d-theme-dark-bg">
              <div class="p-8 login-tabs-container">

                <div class="vx-card__title mb-4">
                  <a href="/" class="router-link-active">
                    <img src="/logo-bin.png" class="logo cursor-pointer">
                  </a>
                  <h4 class="mb-4">Create Account</h4>
                  <p>Fill the below form to create a new account.</p>
                </div>

                <div class="clearfix">
                  <vs-input
                    data-vv-validate-on="blur"
                    label-placeholder="Name"
                    name="displayName"
                    placeholder="Name"
                    v-model="displayName"
                    class="w-full" />

                  <vs-input
                    data-vv-validate-on="blur"
                    name="email"
                    type="email"
                    label-placeholder="Email"
                    placeholder="Email"
                    v-model="email"
                    class="w-full mt-6" />

                  <vs-input
                    ref="password"
                    type="password"
                    data-vv-validate-on="blur"
                    name="password"
                    label-placeholder="Password"
                    placeholder="Password"
                    v-model="password"
                    class="w-full mt-6" />

                  <vs-input
                    type="password"
                    data-vv-validate-on="blur"
                    data-vv-as="password"
                    name="confirm_password"
                    label-placeholder="Confirm Password"
                    placeholder="Confirm Password"
                    v-model="confirm_password"
                    class="w-full mt-6" />

                  <vs-checkbox v-model="isTermsConditionAccepted" class="mt-6">I accept the terms & conditions.</vs-checkbox>
                  <vs-button  type="border" to="/pages/login" class="mt-6">Login</vs-button>
                  <vs-button class="float-right mt-6" @click="registerUser" :disabled="!validateForm">Register</vs-button>
                </div>

              </div>
            </div>
          </div>
        </div>
      </vx-card>
    </div>
  </div>
</template>

<script>
export default{
  data () {
    return {
      displayName: '',
      email: '',
      password: '',
      confirm_password: '',
      isTermsConditionAccepted: true
    }
  },
  computed: {
    validateForm () {
      return this.displayName !== '' && this.email !== '' && this.password !== '' && this.confirm_password === this.password && this.isTermsConditionAccepted === true
    }
  },
  methods: {
    registerUser () {
      // If form is not validated or user is already login return
      if (!this.validateForm) return
      this.$vs.loading({
        type: 'sound',
        text: 'loging in ... '
      })
      const action = '/beta/signup'
      const params = {
        name: this.displayName,
        email: this.email,
        password: this.password,
        phone_number: '+8800000000000'
      }
      this.$http.post(action, params)
        .then((response) => {
          if (response.data.statusCode === 200) {
            this.$vs.loading.close()
            this.$vs.notify({
              title:'Success',
              text:response.data.body.message,
              color:'success',
              position:'top-right'})
          } else {
            this.$vs.loading.close()
            this.$vs.notify({
              title:'Error',
              text:response.data.body.message,
              color:'danger',
              position:'top-right'})
          }
        })
    }
  }
}
</script>

<style lang="scss">
#page-login {
  .social-login-buttons {
    .bg-facebook { background-color: #1551b1 }
    .bg-twitter { background-color: #00aaff }
    .bg-google { background-color: #4285F4 }
    .bg-github { background-color: #333 }
  }
}
</style>
