<!-- =========================================================================================
  File Name: ECommerceWishList.vue
  Description: eCommerce Wish List Page
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pagos LLC
========================================================================================== -->

<template>
  <div class="vx-row">
    <div class="vx-col w-full md:w-1/4 lg:w-1/4 xl:w-1/4">
        <vx-card class="popup" :class="currentLevel === 0 ? 'highlight' : ''">
            <template slot="no-body">
                <div>
                    <div class="price-header bg-primary">
                        <p class="text-white ">Monthly</p>
                        <h1 class="letter-spacing-base text-uppercase mb-0 text-white">Free</h1>
                    </div>
                    <p class="mt-2 mb-8 text-xl font-medium text-success  text-center">
                        <span class="text-2xl ml-3">Free Evaluation Plan</span>
                    </p>
                    <p class="mt-2 mb-8 text-xl font-medium">
                        <span class="text-muted ml-4">Status: Active</span>
                    </p>
                    <p class="mt-2 mb-8 text-xl font-medium">
                        <span class="text-muted ml-4">Billing Period: Monthly</span>
                    </p>
                    <p class="mt-2 mb-8 text-xl font-medium">
                        <span class="text-muted ml-4">Renews On: 1 Sep 2020</span>
                    </p>
                    <div class="mb-8 flex items-center justify-center">
                     <vs-button
                        :icon-pack="currentLevel !== 0 ? 'feather' : ''"
                        :icon="currentLevel !== 0 ? 'icon-chevrons-right' : ''"
                        icon-after
                        class="text-center"
                        :color="currentLevel === 0 ? 'success' : 'primary'"
                        @click="currentLevel !== 0 ? modalOpen(0): null"
                        :disabled="currentLevel > 0"
                        >
                        {{currentLevel === 0 ? 'Current Plan' : 'Buy Now'}}
                      </vs-button>
                    </div>
                </div>
            </template>
        </vx-card>
    </div>
    <div class="vx-col w-full md:w-1/4 lg:w-1/4 xl:w-1/4">
        <vx-card class="popup" :class="currentLevel === 1 ? 'highlight' : ''">
            <template slot="no-body">
                <div>
                    <div class="price-header bg-primary">
                        <p class="text-white ">Monthly</p>
                        <h1 class="letter-spacing-base text-uppercase mb-0 text-white">$25.00</h1>
                    </div>
                    <p class="mt-2 mb-8 text-xl font-medium text-success text-center">
                        <span class="text-5xl ">Pro</span>
                    </p>
                    <p class="mt-2 mb-8 text-xl font-medium">
                        <span class="text-center ml-4">20 000 Requests/Month</span>
                    </p>
                    <p class="mt-2 mb-8 text-xl font-medium">
                        <span class="text-muted ml-4">$5 per extra 1 000 Requests</span>
                    </p>
                     <div class="mb-8 flex items-center justify-center">
                      <vs-button
                        :icon-pack="currentLevel !== 1 ? 'feather' : ''"
                        :icon="currentLevel !== 1 ? 'icon-chevrons-right' : ''"
                        icon-after
                        class="text-center"
                        :color="currentLevel === 1 ? 'success' : 'primary'"
                        @click="currentLevel !== 1 ? modalOpen(1): null"
                        :disabled="currentLevel > 1"
                        >
                        {{currentLevel === 1 ? 'Current Plan' : 'Buy Now'}}
                      </vs-button>
                     </div>
                </div>
            </template>
        </vx-card>
    </div>
    <div class="vx-col w-full md:w-1/4 lg:w-1/4 xl:w-1/4">
        <vx-card class="popup" :class="currentLevel === 2 ? 'highlight' : ''">
            <template slot="no-body">
                <div>
                    <div class="price-header bg-primary">
                       <p class="text-white ">Monthly</p>
                        <h1 class="letter-spacing-base text-uppercase mb-0 text-white">$125.00</h1>
                    </div>
                    <p class="mt-2 mb-8 text-xl font-medium text-success text-center">
                        <span class="text-5xl">Team</span>
                    </p>
                    <p class="mt-2 mb-8 text-xl font-medium">
                        <span class="text-center ml-4">100 000 Requests/Month</span>
                    </p>
                    <p class="mt-2 mb-8 text-xl font-medium">
                        <span class="text-center ml-4">$4 per extra 1 000 Requests</span>
                    </p>
                     <div class="mb-8 flex items-center justify-center">
                      <vs-button
                        :icon-pack="currentLevel !== 2 ? 'feather' : ''"
                        :icon="currentLevel !== 2 ? 'icon-chevrons-right' : ''"
                        icon-after
                        class="text-center"
                        :color="currentLevel === 2 ? 'success' : 'primary'"
                        @click="currentLevel !== 2 ? modalOpen(2): null"
                        :disabled="currentLevel > 2"
                        >
                        {{currentLevel === 2 ? 'Current Plan' : 'Buy Now'}}
                      </vs-button>
                     </div>
                </div>
            </template>
        </vx-card>
    </div>
    <div class="vx-col w-full md:w-1/4 lg:w-1/4 xl:w-1/4">
        <vx-card class="popup" :class="currentLevel === 3 ? 'highlight' : ''">
            <template slot="no-body">
                <div>
                    <div class="price-header bg-primary">
                        <p class="text-white ">Monthly</p>
                        <h1 class="letter-spacing-base text-uppercase mb-0 text-white">$1250.00</h1>
                    </div>
                    <p class="mt-2 mb-8 text-xl font-medium text-success text-center">
                        <span class="text-5xl">Enterprise</span>
                    </p>
                    <p class="mt-2 mb-8 text-xl font-medium">
                        <span class="text-center ml-4">100 000 Requests/Month</span>
                    </p>
                    <p class="mt-2 mb-8 text-xl font-medium">
                        <span class="text-center ml-4">$4 per extra 1 000 Requests</span>
                    </p>
                     <div class="mb-8 flex items-center justify-center">
                     <vs-button
                        :icon-pack="currentLevel !== 3 ? 'feather' : ''"
                        :icon="currentLevel !== 3 ? 'icon-chevrons-right' : ''"
                        icon-after
                        class="text-center"
                        :color="currentLevel === 3 ? 'success' : 'primary'"
                        @click="currentLevel !== 3 ? modalOpen(3): null"
                        :disabled="currentLevel > 3"
                        >
                        {{currentLevel === 3 ? 'Current Plan' : 'Buy Now'}}
                      </vs-button>
                     </div>
                </div>
            </template>
        </vx-card>
    </div>
    <!-- <vs-popup classContent="Payment" title="Warning" :active.sync="modalPayment">
      <h2>You need to log in.</h2>
      <div class="mt-8 flex flex-wrap items-center justify-end">
        <vs-button class="ml-4" color="rgba(0, 0, 0, 0.5)" @click="modalPayment=false">Cancel</vs-button>
      </div>
    </vs-popup> -->
  </div>
