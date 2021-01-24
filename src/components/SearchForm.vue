<template>
  <form @submit.prevent="search">
    <b-form-input
      required
      v-model="search_packages"
      placeholder="Search all of npm"
    ></b-form-input>
  </form>
</template>

<script>
import { axios } from "@/plugins/axios";

export default {
  name: "SearchForm",
  data() {
    return {
      search_packages: "",
    };
  },
  methods: {
    search() {
      axios
        .get(
          `https://registry.npmjs.com/-/v1/search?text=${this.search_packages}`
        )
        .then((response) => {
          this.$store.commit("ADD_PACKAGES", response.data.objects);
          this.search_packages = "";
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>

<style scoped>
</style>