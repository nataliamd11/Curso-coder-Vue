<template>
    <div>
        <h2>datos</h2>
        <div class="row">
            <div class="col-2"></div>
            <div class="col-8 borderComponent">
                <div class="m-3">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Nombre</th>
                                <th scope="col">Email</th>
                                <th scope="col">Edad</th>
                                <th scope="col">Género</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(item, index) in datacenso" :key="index">
                                <th scope="row">{{ index }}</th>
                                <td>{{ item.nombre }}</td>
                                <td>{{ item.email }}</td>
                                <td>{{ item.edad }}</td>
                                <td>{{ item.genero }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="col-2"></div>
        </div>
    </div>
</template>
      
<script>
export default {
    name: "TablaCenso",
    props: [
    'datacenso',
  ],
};
</script>
  