<template>
    <div>
        <div class="card">
            <div class="card-body">
                <h4>{{ DatosForm.Nombre }}</h4>
                <button class="btn btn-warning" @click="Editar">Editar</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name : 'Datos',
    props : {
        DatosForm : Object
    },
    methods : {
        Editar(){
            this.$emit('Edicion', false);
        }
    }
}
</script>