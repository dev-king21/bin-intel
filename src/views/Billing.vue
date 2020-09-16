<!-- =========================================================================================
  File Name: ECommerceWishList.vue
  Description: eCommerce Wish List Page
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
  <div class="vx-row">
    <div class="vx-col w-full md:w-1/4 lg:w-1/4 xl:w-1/4">
        <vx-card class="popup" :class="isSelected ? 'highlight' : ''">
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
                      <vs-button icon-pack="feather" icon="icon-chevrons-right" icon-after class="text-center" disabled>Buy Now</vs-button>
                    </div>
                </div>
            </template>
        </vx-card>
    </div>
    <div class="vx-col w-full md:w-1/4 lg:w-1/4 xl:w-1/4">
        <vx-card class="popup">
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
                        icon-pack="feather"
                        icon="icon-chevrons-right"
                        icon-after
                        class="text-center"
                        @click="modalOpen(1)"
                        >
                        Buy Now
                      </vs-button>
                     </div>
                </div>
            </template>
        </vx-card>
    </div>
    <div class="vx-col w-full md:w-1/4 lg:w-1/4 xl:w-1/4">
        <vx-card class="popup">
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
                        icon-pack="feather"
                        icon="icon-chevrons-right"
                        icon-after
                        class="text-center"
                        @click="modalOpen(2)"
                        >
                        Buy Now
                      </vs-button>
                     </div>
                </div>
            </template>
        </vx-card>
    </div>
    <div class="vx-col w-full md:w-1/4 lg:w-1/4 xl:w-1/4">
        <vx-card class="popup">
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
                        icon-pack="feather"
                        icon="icon-chevrons-right"
                        icon-after
                        class="text-center"
                        @click="modalOpen(3)"
                        >
                        Buy Now
                      </vs-button>
                     </div>
                </div>
            </template>
        </vx-card>
    </div>
    <vs-popup classContent="Payment" :title="modalTitle" :active.sync="modalPayment">
      <h2>Your total is <label class="text-success">$ {{price}}</label></h2>
      <div class="flex flex-col py-4 px-8">
        <div id="card"></div>
      </div>
      <div class="mt-8 flex flex-wrap items-center justify-end">
        <vs-button @click="purchase">Purchase</vs-button>
        <vs-button class="ml-4" color="rgba(0, 0, 0, 0.5)" @click="modalPayment=false">Cancel</vs-button>
      </div>
    </vs-popup>
  </div>
</template>

<script>
const stripe = Stripe('pk_test_OQyIWNfHPcauzJrpOaSXq3D1'), elements = stripe.elements()
let card = undefined

const orderComplete = function (clientSecret) {
  console.log('order complete', clientSecret)
  stripe.retrievePaymentIntent(clientSecret).then(function (result) {
    const paymentIntent = result.paymentIntent
    const paymentIntentJson = JSON.stringify(paymentIntent, null, 2)
    console.log(paymentIntentJson)
  })
}

const handleAction = function (clientSecret) {
  stripe.handleCardAction(clientSecret).then(function (data) {
    if (data.error) {
      console.log('Your card was not authenticated, please try again')
    } else if (data.paymentIntent.status === 'requires_confirmation') {
      fetch('/https://dmc9l6wlyb.execute-api.us-east-1.amazonaws.com/beta/stripe-payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': localStorage.getItem('IdToken')
        },
        body: JSON.stringify({
          paymentIntentId: data.paymentIntent.id
        })
      })
        .then(function (result) {
          return result.json()
        })
        .then(function (json) {
          console.log(json)
          if (json.error) {
            console.log(json.error)
          } else {
            console.log('handle action', clientSecret)
            orderComplete(clientSecret)
          }
        })
    }
  })
}

const pay = function (paymentMethodId) {
  stripe.createPaymentMethod('card', card)
    .then(function (result) {
      if (result.error) {
        console.log(result.error.message)
      } else {
        const orderData = {
          items: [{ id: 'photo-subscription' }],
          currency: 'usd'
        }
        console.log(paymentMethodId)
        orderData.paymentMethodId = result.paymentMethod.id

        return fetch('https://dmc9l6wlyb.execute-api.us-east-1.amazonaws.com/beta/stripe-payment', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('IdToken')
          },
          body: JSON.stringify(orderData)
        })
      }
    })
    .then(function (result) {
      return result.json()
    })
    .then(function (response) {
      console.log(response)
      if (response.error) {
        console.log(response.error)
      } else if (response.requiresAction) {
        handleAction(response.clientSecret)
      } else {
        orderComplete(response.clientSecret)
      }
    })
}

const style = {
  base: {
    'iconColor': '#666EE8',
    'color': '#151515',
    'lineHeight': '40px',
    'fontWeight': 300,
    'fontFamily': 'Arial',
    'fontSize': '18px',
    '::placeholder': {
      color: '#b2b2b2'
    }
  }
}

export default {

  data () {
    return {
      modalPayment: false,
      amount: 100,
      modalTitle: '',
      price: '',
      isSelected: true
    }
  },
  mounted () {
    card = elements.create('card', {style})
    card.mount('#card')
  },
  methods: {
   
    purchase () {
      /* stripe.createToken(card).then(function (result) {
        console.log(result)
        // Access the token with result.token
      }) */
      pay(1)
    },
    modalOpen (item) {
      switch (item) {
      case 1:
        this.modalPayment = true
        this.amount = 2500
        this.modalTitle = 'Purchase Pro Monthly'
        this.price = '25.00'
        break
      case 2:
        this.modalPayment = true
        this.amount = 12500
        this.modalTitle = 'Purchase Team Monthly'
        this.price = '125.00'
        break
      case 3:
        this.modalPayment = true
        this.amount = 125000
        this.price = '1250.00'
        this.modalTitle = 'Purchase Team Annually'
        break
      }
    }
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
