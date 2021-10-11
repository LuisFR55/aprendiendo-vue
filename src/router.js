import { createWebHistory, createRouter } from 'vue-router'

//IMPORTACION DE LAS VISTAS
import Cliente from './views/cliente'
import Home from './views/home'
import FrmDatosPersonales from './views/FrmDatosPersonales'
import FrmProyectos from './views/FrmProyectos'
import ListadoProyectos from './views/ListadoProyectos'
<<<<<<< HEAD
import Usuarios from './views/CreateUser.vue'
=======
import Login from './views/Login'
import ListadoUsuarios from './views/ListadoUsuarios'

>>>>>>> 375f11926f72ce56ab435bfd5d7b521d582423a5

//RUTAS
const router = new createRouter({
    history : createWebHistory(),
    routes : [
        {
            path : '/',
            name : 'Home',
            component : Home
        },
        {
            path : '/Cliente',
            name : 'Cliente',
            component : Cliente
        },
        {
            path : '/FrmDatos',
            name : 'FrmDatos',
            component : FrmDatosPersonales
        },        
        {
            path : '/FrmProyectos',
            name : 'FrmProyectos',
            component : FrmProyectos
        },
        {
            path : '/ListadoProyectos',
            name : 'ListadoProyectos',
            component : ListadoProyectos
        },
        {
<<<<<<< HEAD
            path : '/creacionusuarios',
            name : 'Usuarios',
            component : Usuarios
=======
            path : '/Login',
            name : 'Login',
            component : Login
        },
        {
            path : '/ListadoUsuarios',
            name : 'ListadoUsuarios',
            component : ListadoUsuarios
>>>>>>> 375f11926f72ce56ab435bfd5d7b521d582423a5
        }

    ]
});

//EXPORTACION DE LAS RUTAS
export default router;