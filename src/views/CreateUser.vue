<template>
    <div>
        <div class="row">
            <div class="col-ms-12">
                <h3>Usuarios</h3>
            </div>
        </div>
        <div class="row">
            <div class="col-md-4">
                <label>Nombre</label>
                <input v-model="Nombre" type="text" :class="(Errores.Nombre) ? 'form-control is-invalid' : 'form-control' ">
                <div class="invalid-feedback" v-if="Errores.Nombre">
                    {{ Errores.Nombre.message}} 
                </div>
            </div>
        
            <div class="col-md-4">
                <label>Apellido</label>
                <input type="text" class="form-control">
            </div>
        
            <div class="col-md-4">
                <label>Correo Electronico</label>
                <input type="email" class="form-control">
            </div>
        
        </div>
        <div class="row">
            <div class="col-md-4">
                <label>Telefono</label>
                <input type ="number" class="form-control">
            </div>
            <div class="col-md-4">
                <label for="inputPassword5" class="form-label">Contraseña</label>
                <input type="password" id="inputPassword5" class="form-control" aria-describedby="passwordHelpBlock">
                <div id="passwordHelpBlock" class="form-text">
                Su contraseña debe tener entre 8 y 20 caracteres, contener letras y números, y no debe contener espacios, caracteres especiales ni emoji.
                </div>
           </div>
            <div class="col-md-4">
                <label for="inputPassword5" class="form-label">Confirmación de Contraseña</label>
                <input type="password" id="inputPassword5" class="form-control" aria-describedby="passwordHelpBlock">
                <div id="passwordHelpBlock" class="form-text">
                    Confirme su contraseña.
                </div>
           </div>
            
        </div>

              
         <div class=" row align-items-end">
            <div class="col-md-4">
                <label>Direccion</label>
                <input type ="text" class="form-control">
            </div>
            <div class="col-md-4">
                <button class="btn btn-outline-primary" v-on:click="ValidarForm()">Guardar</button>
            </div>
        </div>  

  
    </div>
</template>
<script>
export default {
    name : 'creacionusuarios',
    data() {
        return{
            Nombre: null,
            Apellidos: null,
            Correo: null,
            Telefono: null,
            fechaNacimiento: null,
            estadoCivil: null,
            Direccion: null,
            Errores: {}
        }
    },
    methods : {

        ValidarForm(){
            if(this.Nombre == null){
                this.Errores['Nombre'] = {
                    message : 'El nombre es obligatorio'
                }
            }
        }
    }
}

</script>


