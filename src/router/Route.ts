import { lazy } from 'react';
import { Route } from '../interfaces/index';
import NoLazy from '../components/NoLazy';
// import {LazyPage1 ,LazyPage2, LazyPage3 } from '../01-Lazyload/pages';


// Creamos componentes lazy
const LazyLayout = lazy(() => import(/* webpackChunkName: "LazyLayout" */ '../01-Lazyload/layout/LazyLayout'));

export const routes: Route[] = [
  {
    path: '/lazylayout/*',
    to: '/lazylayout/',
    Component: LazyLayout,
    name: 'Lazy Layout'
  },
  {
    to: '/nolazy',
    path: 'nolazy',
    Component: NoLazy,
    name: 'No Lazy Layout'
  },

];

/*
  Cada vez que querramos usar lazy  y queremos añadir rutas hijas debemos colocar el comodin luego 
  del path /user/* y todo lo que venga luego del path va a pertenece a user en este ejemplo
*/