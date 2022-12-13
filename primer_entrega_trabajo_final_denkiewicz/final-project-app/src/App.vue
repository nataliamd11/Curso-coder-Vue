<template>
  <div id="app">
    <register-component></register-component>
  </div>
</template>

<script>
import RegisterComponent from "@/components/Register.vue";

export default {
  name: 'App',
  components: {
    RegisterComponent,
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
