import { Suspense } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
// import { LazyPage1, LazyPage2, LazyPage3 } from '../01-Lazyload/pages';

import { routes } from './Route';

import logo from '../logo.svg';
import { Loading } from '../components/Loading';
import { Items } from '../components/Items';

export const Navigation = () => {
  return (
    // Con el suspense indicamos a react que espera a que cargue un elemento pero se puede encargar de hacer la siguiente tarea
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <div className='main-layout'>
          
          <nav>
            <img src={logo} alt="logo"/>
            <Items />
          </nav>
          <Routes>              
            {
              routes.map(route => (
                <Route
                  key={route.to}
                  path={route.path}
                  element={< route.Component />}
                />
              ))
            }
            <Route 
              path='/*'
              element={<Navigate to={routes[0].to} replace />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  );
};
