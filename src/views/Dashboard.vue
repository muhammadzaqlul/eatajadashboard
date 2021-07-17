<template>
  <div class="dashboard">
    <Navbar />
    <Header />

    <v-container class="my-5">
      <!-- Chart -->
      <v-container>
        <v-row wrap>
          <v-col sm="12">
            <v-card outlined class="text-left ma-3">
              <LineChart
                :transactionCount="transactionCount"
                :monthname="monthname"
              />
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col sm="12" md="6">
            <v-card outlined class="text-left ma-3">
              <BarChartCustomer
                :countCust="countCust"
                :monthnameCust="monthnameCust"
              />
            </v-card>
          </v-col>
          <v-col sm="12" md="6">
            <v-card outlined class="text-left ma-3">
              <BarChartMitra
                :countMitra="countMitra"
                :monthnameMitra="monthnameMitra"
              />
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-container>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import LineChart from "../components/LineChart.vue";
import BarChartMitra from "../components/BarChartMitra.vue";
import BarChartCustomer from "../components/BarChartCustomer.vue";
import Navbar from "@/components/Navbar";
import axios from "axios";

export default {
  name: "Dashboard",
  data: () => ({
    transaction: [],
    transactionCount: [],
    monthname: [],

    customer: [],
    monthnameCust: [],
    countCust: [],

    mitra: [],
    monthnameMitra: [],
    countMitra: [],
  }),

  async mounted() {
    if (localStorage.getItem("token") === null) {
      this.$router.push("/");
    }
    this.loaded = false;
    const response = await axios.get("https://api.eataja.com/api/admin");
    this.transaction = response.data.transaction_chart;
    this.customer = response.data.customer;
    this.mitra = response.data.mitra;

    console.log(this.customer);

    if (this.transaction) {
      this.transaction.forEach((item) => {
        this.monthname.push(item.monthname);
        this.transactionCount.push(item.count);
      });
    }
    if (this.customer) {
      this.customer.forEach((item) => {
        this.monthnameCust.push(item.monthname);
        this.countCust.push(item.count);
      });
    }
    if (this.mitra) {
      this.mitra.forEach((item) => {
        this.monthnameMitra.push(item.monthname);
        this.countMitra.push(item.count);
      });
    }
  },
  components: {
    Navbar,
    Header,
    LineChart,
    BarChartMitra,
    BarChartCustomer,
  },
};
</script>


<style>
.project.complete {
  border-left: 4px solid #3cd1c2;
}

.project.ongoing {
  border-left: 4px solid orange;
}

.project.overdue {
  border-left: 4px solid tomato;
}

.v-chip.complete {
  background: green;
}

.v-chip.ongoing {
  background: orange;
}

.v-chip.overdue {
  background: tomato;
}
</style>
