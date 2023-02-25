import { ChangeEvent, FormEvent, useState } from "react";
import { ValueForm } from "../interfaces/interfaces";
import { initialValue } from "../helpers/index";

import "../styles/styles.css";

export const RegisterPage = () => {
  const [registerData, setRegisterData] = useState<ValueForm>(initialValue);

  const { email, name, password1, password2 } = registerData;

  const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    setRegisterData({
      ...registerData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitData = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(registerData);
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
        />
        <input
          type="emial"
          placeholder="Email"
          name="email"
          value={email}
          onChange={(e) => onChangeValue(e)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          name="password1"
          value={password1}
          onChange={(e) => onChangeValue(e)}
        />
        <input
          type="password"
          placeholder="Repetir Contraseña"
          name="password2"
          value={password2}
          onChange={(e) => onChangeValue(e)}
        />

        <button type="submit">Sing Up</button>
      </form>
    </div>
  );
};
