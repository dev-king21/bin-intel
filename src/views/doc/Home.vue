<template>
  <div class="vx-row">
    <vx-card title="Bin Intel API Overview" class="my-4">
      <p class="my-8"><h4>Bin Intel API portfolio</h4></p>
      <p class="my-4">Bin Intel API provides meta information for any credit and debit card.</p>
      <p class="my-4">The first 6 or 8 digits of a payment card number (credit cards, debit cards, etc.) are known as the <a href="https://en.wikipedia.org/wiki/Payment_card_number#Issuer_identification_number_.28IIN.29" target="blank">Issuer Identification Numbers (IIN)</a>, previously known as Bank Identification Number (BIN). These identify the institution that issued the card to the card holder.</p>
      <p class="my-8"><h4>Authorization</h4></p>
      <p class="my-4">We provide authenticated API keys.</p>
      <p class="my-4">In order to use the APIs, <a :href="signup" target="blank">sign up</a> for a desired plan.</p>
      <p class="my-4">We provide the same API response in our free as well as paid plans over https. Response in Bulk cards Lookup and Request Origin Support are not available for free plans, however.</p>
      <p class="my-8"><h4>API Key</h4></p>
      <p class="my-4">You can make authorized requests to our API by passing API key as a query parameter. To get your API key, login to our site and get your API key from there. We strongly discourage the use of API key in client-side JavaScript as it will expose your API key to the public.</p>
      <p class="my-8"><h4>Security / SSL</h4></p>
      <p class="my-4">We take security seriously and all of our API endpoints are served over a secure HTTPS connection for all users, even if you are on the free plan.</p>
      <p class="my-8"><h4>API SDKs</h4></p>
      <p class="my-4">To facilitate the developers, we have added some SDKs for various programming languages. The detailed documentation on how to use these SDKs is available in the respective SDK's documentation page linked below.</p>
      <p class="my-4">Our SDKs are also available on Github. Feel free to help us improve them. SDKs. Following are the available SDKs:</p>
      <ul>
          <li class="flex mb-3 justify-between">
              <span class="flex items-center">
                  <span class="inline-block h-4 w-4 rounded-full mr-2 bg-white border-3 border-solid border-primary"></span>
                  <span class="font-semibold"><a href="/doc/java-sdk">Bin Intel API Java SDK</a></span>
              </span>
          </li>
          <li class="flex mb-3 justify-between">
              <span class="flex items-center">
                  <span class="inline-block h-4 w-4 rounded-full mr-2 bg-white border-3 border-solid border-primary"></span>
                  <span class="font-semibold"><a href="/doc/csharp-sdk">Bin Intel API C-Sharp .Net SDK</a></span>
              </span>
          </li>
          <li class="flex mb-3 justify-between">
              <span class="flex items-center">
                  <span class="inline-block h-4 w-4 rounded-full mr-2 bg-white border-3 border-solid border-primary"></span>
                  <span class="font-semibold"><a href="/doc/php-sdk">Bin Intel API PHP SDK</a></span>
              </span>
          </li>
          <li class="flex mb-3 justify-between">
              <span class="flex items-center">
                  <span class="inline-block h-4 w-4 rounded-full mr-2 bg-white border-3 border-solid border-primary"></span>
                  <span class="font-semibold"><a href="/doc/javascript-sdk">Bin Intel API JavaScript SDK</a></span>
              </span>
          </li>
          <li class="flex mb-3 justify-between">
              <span class="flex items-center">
                  <span class="inline-block h-4 w-4 rounded-full mr-2 bg-white border-3 border-solid border-primary"></span>
                  <span class="font-semibold"><a href="/doc/jquery-sdk">Bin Intel API JQuery SDK</a></span>
              </span>
          </li>
      </ul>
    </vx-card>
  </div>
</template>
<script>
export default {
  data () {
    return {
      signup: '/pages/register'
    }
  }
}
</script>
