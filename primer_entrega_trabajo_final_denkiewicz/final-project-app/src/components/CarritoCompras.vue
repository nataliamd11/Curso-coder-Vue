<template>
  <div class="row">
    <div class="col-2"></div>
    <div class="col-8 borderComponent">
      <div class="m-3">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Título</th>
              <th scope="col">Autor</th>
              <th scope="col">Editorial</th>
              <th scope="col">Precio</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in productos" :key="item.id">
              <th scope="row">{{ index }}</th>
              <td>{{ item.title }}</td>
              <td>{{ item.author }}</td>
              <td>{{ item.editorial }}</td>
              <td>{{ item.price }}</td>
            </tr>
          </tbody>
        </table>
        <button type="submit" class="btn btn-secondary float-end m-2">
          Regresar
        </button>
      </div>
    </div>
    <div class="col-2"></div>
  </div>
</template>
    
    <script>
export default {
  name: "CarritoCompras",
  data: function () {
    return {
      productos: [
        {
          id: 1,
          title: "El hombre ilustrado",
          author: "Ray Bradbury",
          editorial: "Minotauro",
          price: 3000,
        },
        {
          id: 1,
          title: "Orgullo y prejuicio",
          author: "Jane Austen",
          editorial: "Continente",
          price: 2100,
        },
      ],
    };
  },
};
</script>
