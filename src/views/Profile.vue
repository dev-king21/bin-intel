<template>
	<div>
    <div class="vx-row">
        <div class="vx-col w-full sm:w-1/2 lg:w-1/4 mb-base">
            <vx-card>
              <div slot="no-body">
                  <img ref="avatarPreview" alt="User Avatar" class="responsive card-img-top">
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
                        <vs-input label="Email Address" placeholder="Email Address" v-model="email" class="w-full"/>
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
                        <vs-button class="mr-3 mb-2">Save Profile</vs-button>
                        <vs-button color="warning" type="border" class="mb-2" @click="first_name = last_name = organization = email = phone1 = phone2 = country = city = website = '';">Reset</vs-button>
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
                        <vs-button class="mr-3 mb-2">Save Password</vs-button>
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
                        <vs-button class="mr-3 mb-2">Save Password</vs-button>
                        <vs-button color="warning" type="border" class="mb-2" @click="email_not = sub_payment = api_credit = api_usage = out_api_credit = false ;">Reset</vs-button>
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
      user_img: 'https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/content-img-1.228da091.jpg',
      first_name: '',
      last_name: '',
      organization: '',
      email: '',
      phone1: '',
      phone2: '',
      country: '',
      city: '',
      website: '',
      old_password: '',
      new_password: '',
      confirm_password: '',
      email_not: true,
      sub_payment: true,
      api_usage: false,
      api_credit: false,
      out_api_credit: false
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
          title: "Format invalid",
          text: "The file format is not valid",
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
    }  
  }
}
</script>
