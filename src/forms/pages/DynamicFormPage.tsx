import React from "react";
import { Form, Formik } from "formik";

import fieldForms from "../data/custom-form.json";
import { Button } from "../components/Button";
import { TextInput } from "../components/TextInput";
import { SelectInput } from "../components/SelectInput";
import { Options } from "../components/Options";

/*
 * Creamos el initial values dinamico, para crear la interface
 * es recomendable que sea un comidin, esto que quiere decir
 * que todas las llaves de nuestro son de tipo string, luego
 * le indicamos que sea de tipo any ya que no sabemos como se comporta
 * nuestro formulario dinamico
 */
const initialValues: { [key: string]: any } = {};

for (const { name, value } of fieldForms) {
  initialValues[name] = value;
}

export const DynamicFormPage = () => {
  return (
    <div className="container">
      <h1> Dynamic Form Page </h1>

      <Formik
        initialValues={initialValues}
        onSubmit={(values) => console.log(values)}
      >
        {(formik) => (
          <Form noValidate>
            {fieldForms.map(({ type, label, name, placeholder, options }) => {
              return type === "select" ? (
                <SelectInput key={name} label={label} name={name} as="select">
                  <Options arrayOptions={options} />
                </SelectInput>
              ) : (
                <TextInput
                  key={name}
                  type={type as any}
                  placeholder={placeholder}
                  label={label}
                  name={name}
                />
              );
            })}

            <Button type="submit" value="Enviar" />
            <Button type="reset" value="Resetear" />
          </Form>
        )}
      </Formik>
    </div>
  );
};
