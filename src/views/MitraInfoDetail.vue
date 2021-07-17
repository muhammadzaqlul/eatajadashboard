<template>
  <div>
    <Navbar />
    <header-mitra-detail />
    <div class="ma-3">
      <v-card>
        <v-card-title v-if="loading"> 
          Transaction {{orders.nama_restaurant}}
          <v-spacer></v-spacer>
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
          ></v-text-field>
        </v-card-title>
        <v-data-table
          :headers="headers"
          :items="order"
          :search="search"
          :items-per-page="5"
          show-group-by
        >
          <template v-slot:[`item.actions`]="{ item }">
            <div class="">
              <router-link :to="`/DetailsMenu/${item.order_id}`">
                <v-btn color="orange lighten-1" dark> Details </v-btn>
              </router-link>
            </div>
          </template>
        </v-data-table>
      </v-card>
    </div>

    <v-container>
      <v-row wrap>
        <v-col sm="12">
          <v-card outlined class="text-left ma-3">
            <LineChartMitra
              :transactionCount="transactionCount"
              :monthname="monthname"
            />
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";
import Navbar from "@/components/Navbar";
import HeaderMitraDetail from "../components/HeaderMitraDetail.vue";
import LineChartMitra from "../components/LineChartMitra.vue";

export default {
  data() {
    return {
      dialog: false,
      search: "",
      headers: [
        {
          text: "Nama Pemesan",
          align: "start",
          sortable: false,
          value: "nama_pemesan",
          groupable: false,
        },
        { text: "Order ID", value: "order_id", groupable: false },
        { text: "Total Harga", value: "total_price", groupable: false },
        { text: "Metode Bayar", value: "payment_method", groupable: false },
        { text: "Waktu Pesan", value: "waktu_order", groupable: false },
        { text: "Status", value: "status" },
        {
          text: "Actions",
          value: "actions",
          sortable: false,
          groupable: false,
        },
      ],
      order: [
        {
          nama_pemesan: "",
          order_id: "",
          total_price: "",
          payment_method: "",
          waktu_order: "",
          status: "",
        },
      ],     
      transaction: [],
      transactionCount: [],
      monthname: [],
       loading: false
    };
  },

  components: {
    Navbar,
    HeaderMitraDetail,
    LineChartMitra,
  },
  async mounted() {
    const response = await axios.get(
      `https://api.eataja.com/api/admin/mitra/${this.$route.params.id}`
    );
    
    this.orders = response.data.data[0];
    this.loading = true;
    this.order = response.data.data;
    console.log(this.order);
    console.log(this.orders);


    const res = await axios.get(
      `https://api.eataja.com/api/admin/mitra-info/${this.$route.params.id}`
    );
    this.transaction = res.data.transaction_chart;
    console.log(this.transaction);
    if (this.transaction) {
      this.transaction.forEach((item) => {
        this.monthname.push(item.monthname);
        this.transactionCount.push(item.count);
      });
    }
  },
};
</script>
