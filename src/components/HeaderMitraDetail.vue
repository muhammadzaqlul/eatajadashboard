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
                  {{orders[0].count + orders[1].count + orders[2].count}}
                </v-list-item-subtitle>
              </v-list-item-content>
              <v-icon large rigth>receipt_long</v-icon>
            </v-list-item>
            </div>
          </v-card>
        </v-col>

        <v-col cols="12" sm="6" md="4" lg="3">
          <v-card outlined class="text-left ma-3">
            <div class="ml-3 mt-3">
            <v-list-item two-line>
              <v-list-item-content>
                <v-list-item-title class="text-subtitle-1  success--text text-uppercase">
                  Done Transaction
                </v-list-item-title>
                <v-list-item-subtitle class="text-h4">
                  {{orders[0].count}}
                </v-list-item-subtitle>
              </v-list-item-content>
              <v-icon large rigth>check_circle</v-icon>
            </v-list-item>
            </div>
          </v-card>
        </v-col>

        <v-col cols="12" sm="6" md="4" lg="3">
          <v-card outlined class="text-left ma-3">
            <div class="ml-3 mt-3">
            <v-list-item two-line>
              <v-list-item-content>
                <v-list-item-title class="text-subtitle-1 primary--text text-uppercase">
                  Waiting Transaction
                </v-list-item-title>
                <v-list-item-subtitle class="text-h4">
                  {{orders[1].count}}
                </v-list-item-subtitle>
              </v-list-item-content>
              <v-icon large rigth>schedule</v-icon>
            </v-list-item>
            </div>
          </v-card>
        </v-col>

        <v-col cols="12" sm="6" md="4" lg="3">
          <v-card outlined class="text-left ma-3">
            <div class="ml-3 mt-3">
            <v-list-item two-line>
              <v-list-item-content>
                <v-list-item-title class="text-subtitle-1  error--text text-uppercase">
                  Canceled Transaction
                </v-list-item-title>
                <v-list-item-subtitle class="text-h4">
                  {{orders[2].count}}
                </v-list-item-subtitle>
              </v-list-item-content>
              <v-icon large rigth>cancel</v-icon>
            </v-list-item>
            </div>
            <!-- <v-card-action>
              <v-btn text color="grey">
                <v-icon small left red> message </v-icon>
                <span>Message</span>
              </v-btn>
            </v-card-action> -->
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
    console.log(this.orders);
  },
};
</script>