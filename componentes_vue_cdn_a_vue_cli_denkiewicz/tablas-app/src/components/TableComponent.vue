<template>
  <div>
    <h2>{{ tableContent.tableTitle }}</h2>
    <table :class="tableStyle">
      <tr>
        <th v-for="title in tableContent.colTitle" :key="title">
          {{ title }}
        </th>
      </tr>
      <RowComponent
        v-for="(row, index) in tableContent.content"
        :key="index"
        :rowContent="row"
      ></RowComponent>
    </table>
  </div>
</template>

<script>
import RowComponent from '@/components/RowComponent.vue';

export default {
  name: "TableComponent",
  props: [
    'tableContent',
    'tableStyle',
  ],
  components: {
    RowComponent,
  },
};
</script>
