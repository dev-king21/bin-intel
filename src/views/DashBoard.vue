<template>
    <div>
        <div class="vx-row">
            <div class="vx-col w-full md:w-1/2 lg:w-1/2 xl:w-1/2">
                <vx-card class="overflow-hidden">
                    <div slot="no-body">
                        <div class="p-6">
                            <feather-icon icon="UsersIcon" class="p-3 inline-flex rounded-full text-primary" style="background: rgba(var(--vs-primary),.15)"></feather-icon>
                            <div class="truncate text-center">
                                <h2 class="mb-1 font-bold text-5xl text-center"> Working </h2>
                                <span> API SERVICE STATUS </span>
                            </div>
                        </div>
                        <div class="text-center mb-2">
                            <feather-icon icon="ThumbsUpIcon" class="text-success" svgClasses="w-24 h-24"></feather-icon>
                        </div>
                    </div>
                </vx-card>
            </div>
            <div class="vx-col w-full md:w-1/2 lg:w-1/2 xl:w-1/2">
                <statistics-card-line icon="ShoppingBagIcon" :statistic="`${responseTime} ms`" statisticTitle="API PERSON TIME" :chartData="ordersRecevied" color="success" type="area"></statistics-card-line>
            </div>
        </div>
        <div class="vx-row">
            <div class="vx-col w-full">
                <vx-card class="mt-5">
                    <h1>API Usage</h1>
                    <vs-divider class="my-6"></vs-divider>
                    <div class="vx-row font-medium p-3">
                        <div class="vx-col w-full md:w-1/2 lg:w-1/2 xl:w-1/2">
                            Consumed API Requests
                        </div>
                        <div class="vx-col w-full md:w-1/2 lg:w-1/2 xl:w-1/2 text-right">
                            <p>{{read_percent}} % ( {{read_cnt}} / {{total_cnt}})</p>
                            <vs-progress class="block mt-1" :percent="read_percent" color="primary"></vs-progress>
                        </div>
                    </div>
                    <div class="vx-row font-medium p-3">
                        <div class="vx-col w-full md:w-1/2 lg:w-1/2 xl:w-1/2">
                            API Requests Today
                        </div>
                        <div class="vx-col w-full md:w-1/2 lg:w-1/2 xl:w-1/2 text-right">
                            {{today_cnt}}
                        </div>
                    </div>
                    <div class="vx-row font-medium p-3">
                        <div class="vx-col w-full md:w-1/2 lg:w-1/2 xl:w-1/2">
                            Surcharge API Requests
                        </div>
                        <div class="vx-col w-full md:w-1/2 lg:w-1/2 xl:w-1/2 text-right">
                            {{extra_cnt}}
                        </div>
                    </div>
                    <div class="vx-row font-medium p-3">
                        <div class="vx-col w-full md:w-1/2 lg:w-1/2 xl:w-1/2">
                            Surcharge Amount (incl. in next bill)
                        </div>
                        <div class="vx-col w-full md:w-1/2 lg:w-1/2 xl:w-1/2 text-right">
                            $ {{extra_billing}}
                        </div>
                    </div>
                </vx-card>
                <vx-card class="mt-5">
                    <h1>API Keys</h1>
                    <vs-divider class="my-6"></vs-divider>
                    <div class="vx-row font-medium p-3" v-for="(contact, index) in ApiKeys" :key="index">
                        <div class="vx-col w-full md:w-1/2 lg:w-1/2 xl:w-1/2 api-key">
                            <span>{{index+1}}. </span>
                            <span :id="`api-key-${index}`">{{contact.apikey}}</span>
                        </div>
                        <div class="vx-col flex items-center justify-end w-full md:w-1/2 lg:w-1/2 xl:w-1/2 text-right">
                            <vs-button color="primary" type="filled" style = "right:10px"  icon-pack="feather" icon="icon-copy"  @click="copyApikey(contact,index)"></vs-button>
                            <vs-button color="success" type="filled" icon-pack="feather" icon="icon-repeat" @click="refreshApikey(contact,index)"></vs-button>
                        </div>

                        <!-- <div class="vs-component vs-divider">
                            <span class="vs-divider-border after vs-divider-border-success" style="width: 100%; border-top-width: 1px; border-top-style: dashed;"></span>
                            <span class="vs-divider--text vs-divider-text-success vs-divider-background-default" style="background: transparent;">{{index+1}}</span>
                            <span class="vs-divider-border before vs-divider-border-success" style="width: 100%; border-top-width: 1px; border-top-style: dashed;"></span>
                        </div> -->
                    </div>
                    <vs-button icon-pack="feather" icon="icon-chevrons-right" icon-after class="shadow-md w-full" @click="addApiKey">Add Key</vs-button>
                </vx-card>
            </div>
        </div>
    </div>
