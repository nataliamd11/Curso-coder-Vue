<template>
  <div class="container-fluid" id="app">
    <TableComponent
      :tableContent="table1"
      class="default-class"
      tableStyle="blue-table"
    ></TableComponent>
    <TableComponent
      :tableContent="table2"
      class="default-class"
      tableStyle="green-table"
    ></TableComponent>
    <TableComponent
      :tableContent="table3"
      class="default-class"
      tableStyle="warm-table"
    ></TableComponent>
  </div>
</template>

<script>
import TableComponent from "@/components/TableComponent.vue";

export default {
  name: "App",
  components: {
    TableComponent,
  },
  data() {
    return {
      table1: {
        tableTitle: "Departamentos de San Luis",
        colTitle: [
          "Departamento",
          "Población 2010",
          "Superficie",
          "Densidad de Población",
        ],
        content: [
          ["Ayacucho", 19.087, 9.681, 1.97],
          ["Chacabuco", 20.744, 2.651, 7.82],
          ["Coronel Pringles", 13.157, 4.484, 2.93],
          ["General Pedernera", 125.899, 15.057, 8.36],
          ["Gobernador Dupuy", 11.779, 19.632, 0.59],
          ["Junín", 28.933, 2.476, 11.68],
          ["Juan Martín de Pueyrredón (La Capital)", 204.019, 13.12, 15.55],
          ["Libertador Gral. San Martín", 4.707, 3.021, 1.55],
        ],
      },
      table2: {
        tableTitle: "Aves de San Luis",
        colTitle: ["Especie", "Habitat"],
        content: [
          ["juan chiviro", "monte"],
          ["cortarramas", "monte"],
          ["crespín", "monte"],
          ["águila mora", "sierra"],
          ["cóndor", "sierra"],
          ["tero real", "diques"],
        ],
      },
      table3: {
        tableTitle: "Clima de San Luis",
        colTitle: ["Nombre", "Características", "Región"],
        content: [
          ["Templado subhúmedo de llanura", "clima de transición", "sureste"],
          [
            "Templado semiseco de las planicies",
            "precipitaciones escasaz. Veranos cálidos e inviernos fríos",
            "oeste y centro",
          ],
          ["Templado subhúmedo serrano", "ambientes húmedos", "noreste"],
          [
            "Templado seco de sierras y bolsones",
            "gran amplitud térmica, árido",
            "extremo noroeste",
          ],
        ],
      },
    };
  },
};
</script>

<style>
.default-class {
  padding: 50px;
}
.default-class td {
  border: 1px solid #b4acac;
  text-align: left;
  padding: 8px;
}
.default-class th {
  border: 1px solid #8f8b8b;
  text-align: left;
  padding: 8px;
}
.blue-table {
  background-color: rgb(7, 28, 87);
  color: rgb(193, 194, 197);
}
.blue-table th {
  background-color: rgb(193, 194, 197);
  color: rgb(0, 1, 2);
}
.green-table {
  background-color: rgb(166, 223, 140);
}
.green-table th {
  background-color: rgb(91, 141, 68);
  color: aliceblue;
}
.warm-table {
  background-color: rgb(223, 208, 140);
}
.warm-table th {
  background-color: rgb(209, 111, 20);
  color: aliceblue;
}
.warm-table tr:nth-child(even) {
  background-color: #ceb485;
}
</style>
