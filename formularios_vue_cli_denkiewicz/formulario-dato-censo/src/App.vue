<template>
  <div id="app">
    <h2>Formulario</h2>
    <FormularioCenso></FormularioCenso>
  </div>
</template>

<script>
import FormularioCenso from './components/formulario.vue'

export default {
  name: 'App',
  components: {
    FormularioCenso,
  }
}
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
