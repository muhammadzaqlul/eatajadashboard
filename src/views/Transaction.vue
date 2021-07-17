<template>
  <div>
    <Navbar />
    <HeaderTransaction />
    <div class="ma-3">
      <v-card>
        <v-card-title>
          Transaction
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
          show-group-by
           >
        <template v-slot:[`item.actions`]="{ item }">
        <div class="">

          <router-link :to="`/DetailsMenu/${item.order_id}`">

        <v-btn
          color="orange lighten-1"
          dark
        >
          Details
        </v-btn>
          </router-link>
        </div>
        </template>

      </v-data-table>
      </v-card>
    </div>
  </div>
</template>


<script>
import axios from "axios";
import HeaderTransaction from "../components/HeaderTransaction.vue";
import Navbar from "@/components/Navbar";

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
        { text: "Order ID", value: "order_id", groupable: false, },
        { text: "Total Harga", value: "total_price", groupable: false },
        { text: "Metode Bayar", value: "payment_method", groupable: false },
        { text: "Waktu Pesan", value: "waktu_order", groupable: false },
        { text: "Status", value: "status" },
        { text: "Actions", value: "actions", sortable: false, groupable: false },
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
    };
  },
  components: {
    HeaderTransaction,
    Navbar,
  },
  async mounted() {
    const response = await axios.get(
      "https://api.eataja.com/api/mitra/get-all-order-for-mitra"
    );
    this.order = response.data.data;
  },
};
</script>

<style>
</style>
