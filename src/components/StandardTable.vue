<template>
  <table>
    <thead>
      <tr>
        <th v-for="head in tableHeader">
          {{head.value}}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="rowContent in tableContent">
        <td v-for="head in tableHeader ">
          {{rowContent[head.key]}}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    tableHeader: Array,
    tableContent: Array
  }
}
</script>

<style scoped>
table {
  margin: auto;
  width: 100%;
  border-collapse: collapse;
  min-width: 500px;
}

td,
th {
  min-width: 100px;
  text-align: center;
  padding: 15px 5px;
}

thead tr,
tbody tr:not(:last-child) {
  border-bottom: 1px solid lightgray;
}
</style>
