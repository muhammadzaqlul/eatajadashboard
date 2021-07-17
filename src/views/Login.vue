<template>
  <div >
    <v-row>
      <v-col></v-col>
      <v-col>
        <div class="orange darken-2 pt-1 mt-16" style="height: 670px; width: 555px;">
          <div
            class="mx-7 mt-7 grey lighten-5 rounded"
            style="height: 600px; width: 500px;"
          >
            <div class="text-center px-10 pt-10">
              <img src="../assets/eatajaicon.png" style="width: 100px" alt="" />
              <h1>Login</h1>
            </div>
            <div class="mx-10 ma-10">
              <!-- Form Start -->
              <!-- Username -->
              <v-form
                ref="form"
                v-model="valid"
              
                @submit.prevent="login"
              >
                <v-text-field
                  v-model="username"
                  :rules="usernameRules"
                  label="Username"
                  
                ></v-text-field>

                <!-- Password -->
                <v-text-field
                  v-model="password"
                  :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                  :rules="[rules.required]"
                  :type="show1 ? 'text' : 'password'"
                  name="input-10-2"
                  label="Password"
                  value=""
                  @click:append="show1 = !show1"
                ></v-text-field>

                <!-- Button -->
                <div>
                  <v-btn
                    :disabled="!valid"
                    color="success"
                    class="mr-4"
                    @click="login"
                  >
                    Login
                  </v-btn>
                </div>
              </v-form>
              <!-- Form End -->
            </div>
          </div>
        </div></v-col
      >
      <v-col></v-col>
    </v-row>
  </div>
</template>

<script>
import axios from "axios";

export default {
  async mounted() {
if (localStorage.getItem("token")) {
      this.$router.push("/dashboard");
    }
},
  data: () => ({
    valid: false,
    username: "",
    password: "",
    usernameRules: [(value) => !!value || "Username Required."],
    show1: false,
    show2: true,
    rules: {
      required: (value) => !!value || "PasswordRequired.",
    },
    info: null,
  }),

  methods: {
    login(result) {
      axios
        .post("https://api.eataja.com/api/admin/login", {
          username: this.username,
          password: this.password,
        })
        .then((result) => {
          this.$router.push("/dashboard");
          localStorage.setItem("token", result.data.token)
        })
        .catch(() => {
          alert("Username atau Password salah!");
        });

      localStorage.setItem("token", result.data.token);
    },
  },


  components: {},
};
</script>
