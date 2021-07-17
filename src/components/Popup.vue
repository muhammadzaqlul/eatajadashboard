<template>
  <div class="text-center">
    <v-dialog max-width="600px">
      <template v-slot:activator="{ on }">
        <v-btn text v-on="on" class="success"> Add new project </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <h2>Add a New Project</h2>
        </v-card-title>
        <v-card-text>
          <v-form class="px-3" ref="form">
            <v-text-field
              label="Title"
              v-model="title"
              prepend-icon="folder"
              :rules="inputRules"
            ></v-text-field>
            <v-textarea
              label="Information"
              v-model="content"
              prepend-icon="edit"
              :rules="inputRules"
            ></v-textarea>

            <v-menu>
              <template v-slot:activator="{ on }">
                <v-text-field
                  :rules="inputRules"
                  :value="formattedDate"
                  v-on="on"
                  label="Due Date"
                  prepend-icon="date_range"
                >
                </v-text-field>
              </template>
              <v-date-picker v-model="due"> </v-date-picker>
            </v-menu>

            <v-spacer></v-spacer>

            <v-btn text class="success mx-0 mt-3" @click="submit"
              >Add Project</v-btn
            >
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import format from "date-fns/format";
import parseISO from "date-fns/parseISO";

export default {
  data() {
    return {
      title: "",
      content: "",
      due: null,
      inputRules: [(v) => v.length >= 3 || "Minimum length is 3 characters"],
    };
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        console.log(this.title, this.content, this.formattedDate);
      }
    },
  },
  computed: {
    formattedDate() {
      return this.due ? format(parseISO(this.due), "do MMM yyyy") : "";
    },
  },
};
</script>