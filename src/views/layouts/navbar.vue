<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">VUE</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <router-link class="nav-link" to="/">Inicio</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/Cliente">Cliente</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/FrmDatos">Formulario Datos</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/FrmProyectos">Formulario Proyectos</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/ListadoProyectos">Listado Proyectosssssss</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/cardExamples">Cards</router-link>
                        </li>
                        <li>
                            <router-link class="nav-link" to="/InputGroup">Input Group</router-link>
                        </li>
                        <li class="nav-item">

                            <router-link class="nav-link" to="/ListadoUsuarios">Listado Usuarios</router-link>

                            <router-link class="nav-link" to="/creacionusuarios">Usuarios</router-link>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <router-link class="nav-link" to="/ListadoUsuarios">Listado Usuarios</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/Login">Login</router-link>
                        </li>
                    </ul>
                        

                </div>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    name :  'Navbar'
}
</script>