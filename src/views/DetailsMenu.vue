<template>
<div>
  <v-btn text @click="$router.go(-1)" class="ml-10 mt-3">
     <v-icon>arrow_back</v-icon> BACK </v-btn>
     
  <div style="width: 20%;  margin-top:50px;" class="mx-auto orange darken-1 pb-5" >
    <Navbar />
    <h2 class="text-center white--text">Order Id : {{this.$route.params.order_id}}</h2>
    <div style="width: 90%; " class="grey lighten-4 mx-auto ">
      <ol>
      <li v-for="menu in menu" :key="menu.order_id">
        Nama Menu: {{ menu.nama_menu }} <br>
        Jumlah: {{ menu.quantity}} <br>  
        Harga: {{ menu.price }} <br>
        Catatan: {{menu.note}}
        <hr>
      </li>
    </ol>
    </div>
  </div>
  </div>
</template>

<script>
import axios from "axios";
import Navbar from "@/components/Navbar";


export default {
  data() {
    return {
      menu: [],
    }
  },

  components: {
    Navbar,
  },
  async mounted() {
    const response = await axios.get(
        `https://api.eataja.com/api/admin/order/${this.$route.params.order_id}`
    );
    this.menu = response.data.data[0].menu_order;
    console.log(response.data.data[0].menu_order);
  },
  
};
</script>
