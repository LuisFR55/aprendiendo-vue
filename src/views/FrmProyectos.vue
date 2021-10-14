<template>
  <div>
    <div class="row">
      <div class="col-md-12">
        <h3>Datos de los Proyectos</h3>
      </div>
    </div>
    <div class="row">
      <div class="col-md-4">
        <label>Nombre del proyecto</label>
        <input v-model="Nombre" type="text" :class="(Errores.Nombre) ? 'form-control is-invalid' : 'form-control'"/>
        <div class="invalid-feedback" v-if="Errores.Nombre">
                    {{ Errores.Nombre.message }}
                </div>
      </div>

      <div class="col-md-4">
        <label>Fecha</label>
        <input v-model="Fecha" type="date" :class="(Errores.Fecha) ? 'form-control is-invalid' : 'form-control'" />
        <div class="invalid-feedback" v-if="Errores.Fecha">
                    {{ Errores.Fecha.message }}
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <label>Descripcion</label>
          <textarea
            v-model="Nombre"
            type="text"
            class="form-control mb-3"
            rows="4"
          ></textarea>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
            />
            <label class="form-check-label " for="flexRadioDefault1">
              Publica
            </label>
          </div>
        </div>
        <div class="col-md-12">
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
            />
            <label class="form-check-label mb-3" for="flexRadioDefault1">
              Privada
            </label>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-12">
          <input v-model="gitignore" type="checkbox" class="form-check-input" />
          <label>Agregar README</label>
        </div>
        <div class="col-md-12">
          <input v-model="gitignore" type="checkbox" class="form-check-input" />
          <label>Agregar gitignore</label>
        </div>
        <div class="col-md-12">
          <input v-model="gitignore" type="checkbox" class="form-check-input mb-3" />
          <label>Agregar Licencia</label>
        </div>
      </div>
      <div class="row">
          <div class="col-md-2 d-grid">
                <button v-on:click="ValidarForm()" class="btn btn-primary">Crear</button>
            </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FrmProyectos",
  data() {
        return {
            Nombre : "",
            Fecha : "",
            Errores : {}
        }
    },
    methods : {
        ValidarForm(){
            this.Errores = {};
            
            if(this.Nombre == ""){
                this.Errores['Nombre'] = { 
                    message : "El Nombre del Proyecto es obligatorio" 
                }
            }
            if(this.Fecha == ""){
                this.Errores['Fecha'] = { 
                    message : "La Fecha es obligatoria" 
                }
            }
        }
    }
};
</script>
