<template>
  <div id="app">
    <register-component></register-component>
    <br/>
    <login-component></login-component>
  </div>
</template>

<script>
import RegisterComponent from "@/components/Register.vue";
import LoginComponent from "@/components/Login.vue";


export default {
  name: 'App',
  components: {
    RegisterComponent,
    LoginComponent,
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

.borderComponent {
    border-style: solid;
    border-color: rgb(202, 198, 198);
    border-width: 2px;
  }
</style>
