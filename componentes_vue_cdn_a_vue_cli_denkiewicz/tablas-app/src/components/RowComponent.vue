<template>
  <tr>
    <td v-for="(cellItem, index) in rowContent" :key="index">{{ cellItem }}</td>
  </tr>
</template>

<script>
export default {
  name: "RowComponent",
  props: [
    'rowContent',
  ],
};
</script>

<style>
</style>