import React from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";

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
const ruleValidation: { [key: string]: any } = {};

for (const { name, value, valiations } of fieldForms) {
  // Capturamos nuestro valor inicial
  initialValues[name] = value;

  // Validamos que no haya nada validaciones
  if (!valiations) continue;

  // Creamos un schema para cada uno de los campos
  let schema = Yup.string();

  // Iteramos por cada uno de los type que tenga las validaciones
  for (const rule of valiations) {
    if (rule.type === "required") {
      schema = schema.required(rule.message);
    }
    if (rule.type === "minLength") {
      schema = schema.min((rule as any).value, rule.message);
    }
    if (rule.type === "maxLength") {
      schema = schema.max((rule as any).value, rule.message);
    }
  }

  ruleValidation[name] = schema;
}

const validationShema = Yup.object({ ...ruleValidation });

export const DynamicFormPage = () => {
  return (
    <div className="container">
      <h1> Dynamic Form Page </h1>

      <Formik
        initialValues={initialValues}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationShema}
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
