import { BrowserRouter } from 'react-router-dom';
import {
  Routes,
  Route,
  NavLink,
  Navigate
} from 'react-router-dom';

import { RegisterPage } from '../forms/pages/RegisterPage';
import { FormikPage } from '../forms/pages/FormikPage';
import { FormikYupPage } from '../forms/pages/FormikYupPage';

import logo from '../logo.svg';
import { FormikComponents } from '../forms/pages/FormikComponents';
import { FormikAbstract } from '../forms/pages/FormikAbstract';
import { RegisterPageFormik } from '../forms/pages/RegisterPageFormik';
import { DynamicFormPage } from '../forms/pages/DynamicFormPage';

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="logo" />

          <ul>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "nav-active" : "")}
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "nav-active" : "")}
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "nav-active" : "")}
                to="/users"
              >
                Users
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "nav-active" : "")}
                to="/singup"
              >
                Register
              </NavLink>
            </li>{" "}
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "nav-active" : "")}
                to="/singup-formik"
              >
                Register Formik
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "nav-active" : "")}
                to="/formik-basic"
              >
                Formik Basic
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "nav-active" : "")}
                to="/formik-yup"
              >
                Formik Yup
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "nav-active" : "")}
                to="/formik-componets"
              >
                Formik Componets
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "nav-active" : "")}
                to="/formik-abstract"
              >
                Formik Abstract
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "nav-active" : "")}
                to="/formik-dynamic"
              >
                Formik Dynamic
              </NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<h1> Home Page</h1>} />
          <Route path="about" element={<h1> About Page</h1>} />
          <Route path="users" element={<h1> Users Page</h1>} />
          <Route path="singup" element={<RegisterPage />} />
          <Route path="singup-formik" element={<RegisterPageFormik />} />
          <Route path="formik-basic" element={<FormikPage />} />
          <Route path="formik-yup" element={<FormikYupPage />} />
          <Route path="formik-componets" element={<FormikComponents />} />
          <Route path="formik-abstract" element={<FormikAbstract />} />
          <Route path="formik-dynamic" element={<DynamicFormPage />} />

          <Route path="/*" element={<Navigate to="/home" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
