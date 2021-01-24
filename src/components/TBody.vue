<template>
  <tbody>
    <tr @click.prevent="modalShow = !modalShow">
      <td><span>Name</span> {{ searchPackage.package.name }}</td>
      <td>
        <span>Link</span>
        <a v-bind:href="searchPackage.package.links.npm">
          {{ searchPackage.package.links.npm }}
        </a>
      </td>
    </tr>
    <b-modal v-model="modalShow" id="modal" hide-footer>
      <template #modal-header="">
        <b-button
          size="sm"
          variant="outline-primary"
          @click="modalShow = !modalShow"
        >
          Close
        </b-button>
        <h5>{{ searchPackage.package.name }}</h5>
      </template>
      <template>
        <p>Publisher: {{ searchPackage.package.publisher.username }}</p>
        <p>Date: {{ searchPackage.package.date }}</p>
        <p>Description: {{ searchPackage.package.description }}</p>
        <p>
          Link:
          <a v-bind:href="searchPackage.package.links.npm">
            {{ searchPackage.package.links.npm }}
          </a>
        </p>
      </template>
    </b-modal>
  </tbody>
</template>

<script>
export default {
  name: "TBody",
  props: {
    searchPackage: Object,
  },
  data() {
    return {
      modalShow: false,
    };
  },
};
</script>

<style scoped>
th,
td {
  padding: 10px 20px;
  font-size: 1vw;
  border: none;
  font-family: Verdana, sans-serif;
  border: 1px solid #337ab7;
  vertical-align: top;
}
th {
  color: #fff;
  background: #337ab7;
  font-weight: bold;
  border: 1px solid #1a4a73;
  text-transform: uppercase;
  text-align: center;
}
tr:nth-child(even) {
  background: #edf7ff;
}
td span {
  background: #337ab7;
  color: #fff;
  display: none;
  font-size: 1vw;
  font-weight: bold;
  font-family: Verdana, sans-serif;
  text-transform: uppercase;
  padding: 5px 10px;
  position: absolute;
  top: 0;
  left: 0;
}
@media (max-width: 768px) {
  tr {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-bottom: 30px;
  }
  td {
    margin: 0 -1px -1px 0;
    padding-top: 35px;
    position: relative;
    width: 50%;
  }
  td span {
    display: block;
  }
}
@media (max-width: 480px) {
  td {
    width: 100%;
  }
}
tr {
  cursor: pointer;
}
tr:hover {
  background-color: rgb(177, 208, 255);
}
</style>