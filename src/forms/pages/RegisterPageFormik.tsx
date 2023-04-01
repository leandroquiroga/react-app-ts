import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import "../styles/styles.css";
import { validationRegisterErrorSchema, valueRegisterData } from "../helpers";
import { TextInput } from "../components/TextInput";
import { Button } from "../components/Button";

export const RegisterPageFormik = () => {

  return (
    <div className="container">
      <h1>Register Formik Page</h1>

      <Formik
        initialValues={valueRegisterData}
        onSubmit={(values) => console.log(values)}
        validationSchema={Yup.object(validationRegisterErrorSchema)}
      >
        {(formik) => (
          <Form noValidate>
            <TextInput
              label="Nombre completo"
              name="name"
              placeholder="Ingrese su nombre completo"
            />

            <TextInput
              label="Email"
              name="email"
              type="email"
              placeholder="Ingrese su email"
            />

            <TextInput
              label="Contraseña"
              name="password1"
              type="password"
              placeholder="Ingrese su contraseña"
            />
            <TextInput
              label="Repite contraseña"
              name="password2"
              type="password"
              placeholder="Repita su contraseña"
            />

            <Button type="submit" styles="button_submit" value="Enviar" />
            <Button type="reset" styles="button_reset" value="Resetear" />
          </Form>
        )}
      </Formik>
    </div>
  );
};
