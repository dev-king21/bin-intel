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
                <statistics-card-line icon="ShoppingBagIcon" statistic="40 ms" statisticTitle="API PERSON TIME" :chartData="ordersRecevied" color="success" type="area"></statistics-card-line>
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
                            <p>82% (820 / 1 000)</p>
                            <vs-progress class="block mt-1" :percent="82" color="primary"></vs-progress>
                        </div>
                    </div>
                    <div class="vx-row font-medium p-3">
                        <div class="vx-col w-full md:w-1/2 lg:w-1/2 xl:w-1/2">
                            API Requests Today
                        </div>
                        <div class="vx-col w-full md:w-1/2 lg:w-1/2 xl:w-1/2 text-right">
                            2 236
                        </div>
                    </div>
                    <div class="vx-row font-medium p-3">
                        <div class="vx-col w-full md:w-1/2 lg:w-1/2 xl:w-1/2">
                            Surcharge API Requests
                        </div>
                        <div class="vx-col w-full md:w-1/2 lg:w-1/2 xl:w-1/2 text-right">
                            0
                        </div>
                    </div>
                    <div class="vx-row font-medium p-3">
                        <div class="vx-col w-full md:w-1/2 lg:w-1/2 xl:w-1/2">
                            Surcharge Amount (incl. in next bill)
                        </div>
                        <div class="vx-col w-full md:w-1/2 lg:w-1/2 xl:w-1/2 text-right">
                            $ 0.00
                        </div>
                    </div>
                </vx-card>
                <vx-card class="mt-5">
                    <h1>API Keys</h1>
                    <vs-divider class="my-6"></vs-divider>
                    <div class="vx-row font-medium p-3">
                        <div class="vx-col w-full md:w-1/2 lg:w-1/2 xl:w-1/2">
                            1bcea8ee878049b9253bf0206e79b2a4
                        </div>
                        <div class="vx-col w-full md:w-1/2 lg:w-1/2 xl:w-1/2 text-right">
                            <feather-icon icon="CopyIcon" class="text-primary"></feather-icon>
                            <feather-icon icon="RepeatIcon" class="text-success"></feather-icon>
                        </div>
                    </div>
                    <div class="vx-row font-medium p-3">
                        <div class="vx-col w-full md:w-1/2 lg:w-1/2 xl:w-1/2">
                            1bcea8ee878049b9253bf0206e79b2a4
                        </div>
                        <div class="vx-col w-full md:w-1/2 lg:w-1/2 xl:w-1/2 text-right">
                            <feather-icon icon="CopyIcon" class="text-primary"></feather-icon>
                            <feather-icon icon="RepeatIcon" class="text-success"></feather-icon>
                        </div>
                    </div>
                    <vs-button icon-pack="feather" icon="icon-chevrons-right" icon-after class="shadow-md w-full">Add Key</vs-button>
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
      ordersRecevied :  [{data: [3, 10, 5, 8, 6, 9]}]
    }
  },
  components: {
    StatisticsCardLine
  }
}
</script>
