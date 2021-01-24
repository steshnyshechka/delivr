<template>
  <b-container class="container">
    <SearchForm />
    <div class="search_result" v-if="packages != null">
      <div v-if="packages.length != 0">
        <Table :paginatedData="paginatedData" />
        <b-button
          class="button_paginate"
          variant="outline-primary"
          @click="prevPage"
          :disabled="pageNumber === 0"
        >
          Previous
        </b-button>
        <b-button
          class="button_paginate"
          variant="outline-primary"
          @click="nextPage"
          :disabled="pageNumber >= pageCount - 1"
        >
          Next
        </b-button>
      </div>
      <div v-else>
        <p class="text-center">Nothing found</p>
      </div>
    </div>
  </b-container>
</template>

<script>
import Table from "./Table";
import SearchForm from "./SearchForm";

export default {
  name: "Packages",
  components: { Table, SearchForm },
  data() {
    return {
      pageNumber: 0,
      size: 10,
    };
  },
  methods: {
    nextPage() {
      this.pageNumber++;
    },
    prevPage() {
      this.pageNumber--;
    },
  },
  computed: {
    packages() {
      return this.$store.getters.GET_PACKAGES;
    },
    pageCount() {
      let l = this.packages.length,
        s = this.size;
      return Math.ceil(l / s);
    },
    paginatedData() {
      const start = this.pageNumber * this.size,
        end = start + this.size;
      return this.packages.slice(start, end);
    },
  },
};
</script>

<style scoped>
.container,
.search_result,
.button_paginate {
  margin-top: 20px;
}
</style>
