<template>
    <div>
        <vue-form :state="formstate" @submit.prevent="onSubmit">

            <div class="row m-3">
                <div class="col-3"></div>
                <validate tag="label" class="col-6">
                    <label class="form-label">Nombre</label>
                    <input class="form-control" v-model="datos_formulario.nombre" required name="name"
                        placeholder="Ingrese su nombre" />

                    <field-messages name="name">
                        <div slot="required" class="required-class">El nombre es un campo requerido</div>
                    </field-messages>
                </validate>
                <div class="col-3"></div>
            </div>

            <div class="row m-3">
                <div class="col-3"></div>
                <validate class="col-6" tag="label">
                    <label class="form-label">Email</label>
                    <input class="form-control" v-model="datos_formulario.email" name="email" type="email"
                        placeholder="Ingrese su email" required />

                    <field-messages name="email">
                        <div slot="required" class="required-class">El email es un campo requerido</div>
                        <div slot="email" class="required-class">El email no es válido</div>
                    </field-messages>
                </validate>
                <div class="col-3"></div>
            </div>

            <div class="row m-3">
                <div class="col-3"></div>
                <validate class="col-6" tag="label">
                    <label class="form-label">Edad</label>
                    <input class="form-control" v-model="datos_formulario.edad" name="edad" type="number"
                        placeholder="Ingrese su edad" required />

                    <field-messages name="edad">
                        <div slot="required" class="required-class">La edad es un campo requerido</div>
                    </field-messages>
                </validate>
                <div class="col-3"></div>
            </div>

            <div class="row m-3">
                <div class="col-3"></div>
                <div class="col-6">
                    <input class="form-check-input" type="radio" id="masculino" value="masculino"
                        v-model="datos_formulario.genero" />
                    <label class="form-check-label" for="masculino">Masculino</label>

                    <input class="form-check-input" type="radio" id="femenino" value="femenino"
                        v-model="datos_formulario.genero" />
                    <label for="femenino">Femenino</label>
                </div>
                <div class="col-3"></div>
            </div>

            <button class="btn btn-success m-3" @submit="onSubmit" type="submit">Enviar datoss</button>
        </vue-form>
        <div class="m-3">
            <TablaCenso :datacenso="datos_completos"></TablaCenso>
        </div>
    </div>
</template>

<script>
import TablaCenso from './tabla.vue';

export default {
    name: "FormularioCenso",
    components: {
        TablaCenso,
    },
    data: function () {
        return {
            formstate: {},
            datos_formulario: {
                nombre: "",
                email: "",
                edad: null,
                genero: "masculino",
            },
            datos_completos: [],
        };
    },
    methods: {
        resetForm: function () {
            this.datos_formulario = {
                nombre: "",
                email: "",
                edad: null,
                genero: "masculino",
            }
            return
        },
        onSubmit: function () {
            if (this.formstate.$invalid) {
                console.log("formulario inválido");
                return;
            }
            
            this.datos_completos.push(this.datos_formulario);
            this.resetForm()
        }
    }
};
</script>

<style scoped>
.required-class {
    color: red;
}
</style>

