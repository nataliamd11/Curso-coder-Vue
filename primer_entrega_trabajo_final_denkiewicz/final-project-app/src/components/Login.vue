<template>
  <div>
    <div class="row">
      <div class="col-3"></div>
      <div class="col-6 borderComponent">
        <div class="m-3">
          <h2>Iniciar sesión</h2>
          <form>
            <div class="mb-3">
              <label class="form-label">Email</label>
              <input
                type="email"
                v-model="email"
                class="form-control"
                placeholder="Ingrese su email"
              />
            </div>
            <div class="mb-3">
              <label class="form-label">Contraseña</label>
              <input
                type="password"
                v-model="password"
                class="form-control"
                placeholder="Ingrese su contraseña"
              />
            </div>
            <button type="submit" class="btn btn-primary">
              Iniciar sesión
            </button>
          </form>
        </div>
      </div>
      <div class="col-3"></div>
    </div>
    <p>{{ email }}</p>
    <p>{{ password }}</p>
  </div>
</template>
  
  <script>
export default {
  name: "LoginComponent",
  data: function () {
    return {
      email: "",
      password: "",
    };
  },
};
</script>
