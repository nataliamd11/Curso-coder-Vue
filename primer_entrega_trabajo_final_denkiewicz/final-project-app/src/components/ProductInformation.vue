<template>
  <div class="row">
    <div class="col-2"></div>
    <div class="col-8 borderComponent">
      <div class="m-3">
        <div class="card" style="width: 18rem">
          <img
            :src="producto.image"
            class="card-img-top"
            alt="El hombre ilustrado"
          />
          <div class="card-body">
            <h5 class="card-title">Información del producto</h5>
            <div class="card-text">
              <p>Título: {{ producto.title }}</p>
              <p>Autor: {{ producto.author }}</p>
              <p>Editorial: {{ producto.editorial }}</p>
              <p>Precio: {{ producto.price }}</p>
            </div>
            <a href="#" class="btn btn-primary float-start">Comprar</a>
            <a href="#" class="btn btn-secondary float-end">Regresar</a>
          </div>
        </div>
      </div>
    </div>
    <div class="col-2"></div>
  </div>
</template>
      
<script>
export default {
  name: "ProductInformation",
  data: function () {
    return {
      producto: {
        id: 1,
        title: "El hombre ilustrado",
        author: "Ray Bradbury",
        editorial: "Minotauro",
        price: 3000,
        image:
          "https://planetadelibrosar2.cdnstatics.com/usuaris/libros/fotos/313/original/312196_portada_el-hombre-ilustrado_ray-bradbury_201912181023.jpg",
      },
    };
  },
};
</script>
  