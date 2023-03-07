import { FormEvent } from "react";
import { useForm } from "../hooks/useForm";

import "../styles/styles.css";
import { valueRegisterData } from "../helpers";
import { ValueForm } from "../interfaces/interfaces";

export const RegisterPage = () => {
  const {
    email,
    name,
    password1,
    password2,
    formData,
    onChangeValue,
    restForm,
    isValidEmail,
  } = useForm<ValueForm>(valueRegisterData);

  const onSubmitData = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="container">
      <h1>Register Page</h1>
      <form onSubmit={(e) => onSubmitData(e)}>
        <input
          type="text"
          placeholder="Nombre"
          name="name"
          value={name}
          onChange={(e) => onChangeValue(e)}
          className={`${name.trim().length <= 0 && "has-error"}`}
        />
        {name.trim().length <= 0 && <span>El nombre es obligatorio</span>}
        <input
          type="emial"
          placeholder="Email"
          name="email"
          value={email}
          onChange={(e) => onChangeValue(e)}
          className={`${!isValidEmail(email) && "has-error"}`}
        />
        {!isValidEmail(email) && <span>El email es invalido</span>}
        <input
          type="password"
          placeholder="Contraseña"
          name="password1"
          value={password1}
          onChange={(e) => onChangeValue(e)}
          className={`${password1.trim().length <= 0 && "has-error"}`}
        />
        {password1.trim().length <= 0 && (
          <span>El password es obligatorio</span>
        )}
        {password1.trim().length < 6 && password1.trim().length > 0 && (
          <span> Las contraseña debe tener al memos 6 caracteres</span>
        )}
        <input
          type="password"
          placeholder="Repetir Contraseña"
          name="password2"
          value={password2}
          onChange={(e) => onChangeValue(e)}
          className={`${password2.trim().length <= 0 && "has-error"}`}
        />
        {password2.trim().length <= 0 && (
          <span>La confirmacion del password es obligatorio</span>
        )}
        {password1 !== password2 && (
          <span> Las contraseña deben ser iguales</span>
        )}
        <button type="submit">Sing Up</button>
        <button type="reset" onClick={restForm}>
          Reset
        </button>
      </form>
    </div>
  );
};
