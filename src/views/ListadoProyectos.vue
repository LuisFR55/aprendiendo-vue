<template>
    <div>
        <div class="row justify-content-center">
            <div class="col-md-4">
                <h3>Vista Listado Proyectos</h3>
            </div>
        </div>
    </div>
    <table class="table">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Nombre Proyecto</th>
                <th scope="col">DESCRIPCION</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row">1</th>
                <td>POKEDEX</td>
                <td>Proyecto para buscar pokemones y saber sus poderes</td>
            </tr>
        </tbody>
        <tbody>
            <tr>
                <th scope="row">2</th>
                <td>TIC TAC TOE</td>
                <td>proyecto del juego Tic Tac Toe (TOTITO)</td>
            </tr>
        </tbody>
        <tbody>
            <tr>
                <th scope="row">3</th>
                <td>ProyectoCSS</td>
                <td>Proyecto elaborado para la practica de los estudiantes de CSS</td>
            </tr>
        </tbody>
        <tbody>
            <tr>
                <th scope="row">4</th>
                <td>Proyecto-X</td>
                <td>Proyecto de Practica</td>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default {
    name : 'ListadoProyectos'
}
</script>
