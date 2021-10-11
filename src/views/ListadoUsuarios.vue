<template>
    <div class="container">
        <div>
            <div class="row justify-content-center">
                <div class="col-md-4">
                    <h3>Listado Usuarios</h3>
                </div>
            </div>
            <div class="row">
                <table class="table table-hover">
                    <thead>
                        <tr>
                        <th scope="col">No.</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Apellido</th>
                        <th scope="col">Dirección</th>
                        <th scope="col">Teléfono</th>
                        <th scope="col">Correo</th>
                        <th scope="col">Estado</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">1</th>
                        <td>Pedro</td>
                        <td>Guzmán</td>
                        <td>Chiquimula</td>
                        <td>4598-2367</td>
                        <td>pedro78@gmail.com</td>
                        <td>Inactivo</td>
                        </tr>
                        <tr>
                        <th scope="row">2</th>
                        <td>Pablo</td>
                        <td>Valdéz</td>
                        <td>Esquipulas</td>
                        <td>9513-8524</td>
                        <td>blodez852@gmail.com</td>
                        <td><b>Activo</b></td>
                        </tr>
                        <tr>
                        <th scope="row">3</th>
                        <td>María</td>
                        <td>Díaz</td>
                        <td>Ipala</td>
                        <td>5927-2876</td>
                        <td>maridia75945*@gmail.com</td>
                        <td>Inactivo</td>
                        </tr>
                    
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<style>
.container{
    background: rgb(238, 250, 227);
}

</style>
<script>
export default {
    name : 'ListadoUsuarios'
}
</script>