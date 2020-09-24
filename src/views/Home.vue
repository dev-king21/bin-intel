<template>
    <div>
      <div class="vx-row">
        <div class="vx-col lg:w-7/12 md:w-7/12 pl-10">
          <h1 class="text-white my-10">Vivamus Aruc</h1>
          <h3 class="text-white ml-4 my-4">Turpis egestas sed tempus</h3>
          <h3 class="text-white ml-4 my-4">urna et pharetra pharetra</h3>
          <h3 class="text-white ml-4 my-4">massa.</h3>
        </div>
        <div class="vx-col lg:w-5/12 md:w-5/12">
          <vx-card class="mt-5 bg-black text-white">
              <label style="text-transform: uppercase"> Enter first 6 or 8 digits of any credit card to get intel</label>
              <div class="demo-alignment">
                  <vs-input icon-pack="feather" icon="icon-search" placeholder="Search" v-model="value1" class="is-label-placeholder text-black" v-on:keyup.enter="submit_click" />
                  <vs-button color="primary" type="filled" @click="submit_click">Search</vs-button>
              </div>
              <h3 class="text-primary my-4" :class="loader ? 'text-primary' : 'text-warning'">{{msg}}</h3>
              <div class="h4 text-white">
                <p>{</p>
                <p class="ml-4"><label class="text-success"> number </label>: {</p>
                <p class="ml-8"><label class="text-success"> length </label>: {{loader ? card_info.number.length : ''}},</p>
                <p class="ml-8"><label class="text-success"> luhn </label>: {{loader ? (card_info.number.luhn ? 'true':'false') : ''}}</p>
                <p class="ml-4"> }, </p>
                <p class="ml-4"><label class="text-success"> scheme </label>: <label class="text-danger">{{loader ? card_info.scheme : ''}}</label>,</p>
                <p class="ml-4"><label class="text-success"> type </label>: <label class="text-danger">{{loader ? card_info.type : ''}}</label>,</p>
                <p class="ml-4"><label class="text-success"> brand </label>: <label class="text-danger">{{loader ? card_info.brand : ''}}</label>,</p>
                <p class="ml-4"><label class="text-success"> prepaid </label>: {{loader ? (card_info.prepaid ? 'true' : 'false') : ''}},</p>
                <p class="ml-4"><label class="text-success"> country </label>: {</p>
                <p class="ml-8"><label class="text-success"> numeric </label>: <label class="text-danger">{{loader ? card_info.country.numeric : ''}}</label>,</p>
                <p class="ml-8"><label class="text-success"> alpha2 </label>: <label class="text-danger">{{loader ? card_info.country.alpha2 : ''}}</label>,</p>
                <p class="ml-8"><label class="text-success"> name </label>: <label class="text-danger">{{loader ? card_info.country.name : ''}}</label>,</p>
                <p class="ml-8"><label class="text-success"> emoji </label>: <label class="text-danger">{{loader ? card_info.country.emoji : ''}}</label>,</p>
                <p class="ml-8"><label class="text-success"> currency </label>: <label class="text-danger">{{loader ? card_info.country.currency : ''}}</label>,</p>
                <p class="ml-8"><label class="text-success"> latitude </label>: {{loader ? card_info.country.latitude : ''}},</p>
                <p class="ml-8"><label class="text-success"> longitude </label>: {{loader ? card_info.country.longitude : ''}}</p>
                <p class="ml-4"> }, </p>
                <p class="ml-4"><label class="text-success"> bank </label>: {</p>
                <p class="ml-8"><label class="text-success"> name </label>: <label class="text-danger">{{loader ? card_info.bank.name : ''}}</label>,</p>
                <p class="ml-8"><label class="text-success"> url </label>: <label class="text-danger">{{loader ? card_info.bank.url : ''}}</label>,</p>
                <p class="ml-8"><label class="text-success"> phone </label>: <label class="text-danger">{{loader ? card_info.bank.phone : ''}}</label>,</p>
                <p class="ml-8"><label class="text-success"> city </label>: <label class="text-danger">{{loader ? card_info.bank.city : ''}}</label></p>
                <p class="ml-4"> } </p>
                <p> } </p>
              </div>
          </vx-card>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      value1: '',
      card_info: '',
      loader: false,
      msg: 'Card Information'
    }
  },
  methods: {
    submit_click () {
      this.$vs.loading({
        type: 'sound',
        text: 'Loading ... '
      })
      let apikey = ''
      if (localStorage.getItem('apiKey') != null) apikey = localStorage.getItem('apiKey')
      this.$http.get(`/beta/home/${this.value1}`, {params: {apikey}})
        .then((response) => {
          this.$http.get('/beta/profile/get-api-keys')
            .then((response) => {
              localStorage.setItem('apiKey', response.data.body.Items[0].apikey)
            })
          this.$vs.loading.close()
          if (response && response.data && response.data.card) {
            this.$vs.notify({
              title:'Success',
              text:'You received the information successfully.',
              color:'success',
              position:'top-right'})
            this.card_info = response.data.card
            this.loader = true
            this.msg = 'Card Information'
          } else {
            this.$vs.notify({
              title:'Error',
              text: response.data.message,
              color:'danger',
              position:'top-right'})
            this.loader = false
            this.msg = response.data.message
          }
        }).catch((error) => {
          if (error.response && error.response.data) {
            this.msg = error.response.data.message
          } else if (error.message) {
            this.msg = error.message
          }
          this.$vs.loading.close()
          this.loader = false
          this.$vs.notify({
            title:'Error',
            text: this.msg,
            color:'danger',
            position:'top-right'})
        })
    }
  }

}
</script>