</template>

<script>

export default {

  data () {
    return {
      modalPayment: false,
      currentLevel: 0
    }
  },
  methods: {
    modalOpen(index) {
     if(localStorage.getItem('userInfo')==null){
      this.$vs.dialog({
        type: 'confirm',
        color: 'danger',
        title: `Confirm`,
        text: 'You have to login first!',
        accept: this.acceptAlert
      })
     }
    },
    acceptAlert() {
      this.$router.push('/pages/login').catch(() => {})
    },
  }
}
</script>

<style lang="scss">
  .popup {

    position: relative;
    padding: 0;
    overflow: hidden;
    border: 0 none;
    border-radius: 10px;
    transition: all 0.5s ease-in-out;
    -webkit-transform: scale(0.95);
    -ms-transform: scale(0.95); // IE9 only
    -o-transform: scale(0.95);
    transform: scale(0.95);

    &:hover,
    &:focus,
    &:active {
     box-shadow:0 0 16px rgba(#666666, 0.5);
      -webkit-transform: scale(1);
      -ms-transform: scale(1); // IE9 only
      -o-transform: scale(1);
      transform: scale(1);
    }

    &.highlight {
      -webkit-transform: scale(1);
      -ms-transform: scale(1); // IE9 only
      -o-transform: scale(1);
      transform: scale(1);
      z-index: 2;
      box-shadow:  0 1px 25px 1px rgba(var(--vs-primary), 1);
    }
  }
  .price-header {
    padding: 25px;
    text-align: center;

    & > .price {
      display: inline-block;
      font-size: 36px;
      font-weight: 900;
      margin-left: 0;
      margin-bottom: 12px;

      & > i {
        display: inline-block;
        margin-right: 6px;
        font-weight: bold;
      }
    }
  }
  .package-footer {
    bottom: 0;
    left: 0;
    position: absolute;
    right: 0;
    padding: 40px 50px;
    text-align: center;
  }
</style>
