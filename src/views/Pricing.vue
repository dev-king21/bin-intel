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
        <vx-card>
            <template slot="no-body">
                <div class="p-8 clearfix">
                    <div>
                        <h1 class="font-bold text-5xl">
                            <p class="text-lg">Monthly</p>
                            <span>free</span>
                        </h1>
                    </div>
                    <p class="mt-2 mb-8 text-xl font-medium text-success">
                        <span class="text-xl">Free Evaluation Plan</span>
                    </p>
                    <p class="mt-2 mb-8 text-xl font-medium">
                        <span class="text-muted">Status: Active</span>
                    </p>
                    <p class="mt-2 mb-8 text-xl font-medium">
                        <span class="text-muted">Billing Period: Monthly</span>
                    </p>
                    <p class="mt-2 mb-8 text-xl font-medium">
                        <span class="text-muted">Renews On: 1 Sep 2020</span>
                    </p>
                    <vs-button icon-pack="feather" icon="icon-chevrons-right" icon-after class="shadow-md w-full" disabled>Buy Now</vs-button>
                </div>
            </template>
        </vx-card>
    </div>
    <div class="vx-col w-full md:w-1/4 lg:w-1/4 xl:w-1/4">
        <vx-card>
            <template slot="no-body">
                <div class="p-8 clearfix">
                    <div>
                        <h1 class="font-bold text-5xl">
                            <p class="text-lg">Monthly</p>
                            <span>$25.00</span>
                        </h1>
                    </div>
                    <p class="mt-2 mb-8 text-xl font-medium text-success">
                        <span class="text-5xl">Pro</span>
                    </p>
                    <p class="mt-2 mb-8 text-xl font-medium">
                        <span class="text-muted">20 000 Requests/Month</span>
                    </p>
                    <p class="mt-2 mb-8 text-xl font-medium">
                        <span class="text-muted">$5 per extra 1 000 Requests</span>
                    </p>
                    <vs-button icon-pack="feather" icon="icon-chevrons-right" icon-after class="shadow-md w-full">Buy Now</vs-button>
                </div>
            </template>
        </vx-card>
    </div>
    <div class="vx-col w-full md:w-1/4 lg:w-1/4 xl:w-1/4">
        <vx-card>
            <template slot="no-body">
                <div class="p-8 clearfix">
                    <div>
                        <h1 class="font-bold text-5xl">
                            <p class="text-lg">Monthly</p>
                            <span>$125.00</span>
                        </h1>
                    </div>
                    <p class="mt-2 mb-8 text-xl font-medium text-success">
                        <span class="text-5xl">Team</span>
                    </p>
                    <p class="mt-2 mb-8 text-xl font-medium">
                        <span class="text-muted">100 000 Requests/Month</span>
                    </p>
                    <p class="mt-2 mb-8 text-xl font-medium">
                        <span class="text-muted">$4 per extra 1 000 Requests</span>
                    </p>
                    <vs-button icon-pack="feather" icon="icon-chevrons-right" icon-after class="shadow-md w-full">Buy Now</vs-button>
                </div>
            </template>
        </vx-card>
    </div>
    <div class="vx-col w-full md:w-1/4 lg:w-1/4 xl:w-1/4">
        <vx-card>
            <template slot="no-body">
                <div class="p-8 clearfix">
                    <div>
                        <h1 class="font-bold text-5xl">
                            <p class="text-lg">Monthly</p>
                            <span>$1250.00</span>
                        </h1>
                    </div>
                    <p class="mt-2 mb-8 text-xl font-medium text-success">
                        <span class="text-5xl">Enterprise</span>
                    </p>
                    <p class="mt-2 mb-8 text-xl font-medium">
                        <span class="text-muted">100 000 Requests/Month</span>
                    </p>
                    <p class="mt-2 mb-8 text-xl font-medium">
                        <span class="text-muted">$4 per extra 1 000 Requests</span>
                    </p>
                    <vs-button icon-pack="feather" icon="icon-chevrons-right" icon-after class="shadow-md w-full">Buy Now</vs-button>
                </div>
            </template>
        </vx-card>
    </div>

  </div>
</template>

<style lang="scss" scoped>
#ecommerce-wishlist-demo {
    .item-view-primary-action-btn {
        color: #2c2c2c !important;
        background-color: #f6f6f6;
        min-width: 50%;
    }

    .item-view-secondary-action-btn {
        min-width: 50%;
    }
}
</style>
