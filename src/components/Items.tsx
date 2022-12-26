import React from 'react'
import { routes } from '../router/Route';
import { NavLink } from 'react-router-dom';

export const Items = () => {
  return (
    <ul>
      {
        routes.map(route => (
          <li key={route.path}>
            <NavLink
              className={({ isActive }) => isActive ? 'nav-active' : ''}
              to={route.to}>
              {route.name}
            </NavLink>    
          </li>
        ))
      }
    </ul>
  )
}