</template>
<script>
import StatisticsCardLine from './StatisticsCardLine.vue'
export default {

  data () {
    return {
      ordersRecevied : this.$store.state.chartVal ,
      responseTime:0,
      ApiKeys: [],
      sel_content : [],
      sel_index : '',
      total_cnt:0,
      read_cnt:0,
      read_percent:0.0,
      today_cnt:0,
      api_level:0,
      extra_cnt:0,
      extra_billing:0.0,


    }
  },
  components: {
    StatisticsCardLine
  },
  mounted () {
    this.getResponseVal()
  },
  methods: {
    getResponseVal () {
      this.$http.get('/beta/response-time').then((response) => {
        const chartdatas = [{data:[]}]
        chartdatas[0].data = response.data.body.Items.reverse()
        this.$store.commit('SET_CHART_VAL', chartdatas)
        var total = 0;
        var count =  response.data.body.Items.length
        for(var i = 0; i < count; i++) {
            total += parseInt(response.data.body.Items[i]);
        }
        this.responseTime = Math.floor(total/count)
        localStorage.setItem('chartData', JSON.stringify(chartdatas))
      })
      //get userInfo
      this.$http.get('/beta/profile')
      .then((res_user) => {
        this.$vs.loading.close()
        localStorage.setItem('userInfo', JSON.stringify(res_user.data.body.user))
        this.$store.commit('UPDATE_USER_INFO',res_user.data.body.user)
      })
      var userInfo = this.$store.state.AppActiveUser
      this.api_level = userInfo.userLevel
      this.read_cnt = userInfo.month_cnt
      if(this.api_level === '0')
        this.total_cnt = 10;
      else if(this.api_level === '1')
        this.total_cnt = 20000;
      else if(this.api_level ==='2'||this.api_level ==='3')
        this.total_cnt = 100000;
      this.read_percent = Math.round(1000*this.read_cnt/this.total_cnt)/1000
      let date_ob = new Date();
      let date = ("0" + date_ob.getDate()).slice(-2);
      let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
      let year = date_ob.getFullYear();
      var today = year + "-" + month + "-" + date;
      if(userInfo.last_date === today)
        this.today_cnt = userInfo.last_cnt
      if(this.read_cnt > this.total_cnt){
        this.extra_cnt = this.read_cnt - this.total_cnt
        if(this.api_level == 1)
          this.extra_billing = this.extra_cnt*0.005;
        else
          this.extra_billing = this.extra_cnt*0.005;
      }
    },
    addApiKey () {
      if (this.ApiKeys.length > 8) {
        this.$vs.notify({
          text: 'You have already 10 api keys. You can\'t make apikey anymore!.',
          color: 'danger',
          position:'top-right'
        })
        return
      }

      this.colorAlert = 'success'
      this.$vs.dialog({
        color:this.colorAlert,
        title: 'Confirm',
        text: 'Are you sure make new apikey?',
        accept:this.add_key
      })
    },
    add_key () {
      this.$vs.loading({
        type: 'sound',
        text: 'Loading ... '
      })
      const action = '/beta/profile/add-api-key'
      this.$http.get(action).then((response) => {
        this.$vs.loading.close()
        this.ApiKeys.push(response.data.body.api_key)
        localStorage.setItem('apiKey',response.data.body.api_key)
      })
    },
    refreshApikey (contact, index) {
      this.sel_content = contact
      this.sel_index = index
      this.colorAlert = 'success'
      this.$vs.dialog({
        color:this.colorAlert,
        title: 'Confirm',
        text: 'Are you sure refresh apikey?',
        accept:this.refreshkey
      })
    },
    refreshkey () {
      this.$vs.loading({
        type: 'sound',
        text: 'Loading ... '
      })
      const action = '/beta/profile/refresh-api-key'
      this.$http.post(action, this.sel_content).then((response) => {
        this.$vs.loading.close()
        this.ApiKeys.splice(this.sel_index, 1, response.data.body.api_key)
        localStorage.setItem('apiKey',response.data.body.api_key)
      })
    },

    copyApikey (contact, index) {
      const copyApi = document.querySelector(`#api-key-${index}`)
      const textArea = document.createElement('textarea')
      textArea.value = copyApi.textContent
      document.body.appendChild(textArea)
      textArea.select()
      document.execCommand('copy')
      textArea.remove()
      this.$vs.notify({
        text: 'API key has been copied to the clipboard.',
        color: 'primary',
        position:'top-right'
      })
    }
  },
  created () {
    this.$vs.loading({
      type: 'sound',
      text: 'Loading ... '
    })
    this.$http.get('/beta/profile/get-api-keys')
      .then((response) => {
        this.$vs.loading.close()
        this.ApiKeys = response.data.body.Items
      }).catch((error) => {
        this.$vs.loading.close()
        this.$vs.notify({
          title:'Error',
          text: error.response.data.message,
          color:'danger',
          position:'top-right'})
      })
  },
}
</script>
