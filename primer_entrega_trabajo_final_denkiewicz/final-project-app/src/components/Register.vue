<template>
  <div>
    <div class="row">
      <div class="col-3"></div>
      <div class="col-6 borderComponent">
        <div class="m-3">
          <h2>Cree su usuario</h2>
          <form>
            <div class="mb-3">
              <label class="form-label">Nombre</label>
              <input
                type="text"
                v-model="name"
                class="form-control"
                placeholder="Ingrese su nombre"
              />
            </div>
            <div class="mb-3">
              <label class="form-label">Apellido</label>
              <input
                type="text"
                v-model="surname"
                class="form-control"
                placeholder="Ingrese su apellido"
              />
            </div>
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
            <div class="mb-3">
              <label class="form-label">Repita su contraseña</label>
              <input
                type="password"
                v-model="password2"
                class="form-control"
                placeholder="Ingrese su contraseña"
              />
            </div>
            <button type="submit" class="btn btn-primary">Registrarse</button>
          </form>
        </div>
      </div>
      <div class="col-3"></div>
    </div>
    <p>{{ name }}</p>
    <p>{{ surname }}</p>
    <p>{{ email }}</p>
    <p>{{ password }}</p>
    <p>{{ password2 }}</p>
  </div>
</template>

<script>
export default {
  name: "RegisterComponent",
  data: function () {
    return {
      name: "",
      surname: "",
      email: "",
      password: "",
      password2: "",
    };
  },
};
</script>