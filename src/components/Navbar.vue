<template>
  <nav>
    <v-app-bar flat app class="orange darken-1">
      <v-app-bar-nav-icon
        class="white--text"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase font-weigth-bolder white--text">
        <span class="font-weight-light"> dashboard </span>
        <span> EatAja </span>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <!-- Dropdown menu -->
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn text v-bind="attrs" v-on="on" color="white">
            <span>Option</span>
            <v-icon right>settings</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            key="logout"
            router
            to="editprofile"
          >
            <v-list-item-title>
              Edit Profile
            </v-list-item-title>
          </v-list-item>
          <v-list-item
            key="logout"
            @click="logout"
          >
            <v-list-item-title>
              Logout
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>


    <!-- Sidebar -->
    <v-navigation-drawer v-model="drawer" app class="grey lighten-4">
      <v-row>
        <v-col class="pt-16 text-center">
          <v-avatar size="100">
            <img src="/eatajaicon.png" alt="" />
          </v-avatar>
          <p class="orange--text darken-4 mt-1 text-h5">Admin</p>
        </v-col>
      </v-row>
      <v-list>
        <v-list-item
          v-for="link in links"
          :key="link.text"
          router
          :to="link.route"
        >
          <v-list-item-action>
            <v-icon class="orange--text darken-4">{{ link.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="orange--text darken-4">
              {{ link.text }}
            </v-list-item-title>
            <br />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>


<script>

export default {
  components: {

  },
  data() {
    return {
      drawer: true,
      links: [
        { icon: "dashboard", text: "Dashboard", route: "/dashboard" },
        { icon: "store", text: "Mitra Info", route: "/mitrainfo" },
        { icon: "receipt_long", text: "Transaction", route: "/transaction" },
        { icon: "assessment", text: "Ads", route: "/ads" },
      ]
    };
  },
  methods: {
      logout(){
          localStorage.removeItem("token");
          this.$router.push("/")
      }
  }
};
</script>
