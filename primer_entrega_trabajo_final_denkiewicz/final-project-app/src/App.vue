<template>
  <div id="app">
    <register-component></register-component>
    <br />
    <login-component></login-component>
    <br />
    <carrito-compras></carrito-compras>
    <br />
    <product-information></product-information>
  </div>
</template>

<script>
import RegisterComponent from "@/components/Register.vue";
import LoginComponent from "@/components/Login.vue";
import CarritoCompras from "@/components/CarritoCompras.vue";
import ProductInformation from "@/components/ProductInformation.vue";

export default {
  name: "App",
  components: {
    RegisterComponent,
    LoginComponent,
    CarritoCompras,
    ProductInformation,
  },
};
</script>

<style>
CarritoCompras#app {
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
