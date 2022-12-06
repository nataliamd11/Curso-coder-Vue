<template>
  <div id="app"></div>
</template>

<script>
export default {
  name: "App",
  data: {
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
  },
  components: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
