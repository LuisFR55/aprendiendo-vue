import { createWebHistory, createRouter } from 'vue-router'

//IMPORTACION DE LAS VISTAS
import Cliente from './views/cliente'
import Home from './views/home'
import FrmDatosPersonales from './views/FrmDatosPersonales'
import FrmProyectos from './views/FrmProyectos'
import ListadoProyectos from './views/ListadoProyectos'

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
        }
    ]
});

//EXPORTACION DE LAS RUTAS
export default router;