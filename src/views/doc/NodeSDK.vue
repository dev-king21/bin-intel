<template>
    <vx-card title="Bin Intel SDK for Node.js" class="my-4" >
      <p class="my-4">SDK getting Bin-Card Information for node.js</p>
      <p class="my-4">You can get information of a or bulk bin credit card using this sdk.</p>
      <p class="my-8"><h4>Installing</h4></p>
      <p class="my-4">Using npm:</p>
      <prism language="js" class="rounded-lg">  $ npm install bin-intel-sdk</prism>
      <p class="my-4">Using cdn:</p>
      <prism language="js" class="rounded-lg">  &lt;script src="https://unpkg.com/bin-indel-sdk/dist/bin-intel-sdk.min.js"&gt;&lt;/script&gt;</prism>
      <p class="my-8"><h4>Example</h4></p>
      <p class="my-4">To create sdk Instance, you should import with require() use the following approach:</p>
      <prism language="js" class="rounded-lg">  var BinIntelSDK = require('bin-intel-sdk');</prism>
      <p class="my-4"><strong>Create a new SDK Instance with api key</strong></p>
      <prism language="js" class="rounded-lg">  var bis = new BinIntelSDK("YOUR-API-KEY");</prism>
      <p class="my-4"><strong>Get information of a credit card</strong></p>
      <prism language="js" class="rounded-lg">bis.getCardInfo('47346833').then(res => {
        console.log(res)
    });</prism>
      <p class="my-4"><strong>Get information of multiple bulk of credit cards</strong></p>
      <prism language="js" class="rounded-lg">bis.getBulkCardsInfo(CardsArray).then((res) => {
        console.log("result", JSON.stringify(res));
    });</prism>
      <p class="my-4"><strong>Here, CardsArray can be one type of the following.</strong></p>
      <p class="my-4 ml-4">Array of data which has number and numeric string.</p>
      <p class="my-4 ml-4">a number and a numeric string.</p>
      <p class="my-4"><strong>Example</strong></p>
      <prism language="js" class="rounded-lg">&nbsp;const CardsArray = ["47346833", "47346834", "47346835", "47346833", "47346833"];
&nbsp;const CardsArray = ["47346833", "47346834", "47346835", "47346833", "47346840"];
&nbsp;const CardsArray = "47346838";
&nbsp;const CardsArray = "47346838";</prism>
      <p class="my-4"><strong>Result</strong></p>
      <prism language="js" class="rounded-lg">{
  "status": 200,
  "data": [
      {
        "card": "47346839",
        "info": {
          "number": {},
          "scheme": "visa",
          "country": {
            "numeric": "840",
            "alpha2": "US",
            "name": "United States of America",
            "emoji": "��",
            "currency": "USD",
            "latitude": 38,
            "longitude": -97
          },
          "bank": {}
        }
      },
      {
        "card": "47346839",
        "info": {
          "number": {},
          "scheme": "visa",
          "country": {
            "numeric": "840",
            "alpha2": "US",
            "name": "United States of America",
            "emoji": "��",
            "currency": "USD",
            "latitude": 38,
            "longitude": -97
          },
          "bank": {}
        }
      },
      {
        "card": "47346839",
        "info": {
          "number": {},
          "scheme": "visa",
          "country": {
            "numeric": "840",
            "alpha2": "US",
            "name": "United States of America",
            "emoji": "��",
            "currency": "USD",
            "latitude": 38,
            "longitude": -97
          },
          "bank": {}
        }
      }
  ]
}</prism>
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
