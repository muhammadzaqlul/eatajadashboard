<template>
  <div class="orange darken-1">
    <v-container>
      <v-row wrap>
        <v-col cols="12" sm="6" md="4" lg="3">
          <v-card outlined class="text-left ma-3">
            <div class="ml-3 mt-3">
              <v-list-item two-line>
                <v-list-item-content>
                  <v-list-item-title
                    class="text-subtitle-1 grey--text text-uppercase"
                  >
                    Customer User
                  </v-list-item-title>
                  <v-list-item-subtitle class="text-h4">
                    {{ dashboard.total_cust }}
                  </v-list-item-subtitle>
                </v-list-item-content>
                <v-icon large rigth>people</v-icon>
              </v-list-item>
            </div>
            <v-card-text>
              <span class="text-h6 success--text">
                {{Math.round(dashboard.total_cust / target.targetCust * 100)}} % Target reached for this month
              </span>
              <br />
              <span>Target this month: {{ target.targetCust }} </span>
            </v-card-text>

            <v-card-action>
              <v-dialog v-model="dialog" persistent max-width="300px">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn text color="grey" v-bind="attrs" v-on="on">
                    <v-icon small left red> change_circle </v-icon>
                    <span>Change Target</span>
                  </v-btn>
                </template>
                <v-card>
                  <v-card-title>
                    <span class="text-h5">Change Target</span>
                  </v-card-title>
                  <v-card-text>
                    <v-text-field
                      label="Set Target Here..."
                      v-model="target.targetCust"
                      required
                    ></v-text-field>
                  </v-card-text>
                  <v-card-actions>
                    <v-btn color="blue darken-1" text @click="dialog = false">
                      Close
                    </v-btn>
                    <v-btn color="blue darken-1" text @click="save">
                      Save
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-card-action>
          </v-card>
        </v-col>

<!-- Target Mitra -->

        <v-col cols="12" sm="6" md="4" lg="3">
          <v-card outlined class="text-left ma-3">
            <div class="ml-3 mt-3">
              <v-list-item two-line>
                <v-list-item-content>
                  <v-list-item-title
                    class="text-subtitle-1 grey--text text-uppercase"
                  >
                    Total Mitra
                  </v-list-item-title>
                  <v-list-item-subtitle class="text-h4">
                    {{ dashboard.total_mitra }}
                  </v-list-item-subtitle>
                </v-list-item-content>
                <v-icon large rigth>store</v-icon>
              </v-list-item>
            </div>
            <v-card-text>
              <span class="text-h6 success--text">
                {{Math.round(dashboard.total_mitra / target.targetMitra * 100)}} % Target reached for this month
              </span>
              <br />
              <span>Target this month: {{ target.targetMitra }} </span>
            </v-card-text>
            <v-card-action>
              <v-dialog v-model="dialog1" persistent max-width="300px">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn text color="grey" v-bind="attrs" v-on="on">
                    <v-icon small left red> change_circle </v-icon>
                    <span>Change Target</span>
                  </v-btn>
                </template>
                <v-card>
                  <v-card-title>
                    <span class="text-h5">Change Target</span>
                  </v-card-title>
                  <v-card-text>
                    <v-text-field
                      label="Set Target Here..."
                      v-model="target.targetMitra"
                      required
                    ></v-text-field>
                  </v-card-text>
                  <v-card-actions>
                    <v-btn color="blue darken-1" text @click="dialog1 = false">
                      Close
                    </v-btn>
                    <v-btn color="blue darken-1" text @click="save">
                      Save
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-card-action>
          </v-card>
        </v-col>

<!-- Target Transaction -->

        <v-col cols="12" sm="6" md="4" lg="3">
          <v-card outlined class="text-left ma-3">
            <div class="ml-3 mt-3">
              <v-list-item two-line>
                <v-list-item-content>
                  <v-list-item-title
                    class="text-subtitle-1 grey--text text-uppercase"
                  >
                    Total Transaction
                  </v-list-item-title>
                  <v-list-item-subtitle class="text-h4">
                    {{ dashboard.total_transaction }}
                  </v-list-item-subtitle>
                </v-list-item-content>
                <v-icon large rigth>receipt_long</v-icon>
              </v-list-item>
            </div>
            <v-card-text>
              <span class="text-h6 success--text">
                {{Math.round(dashboard.total_transaction / target.targetTransaction * 100)}} % Target reached for this month
              </span>
              <br />
              <span>Target this month: {{ target.targetTransaction }}</span>
            </v-card-text>
            <v-card-action>
              <v-dialog v-model="dialog2" persistent max-width="300px">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn text color="grey" v-bind="attrs" v-on="on">
                    <v-icon small left red> change_circle </v-icon>
                    <span>Change Target</span>
                  </v-btn>
                </template>
                <v-card>
                  <v-card-title>
                    <span class="text-h5">Change Target</span>
                  </v-card-title>
                  <v-card-text>
                    <v-text-field
                      label="Set Target Here..."
                      v-model="target.targetTransaction"
                      required
                    ></v-text-field>
                  </v-card-text>
                  <v-card-actions>
                    <v-btn color="blue darken-1" text @click="dialog2 = false">
                      Close
                    </v-btn>
                    <v-btn color="blue darken-1" text @click="save">
                      Save
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-card-action>
          </v-card>
        </v-col>

        <v-col cols="12" sm="6" md="4" lg="3">
          <v-card outlined class="text-left ma-3">
            <div class="ml-3 mt-3">
              <v-list-item two-line>
                <v-list-item-content>
                  <v-list-item-title
                    class="text-subtitle-1 grey--text text-uppercase"
                  >
                    Verified Mitra
                  </v-list-item-title>
                  <v-list-item-subtitle class="text-h6 success--text">
                    Verified : {{ dashboard.verified_mitra }}
                  </v-list-item-subtitle>
                  <v-list-item-subtitle class="text-h6 error--text">
                    Not Verified : {{ dashboard.not_verified_mitra }}
                  </v-list-item-subtitle>
                </v-list-item-content>
                <v-icon large rigth>verified</v-icon>
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
      dashboard: "",
      target: {
        targetCust: "",
        targetMitra: "",
        targetTransaction: "",
      },
      dialog: false,
      dialog1: false,
      dialog2: false,
    };
  },

  async mounted() {
    const response = await axios.get("https://api.eataja.com/api/admin");
    this.dashboard = response.data;
    this.target.targetCust = response.data.target.total_customer;
    this.target.targetMitra = response.data.target.total_mitra;
    this.target.targetTransaction = response.data.target.total_transaction;
    console.log(this.dashboard);
  },

  methods: {
    save() {
       const headers = {
            "Authorization": "Bearer " + localStorage.getItem("token")
        };

        axios.post("https://api.eataja.com/api/admin/update-target",{
            total_customer: this.target.targetCust,
            total_mitra: this.target.targetMitra,
            total_transaction: this.target.targetTransaction,
            
        }, { headers }).then((response) => {
            console.log(response)
            this.dialog = false;
            this.dialog1 = false;
            this.dialog2 = false;
        }).catch((err) => {
            console.log(err)
        }) 
    }
  }
};
</script>