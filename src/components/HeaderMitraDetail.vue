<template>
  <div class="orange darken-1">
    <v-container >
      <v-row wrap>
        <v-col cols="12" sm="6" md="4" lg="3">
          <v-card outlined  class="text-left ma-3">
            <div class="ml-3 mt-3">
            <v-list-item two-line>
              <v-list-item-content>
                <v-list-item-title class="text-subtitle-1 grey--text text-uppercase">
                  Total Transaction
                </v-list-item-title>
                <v-list-item-subtitle class="text-h4">
                  {{resultsOrders }}
                </v-list-item-subtitle>
              </v-list-item-content>
              <v-icon large rigth>receipt_long</v-icon>
            </v-list-item>
            </div>
          </v-card>
        </v-col>

        <v-col v-for="order in orders" :key="order.id" cols="12" sm="6" md="4" lg="3">
          <v-card outlined  class="text-left ma-3">
            <div class="ml-3 mt-3">
            <v-list-item two-line>
              <v-list-item-content>
                <v-list-item-title :class="`text-subtitle-1 ${order.status === 'WAITING' ? 'primary' : order.status === 'DONE' ? 'success' : order.status === 'CANCELED' ? 'error' : 'grey'}--text text-uppercase`">
                  {{order.status === "WAITING" ? "WAITING TRANSACTION" : order.status === "DONE" ? "DONE TRANSACTION" : order.status === "CANCELED" ? "CANCELED TRANSACTION" : "PROCESS TRANSACTION"}}
                </v-list-item-title>
                <v-list-item-subtitle class="text-h4">
                  {{order.count}}
                </v-list-item-subtitle>

              </v-list-item-content>
              <v-icon v-if="order.status === 'WAITING'" large rigth>schedule</v-icon>
              <v-icon v-else-if="order.status === 'DONE'" large rigth>check_circle</v-icon>
              <v-icon v-else-if="order.status === 'CANCELED'" large rigth>cancel</v-icon>
              <v-icon v-else large rigth>receipt_long</v-icon>
            </v-list-item>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";


export default {
  
  data() {
    return {
      orders: [],
      waiting: 0,
    };
  },

  async mounted() {
    const response = await axios.get(
      `https://api.eataja.com/api/admin/mitra-info/${this.$route.params.id}`
      );
    this.orders = response.data.orders;
    this.resultsOrders = this.orders.reduce((sum, curr) => sum + curr.count, 0);
    console.log(this.orders);
  },
};


</script>