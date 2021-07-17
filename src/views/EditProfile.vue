<template>
<div>
  <Navbar />
  <div class="orange darken-1 ma-10 pt-1 rounded mx-auto" style="height: 500px; width: 850px;">
  <div class=" mx-5 mt-3 grey lighten-5 rounded" style="height: 460px">
    <div class="px-5 pt-4">
    </div>
    <div class="mx-10">
    <v-card
    class="overflow-hidden"
    color=""
  >
    <v-toolbar
      flat
      color="orange lighten-1"
    >
      <v-icon>mdi-account</v-icon>
      <v-toolbar-title class="font-weight-light">
        User Profile
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        color="orange darken-3"
        fab
        small
        @click="isEditing = !isEditing"
      >
        <v-icon v-if="isEditing">
          mdi-close
        </v-icon>
        <v-icon v-else>
          mdi-pencil
        </v-icon>
      </v-btn>
    </v-toolbar>
    <v-card-text>
      <v-text-field
        :disabled="!isEditing"
        color="white"
        label="Name"
        v-model="form.name"
      ></v-text-field>

      <v-text-field
        :disabled="!isEditing"
        color="white"
        label="E-Mail"
        v-model="form.email"
      ></v-text-field>

      <v-text-field
        :disabled="!isEditing"
        color="white"
        label="Phone"
          v-model="form.phone"
      ></v-text-field>

      <v-text-field
        :disabled="!isEditing"
        color="white"
        label="Address"
        v-model="form.address"
      ></v-text-field>


    </v-card-text>
    <v-divider></v-divider>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn
        :disabled="!isEditing"
        color="success"
        @click="save"
      >
        Save
      </v-btn>
    </v-card-actions>
    <v-snackbar
      v-model="hasSaved"
      :timeout="2000"
      absolute
      bottom
      left
    >
      Your profile has been updated
    </v-snackbar>
  </v-card>
    </div>
  </div>
  </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import axios from 'axios'
export default {
    data () {
      return {
        hasSaved: false,
        isEditing: false,
        model: null,
        form: {
            name: "",
            email: "",
            phone: "",
            address: ""
        }
      }
    },

    mounted() {
        axios.get("https://api.eataja.com/api/admin/show", {
            headers: {Authorization: "Bearer " + localStorage.getItem("token")}
        }).then((res) => {
            this.form.name = res.data.data.name
            this.form.email = res.data.data.email
            this.form.phone = res.data.data.phone
            this.form.address = res.data.data.address
        })
    },

    methods: {
      save () {
        const headers = {
            "Authorization": "Bearer " + localStorage.getItem("token")
        };

        axios.post("https://api.eataja.com/api/admin/update-profile",{
            name: this.form.name,
            email: this.form.email,
            phone: this.form.phone,
            address: this.form.address,
        }, { headers }).then((res) => {
            console.log(res)
            this.isEditing = !this.isEditing
            this.hasSaved = true
        }).catch((err) => {
            console.log(err)
        })
        // this.isEditing = !this.isEditing
      },
    },
    components: {
    Navbar,
  }
  }





</script>
