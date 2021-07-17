<template>
<div>
<Navbar />
  <div>
    <v-container >
      <v-row wrap>
        <v-col cols="12" sm="6" md="4" lg="3">
          <v-card outlined  class="text-left ma-3">
            <div class="ml-3 mt-3">
            <v-list-item two-line>
              <v-list-item-content>
                <v-list-item-title class="text-subtitle-1 grey--text text-uppercase">
                  Customer User
                </v-list-item-title>
                <v-list-item-subtitle class="text-h4">
                  asdasd
                </v-list-item-subtitle>
              </v-list-item-content>
              <v-icon large rigth>people</v-icon>
            </v-list-item>
            </div>
            
            <v-card-action>
              <v-btn text color="grey">
                <v-icon small left red> message </v-icon>
                <span>Message</span>
              </v-btn>
            </v-card-action>
          </v-card>
        </v-col>

        <v-col cols="12" sm="6" md="4" lg="3">
          <v-card outlined class="text-left ma-3">
            <div class="ml-3 mt-3">
            <v-list-item two-line>
              <v-list-item-content>
                <v-list-item-title class="text-subtitle-1 grey--text text-uppercase">
                  Total Mitra
                </v-list-item-title>
                <v-list-item-subtitle class="text-h4">
                  asdds
                </v-list-item-subtitle>
              </v-list-item-content>
              <v-icon large rigth>store</v-icon>
            </v-list-item>
            </div>

            <v-card-action>
              <v-btn text color="grey">
                <v-icon small left red> message </v-icon>
                <span>Message</span>
              </v-btn>
            </v-card-action>
          </v-card>
        </v-col>

        <v-col cols="12" sm="6" md="4" lg="3">
          <v-card outlined class="text-left ma-3">
            <div class="ml-3 mt-3">
            <v-list-item two-line>
              <v-list-item-content>
                <v-list-item-title class="text-subtitle-1 grey--text text-uppercase">
                  Total Transaction
                </v-list-item-title>
                <v-list-item-subtitle class="text-h4">
                  asdasdsa
                </v-list-item-subtitle>
              </v-list-item-content>
              <v-icon large rigth>receipt_long</v-icon>
            </v-list-item>
            </div>
            <v-card-action>
              <v-btn text color="grey">
                <v-icon small left red> message </v-icon>
                <span>Message</span>
              </v-btn>
            </v-card-action>
          </v-card>
        </v-col>

        <v-col cols="12" sm="6" md="4" lg="3">
          <v-card outlined class="text-left ma-3">
            <div class="ml-3 mt-3">
            <v-list-item two-line>
              <v-list-item-content>
                <v-list-item-title class="text-subtitle-1 grey--text text-uppercase">
                  Growth Transaction
                </v-list-item-title>
                <v-list-item-subtitle class="text-h4">
                  asdsadsadsa %
                </v-list-item-subtitle>
              </v-list-item-content>
              <v-icon large rigth>insights</v-icon>
            </v-list-item>
            </div>
            <v-card-action>
              <v-btn text color="grey">
                <v-icon small left red> message </v-icon>
                <span>Message</span>
              </v-btn>
            </v-card-action>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
  
</div>
</template>

<script>
import Navbar from "@/components/Navbar";

export default {
    components: {
        Navbar,
    }
}
</script>

<style>

</style>