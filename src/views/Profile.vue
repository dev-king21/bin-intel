<template>
	<div>
    <div class="vx-row" v-if="user">
        <div class="vx-col w-full sm:w-1/2 lg:w-1/4 mb-base">
            <vx-card>
              <div slot="no-body">
                  <img ref="avatarPreview" alt="User Avatar" class="responsive card-img-top" :src="`${profile_img ? profile_img : 'images/profile.png'}`">
              </div>
              <div class="flex justify-between flex-wrap">
                <vs-button radius color="primary" type="gradient" icon-pack="feather" icon="icon-upload" class="ml-auto" @click="browseAvatarImg"></vs-button>
              </div>
            </vx-card>
        </div>
        <div class="vx-col w-full sm:w-1/2 lg:w-3/4">
            <vx-card>
                <h1>General</h1>
                <vs-divider class="my-6"></vs-divider>
                <div class="vx-row font-medium">
                    <div class="vx-col w-full md:w-1/3 lg:w-1/3 xl:w-1/3 my-2">
                        <vs-input label="First Name" placeholder="Ethel" v-model="first_name" class="w-full"/>
                    </div>
                    <div class="vx-col w-full md:w-1/3 lg:w-1/3 xl:w-1/3 my-2">
                        <vs-input label="Last Name" placeholder="Harvey" v-model="last_name" class="w-full"/>
                    </div>
                    <div class="vx-col w-full md:w-1/3 lg:w-1/3 xl:w-1/3 my-2">
                        <vs-input label="Organization" placeholder="Yet Another Company" v-model="organization" class="w-full"/>
                    </div>
                    <div class="vx-col w-full md:w-1/3 lg:w-1/3 xl:w-1/3 my-2">
                        <vs-input label="Email Address" disabled placeholder="Email Address" v-model="user.email" class="w-full"/>
                    </div>
                    <div class="vx-col w-full md:w-1/3 lg:w-1/3 xl:w-1/3 my-2">
                        <vs-input label="Phone Number" placeholder="+1-000-000-000" v-model="phone1" class="w-full"/>
                    </div>
                    <div class="vx-col w-full md:w-1/3 lg:w-1/3 xl:w-1/3 my-2">
                        <vs-input label="Phone Number" placeholder="+1-000-000-000" v-model="phone2" class="w-full"/>
                    </div>
                    <div class="vx-col w-full md:w-1/3 lg:w-1/3 xl:w-1/3 my-2">
                        <vs-input label="Country" placeholder="Venezuela" v-model="country" class="w-full"/>
                    </div>
                    <div class="vx-col w-full md:w-1/3 lg:w-1/3 xl:w-1/3 my-2">
                        <vs-input label="City" placeholder="Caracas" v-model="city" class="w-full"/>
                    </div>
                    <div class="vx-col w-full md:w-1/3 lg:w-1/3 xl:w-1/3 my-2">
                        <vs-input label="Website" placeholder="yetanothercompany.com" v-model="website" class="w-full"/>
                    </div>
                </div>
                <div class="vx-row mt-5">
                    <div class="vx-col w-full text-right">
                        <vs-button class="mr-3 mb-2" @click="saveProfile">Save Profile</vs-button>
                        <vs-button color="warning" type="border" class="mb-2" @click="click_reset">Reset</vs-button>
                    </div>
                </div>
            </vx-card>
        </div>
    </div>
    <div class="vx-row mt-10">
        <div class="vx-col md:w-1/2 lg:w-1/2 xl:w-1/2">
            <vx-card>
                <h1>Change Password</h1>
                <vs-divider class="my-6"></vs-divider>
                <div class="vx-row mb-6">
                    <div class="vx-col w-full">
                        <vs-input label-placeholder="Old Password" type="password" v-model="old_password" class="w-full"/>
                    </div>
                </div>
                <div class="vx-row mb-6">
                    <div class="vx-col w-full">
                        <vs-input label-placeholder="New Password" type="password" v-model="new_password" class="w-full"/>
                    </div>
                </div>
                <div class="vx-row mb-6">
                    <div class="vx-col w-full">
                        <vs-input label-placeholder="Confirm Password" type="password" v-model="confirm_password" class="w-full"/>
                    </div>
                </div>
                <div class="vx-row mb-6">
                    <div class="vx-col w-full text-right">
                        <vs-button class="mr-3 mb-2" @click="savePassword">Save Password</vs-button>
                        <vs-button color="warning" type="border" class="mb-2" @click="old_password = new_password = confirm_password = '';">Reset</vs-button>
                    </div>
                </div>
            </vx-card>
        </div>
        <div class="vx-col md:w-1/2 lg:w-1/2 xl:w-1/2">
            <vx-card>
                <h1 class="mb-6">Notifications</h1>
                <div class="vx-row mb-6">
                    <div class="vx-col w-full ml-auto">
                        <vs-checkbox class="inline-flex" v-model="email_not">Receive email notifications</vs-checkbox>
                    </div>
                </div>
                <vs-divider class="my-6"></vs-divider>
                <h2 class="mb-6">Receive notifications when:</h2>
                <div class="vx-row mb-3">
                    <div class="vx-col w-full ml-auto">
                        <vs-checkbox class="inline-flex" v-model="sub_payment">Subscription Payments</vs-checkbox>
                    </div>
                </div>
                <div class="vx-row mb-3">
                    <div class="vx-col w-full ml-auto">
                        <vs-checkbox class="inline-flex" v-model="api_usage">API Usage</vs-checkbox>
                    </div>
                </div>
                <div class="vx-row mb-3">
                    <div class="vx-col w-full ml-auto">
                        <vs-checkbox class="inline-flex" v-model="api_credit">API Credits is running low</vs-checkbox>
                    </div>
                </div>
                <div class="vx-row mb-3">
                    <div class="vx-col w-full ml-auto">
                        <vs-checkbox class="inline-flex" v-model="out_api_credit">Out of API credits</vs-checkbox>
                    </div>
                </div>
                <div class="vx-row mb-1">
                    <div class="vx-col w-full text-right">
                        <vs-button class="mr-3 mb-2" @click="saveNotification">Save Notifications</vs-button>
                        <vs-button color="warning" type="border" class="mb-2" @click="click_reset">Reset</vs-button>
                    </div>
                </div>
            </vx-card>
        </div>
    </div>
    <input class="hidden" type="file" ref="refAvatarFile" accept=".png, .gif, .jpg, .jpeg" @change="avatarChanged">
	</div>
