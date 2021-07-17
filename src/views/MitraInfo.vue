<template>
 <div>
   <Navbar />
   <Header />
  <div class="ma-3">
    <v-data-table
      :headers="headers"
      :items="mitra"
      :search="search"
      sort-by="calories"
      class="elevation-1"
      show-group-by
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title class="text-h5 text-uppercase">Mitra Info</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
          ></v-text-field>


          <v-dialog v-model="dialog" max-width="500px">
            <v-card>
              <v-card-title >
                <span class="text-h5">Set Verification Status</span>
              </v-card-title>
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.verified"
                        label="Verification Status"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="close">
                  Cancel
                </v-btn>
                <v-btn color="blue darken-1" text @click="save (editedItem.id)"> Save </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <!-- delete -->
          <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
              <v-card-title class="text-h5"
                >Are you sure you want to delete this item?</v-card-title
              >
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="closeDelete"
                  >Cancel</v-btn
                >
                <v-btn color="blue darken-1" text @click="deleteItemConfirm"
                  >OK</v-btn
                >
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <template v-slot:[`item.actions`]="{ item }">
        <v-icon small class="mr-2" @click="editItem(item)"> mdi-pencil </v-icon>
        <router-link :to="`/MitraInfoDetail/${item.id}`">
          <v-icon small> info </v-icon>
        </router-link>
      </template>
    </v-data-table>
  </div>
 </div>
</template>

<script>
import axios from "axios";
import Header from "../components/Header.vue"
import Navbar from '@/components/Navbar'

export default {
  data: () => ({
    dialog: false,
    dialogDelete: false,
    search: "",
    headers: [
      {
        text: "Mitra Name",
        align: "start",
        sortable: false,
        value: "restaurant_name",
         groupable: false,
      },
      { text: "Owner / PIC", value: "fullname",  groupable: false, },
      { text: "Address", value: "address",  groupable: false, },
      { text: "Contact", value: "phone",  groupable: false, },
      { text: "Verification Status", value: "verified" },
      { text: "Actions", value: "actions", sortable: false,  groupable: false, }
    ],
    mitra: [],
    editedIndex: -1,
    editedItem: {
      restaurant_name: "",
      address: "",
      fat: 0,
      carbs: 0,
      protein: 0,
    },

  }),


  computed: {
    formTitle() {
      return this.editedIndex ==="Edit Item";
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },

  created() {
    this.initialize();
  },

  methods: {
    initialize() {
      this.mitra = [];
    },

    editItem(item) {
      this.editedIndex = this.mitra.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.mitra.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      this.mitra.splice(this.editedIndex, 1);
      this.closeDelete();
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    

    save(mitra_id) {

      axios.post("https://api.eataja.com/api/admin/verified-mitra/" + mitra_id)
      .then(function (response) {
        //jika berhasil
        console.log(response);
      })
      .catch(function (error){
        //jika gagal
        console.log(error);
      });

      this.close();
    },
  },
  async mounted() {
    const response = await axios.get("https://api.eataja.com/api/admin/mitra");
    this.mitra = response.data.data;
    console.log(this.mitra);
  },
  components: {
    Navbar,
    Header,
  }

};

</script>
