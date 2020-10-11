<template>
    <vx-card title="Bin Intel API" class="my-4" >
      <p class="my-4">Bin Inetl API can be used to get real-time and accurate meta information for any credit card and debit card.</p>
      <p class="my-8"><h4>Bin Intel API Request Example</h4></p>
      <p class="my-4">{{request_url}}</p>
      <p class="my-8"><h4>Reference to Bin Intel API Response</h4></p>
      <prism language="js" class="rounded-lg">
{
  "result":{
    "card": "45717360",
    "info":{
      "number":{
        "length": 16,
        "luhn": true
      },
      "scheme": "visa",
      "type": "debit",
      "brand": "Visa/Dankort",
      "prepaid": false,
      "country":{
        "numeric": "208",
        "alpha2": "DK",
        "name": "Denmark",
        "emoji": "🇩🇰",
        "currency": "DKK",
        "latitude": 56,
        "longitude": 10
      },
      "bank":{
        "name": "Jyske Bank",
        "url": "www.jyskebank.dk",
        "phone": "+4589893300",
        "city": "Hjørring"
      }
    }
  }
}
      </prism>
    </vx-card>
</template>
<script>
import Prism from 'vue-prism-component'

export default {
  components: {
    Prism
  }
}
</script>