</template>
<script>
export default {
  data () {
    return {
      user: this.$store.state.AppActiveUser,
      first_name: this.$store.state.AppActiveUser.first_name,
      last_name: this.$store.state.AppActiveUser.last_name,
      organization: this.$store.state.AppActiveUser.organization,
      phone1: this.$store.state.AppActiveUser.phone1,
      phone2: this.$store.state.AppActiveUser.phone2,
      country: this.$store.state.AppActiveUser.country,
      city: this.$store.state.AppActiveUser.city,
      website: this.$store.state.AppActiveUser.website,
      profile_img: this.$store.state.AppActiveUser.profile_img,
      old_password: '',
      new_password: '',
      confirm_password: '',
      avatar_file: null,
      avatar_show: false,
      avatar: null,
      email_not: this.$store.state.AppActiveUser.email_not === true,
      sub_payment: this.$store.state.AppActiveUser.sub_payment === true,
      api_usage: this.$store.state.AppActiveUser.api_usage === true,
      api_credit: this.$store.state.AppActiveUser.api_credit === true,
      out_api_credit: this.$store.state.AppActiveUser.out_api_credit === true
    }
  },
  methods: {
    browseAvatarImg () {
      this.$refs.refAvatarFile.click()
    },
    readerData (rawFile) {
      return new Promise((resolve) => {
        const reader = new FileReader()
        reader.onload = e => {
          this.$refs.avatarPreview.src = e.target.result
          this.avatar = e.target.result
          this.avatar_file = rawFile
          //this.onSuccess(sendData)
          resolve()
        }
        this.avatar_show = true
        reader.readAsDataURL(rawFile)
      })
    },
    avatarChanged (e) {
      const files = e.target.files
      this.validateAndUpload(files)
    },
    validateAndUpload (files) {
      const rawFile = files[0] // only use files[0]
      if (!this.isImage(rawFile)) {
        this.$vs.notify({
          title: 'Format invalid',
          text: 'The file format is not valid',
          iconPack: 'feather',
          icon: 'icon-alert-circle',
          color: 'danger'
        })
        return false
      }
      this.previewAvatar(rawFile)
    },
    isImage (file) {
      return /\.(jpeg|png|gif|jpg)$/.test(file.name)
    },
    previewAvatar (file) {
      this.$refs.refAvatarFile.value = null // fix can't select the same excel
      this.readerData(file)
    },
    saveProfile () {
      const action = '/beta/user/save-profile'
      this.$vs.loading({
        type: 'sound',
        text: 'Loading ... '
      })
      const newData = {
        first_name: this.first_name,
        last_name: this.last_name,
        organization: this.organization,
        phone1: this.phone1,
        phone2: this.phone2,
        country: this.country,
        city: this.city,
        website: this.website,
        profile_img: this.avatar ? this.avatar : this.profile_img
      }
      this.$http.post(action, newData)
        .then((response) => {
          this.$store.state.AppActiveUser.first_name = this.first_name
          this.$store.state.AppActiveUser.last_name = this.last_name
          this.$store.state.AppActiveUser.organization = this.organization
          this.$store.state.AppActiveUser.phone1 = this.phone1
          this.$store.state.AppActiveUser.phone2 = this.phone2
          this.$store.state.AppActiveUser.country = this.country
          this.$store.state.AppActiveUser.city = this.city
          this.$store.state.AppActiveUser.website = this.website
          this.$store.state.AppActiveUser.profile_img = this.profile_img
          localStorage.setItem('userInfo', JSON.stringify(this.$store.state.AppActiveUser))

          this.$vs.loading.close()
          console.log('res', response.data)
          this.$vs.notify({
            title:'Success',
            text:response.data.body.message,
            color:'success',
            position:'top-right'})
        }).catch((error) => {
          this.$vs.loading.close()
          this.$vs.notify({
            title:'Error',
            text: error.response.data.message,
            color:'danger',
            position:'top-right'})
        })
    },
    savePassword () {
      if (this.new_password !== this.confirm_password) {
        this.$vs.notify({
          title: 'Error',
          text: 'Please confirm the password again',
          iconPack: 'feather',
          icon: 'icon-info',
          color: 'danger'
        })
        return
      }
      const action = '/beta/user/save-password'
      const newData = {
        old_password: this.old_password,
        new_password: this.new_password,
        access_token: localStorage.getItem('AccessToken')
      }
      this.$vs.loading({
        type: 'sound',
        text: 'Loading ... '
      })
      this.$http.post(action, newData)
        .then((response) => {
          this.$vs.loading.close()
          if (response.data.statusCode === 200) {
            this.$vs.notify({
              title:'Success',
              text:response.data.body.message,
              color:'success',
              position:'top-right'})
          } else {
            this.$vs.notify({
              title: 'Error',
              text: response.data.body.message,
              iconPack: 'feather',
              icon: 'icon-info',
              color: 'danger'
            })
          }
        }).catch((error) => {
          this.$vs.loading.close()
          this.$vs.notify({
            title: 'Error',
            text: error.response.message,
            iconPack: 'feather',
            icon: 'icon-info',
            color: 'danger'
          })
        })
    },
    saveNotification () {
      const action = '/beta/user/save-notification'
      const newData = {
        email_not: this.email_not === true,
        sub_payment: this.sub_payment === true,
        api_usage: this.api_usage === true,
        api_credit: this.api_credit === true,
        out_api_credit: this.out_api_credit === true
      }
      this.$vs.loading({
        type: 'sound',
        text: 'Loading ... '
      })
      this.$http.post(action, newData)
        .then((response) => {
          this.$store.state.AppActiveUser.email_not = this.email_not
          this.$store.state.AppActiveUser.sub_payment = this.sub_payment
          this.$store.state.AppActiveUser.api_usage = this.api_usage
          this.$store.state.AppActiveUser.api_credit = this.api_credit
          this.$store.state.AppActiveUser.out_api_credit = this.out_api_credit
          localStorage.setItem('userInfo', JSON.stringify(this.$store.state.AppActiveUser))

          this.$vs.loading.close()
          this.$vs.notify({
            title:'Success',
            text:response.data.body.message,
            color:'success',
            position:'top-right'})
        }).catch((error) => {
          this.$vs.loading.close()
          this.$vs.notify({
            title:'Error',
            text: error.response.data.message,
            color:'danger',
            position:'top-right'})
        })
    },
    click_reset () {
      this.first_name = this.$store.state.AppActiveUser.first_name
      this.last_name = this.$store.state.AppActiveUser.last_name
      this.organization = this.$store.state.AppActiveUser.organization
      this.phone1 = this.$store.state.AppActiveUser.phone1
      this.phone2 = this.$store.state.AppActiveUser.phone2
      this.country = this.$store.state.AppActiveUser.country
      this.city = this.$store.state.AppActiveUser.city
      this.website = this.$store.state.AppActiveUser.website
      this.profile_img = this.$store.state.AppActiveUser.profile_img
      this.email_not = this.$store.state.AppActiveUser.email_not === true
      this.sub_payment = this.$store.state.AppActiveUser.sub_payment === true
      this.api_usage = this.$store.state.AppActiveUser.api_usage === true
      this.api_credit = this.$store.state.AppActiveUser.api_credit === true
      this.out_api_credit = this.$store.state.AppActiveUser.out_api_credit === true
    }
  },
  created () {
    this.click_reset()
  }
}
</script>
