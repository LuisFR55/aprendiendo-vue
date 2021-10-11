<template>
    <div>
        <div class="row">
            <div class="col-md-12">
                <h3>Vista Formulario Datos Personales</h3>
            </div>
        </div>
        <div class="row">
            <div class="col-md-4">
                <label>Nombre</label>
                <input v-model="DatosPersonales.Nombre" type="text" :class="(Errores.Nombre) ? 'form-control is-invalid' : 'form-control'" :disabled="Enviar">
                <div class="invalid-feedback" v-if="Errores.Nombre">
                    {{ Errores.Nombre.message }}
                </div>
            </div>
            <div class="col-md-4">
                <label>Apellidos</label>
                <input v-model="DatosPersonales.Apellidos" type="text" :class="(Errores.Apellido) ? 'form-control is-invalid' : 'form-control'">
                <div class="invalid-feedback" v-if="Errores.Apellido">
                    {{ Errores.Apellido.message }}
                </div>
            </div>
            <div class="col-md-4">
                <label>Correo Electronico</label>
                <input type="email" class="form-control">
            </div>
        </div>
        <div class="row">
            <div class="col-md-4">
                <label>Telefono</label>
                <input type="number" class="form-control">
            </div>
            <div class="col-md-4">
                <label>Estado Civil</label>
                <select class="form-control">
                    <option value="" selected disabled>Elige una opcion</option>
                    <option value="1">Soltero</option>
                    <option value="2">Casado</option>
                </select>
            </div>
            <div class="col-md-4">
                <label>Fecha Nacimiento</label>
                <input type="date" class="form-control">
            </div>
        </div>
        <div class="row align-items-end">
            <div class="col-md-6">
                <label>Direccion</label>
                <textarea class="form-control" rows="4"></textarea>
            </div>
            <div class="col-md-2 d-grid">
                <button v-on:click="ValidarForm()" class="btn btn-primary">Guardar</button>
            </div>
        </div>

        <hr>

        <Datos :DatosForm="DatosPersonales" v-if="Enviar" @Edicion="CambioEnvio"></Datos>
    </div>
</template>

<script>
import Datos from '../components/Datos.vue'

export default {
    name : 'FrmDatosPersonales',
    components :{
        Datos
    },
    data() {
        return {
            DatosPersonales: {
                Nombre : "",
                Apellidos : "",
                Correo : "",
                Telefono : "",
                FechaNacimiento : "",
                EstadoCivil : "",
                Direccion : ""
            },
            Errores : {},
            Enviar : false
        }
    },
    methods : {
        CambioEnvio(Dato){
            this.Enviar = Dato;
        },
        ValidarForm(){
            this.Errores = {};
            
            if(this.DatosPersonales.Nombre == ""){
                this.Errores['Nombre'] = { 
                    message : "El Nombre es obligatorio" 
                }
            }
            if(this.DatosPersonales.Apellidos == ""){
                this.Errores['Apellido'] = { 
                    message : "El Apellido es obligatorio" 
                }
            }
            
            if(JSON.stringify(this.Errores) == '{}'){
                this.Enviar = true;
            }

        }
    }
}
</script>
