<template>
    <div>
        <div class="row justify-content-center">
            <div class="col-md-4">
                <h3 class="text-center">Login</h3>
                <div class="row align-items-center">
                    <div class="col-md-12">
                        <label>Usuario</label>
                        <input v-model="Usuario" type="text" :class="(Errores.Usuario) ? 'form-control is-invalid' : 'form-control'">
                        <div class="invalid-feedback" v-if="Errores.Usuario">
                            {{ Errores.Usuario.message }}
                        </div>
                    </div>
                     <div class="col-md-12">
                        <label>Contraseña</label>
                        <input v-model="Contraseña" type="password" :class="(Errores.Contraseña) ? 'form-control is-invalid' : 'form-control'">
                        <div class="invalid-feedback" v-if="Errores.Contraseña">
                            {{ Errores.Contraseña.message }}
                        </div>
                    </div>
                    <div class=" row justify-content-center">
                 <router-link v-on:click="ValidarForm()" class="btn btn-secondary mt-2 w-auto" to="/">Ingresar</router-link>
                <div id="emailHelp" class="form-text text-center">¿No tienes cuenta?</div>
                </div>
                </div>
            </div>
         </div>
    </div>
</template>

<script>
export default {
    name : 'Login',
    data() {
        return {
            Usuario : "",
            Contraseña : "",
            Errores : {}
        }
    },
    methods : {
        ValidarForm(){
            this.Errores = {};
            
            if(this.Usuario == ""){
                this.Errores['Usuario'] = { 
                    message : "El Usuario es obligatorio" 
                }
            }
            if(this.Contraseña == ""){
                this.Errores['Contraseña'] = { 
                    message : "La contraseña es obligatorio" 
                }
            }
        }
    }
}
</script>

