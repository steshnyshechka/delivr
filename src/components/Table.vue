<template>
  <table class="resp-tab">
    <thead>
      <tr>
        <th>Name</th>
        <th>Link</th>
      </tr>
    </thead>
    <TBody
      v-for="searchPackage in paginatedData"
      :searchPackage="searchPackage"
      v-bind:key="searchPackage.id"
    />
  </table>
</template>

<script>
import TBody from "./TBody";
export default {
  name: "Table",
  components: { TBody },
  props: {
    paginatedData: Array,
  },
};
</script>

<style scoped>
.resp-tab {
  border-radius: 5px;
  font-weight: normal;
  border: none;
  border-collapse: collapse;
  width: 100%;
  max-width: 100%;
}
@media (max-width: 768px) {
  thead {
    display: none;
  }
}
</style>
