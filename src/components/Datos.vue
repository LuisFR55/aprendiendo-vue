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
    props : { //recibir informacion de padre a hijo
        DatosForm : Object
    },
    methods : { //comunicacion de hijo a padre
        Editar(){
            this.$emit('Edicion', false);
        }
    }
}
</script>