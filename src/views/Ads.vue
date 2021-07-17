<template>
  <div>
    <Navbar />
    <div class="ma-10">
      <h1>Ads Control Center</h1>
    </div>
    <div class="ma-10">
      <v-row>
        <v-col v-for="(banner, index) in banners" :key="index" sm="12" md="4">
          <h1>Ads</h1>
          <v-img
            max-height="100%"
            max-width="100%"
            :src="`https://api.eataja.com/storage/${banner.banner_photo}`"
            class="ml-auto"
          ></v-img>
          <v-file-input
            runcate-length="15"
            placeholder="Input Photo"
            accept="image/*"
            v-model="photo"
            @change="photo = e.target.file[0]"
          >
          </v-file-input>
          <v-btn @click="upload(banner.id)" class="primary">Upload</v-btn>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import axios from "axios";
export default {
  components: {
    Navbar,
  },
  data() {
    return {
      banners: [],
      photo: ""
    };
  },
  mounted() {
    axios
      .get("https://api.eataja.com/api/banner")
      .then((res) => {
        this.banners = res.data.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  methods: {
    upload(id) {
        let formData = new FormData();
        formData.append('photo', this.photo);


      axios
        .post("https://api.eataja.com/api/update-banner/" + id, formData, { headers: {"Content-Type": "multipart/form-data"} })
        .then(() => {
          this.$router.go()
        })
        .catch((err) => {
          console.log(err);
        });
    }
  },
};
</script>

<style>
</style>
