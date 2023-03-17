import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import "../styles/styles.css";
import { validationErrorSchema } from "../helpers";
import { valueFormWithYup } from "../helpers/index";

export const FormikComponents = () => {
  return (
    <div>
      <h1> Formik Components</h1>

      <Formik
        initialValues={valueFormWithYup}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object(validationErrorSchema)}
      >
        {(formik) => (
          <Form noValidate>
            <label htmlFor="firstName">First Name:</label>
            <Field name="firstName" type="text" placeholder="First Name" />
            <ErrorMessage name="firstName" component="span" />

            <label htmlFor="lastName">Last Name:</label>
            <Field name="lastName" type="text" />
            <ErrorMessage name="lastName" component="span" />

            <label htmlFor="email">Email:</label>
            <Field name="email" type="email" />
            <ErrorMessage name="email" component="span" />

            <label htmlFor="jobTypes">Tipo de trabajo:</label>
            <Field name="jobTypes" as="select">
              <option value="">
                Escoje su puesto
              </option>
              <option value="junior">Junior</option>
              <option value="mid-senior">Mid Senior</option>
              <option value="senior">Senior</option>
              <option value="tech-lead">Teach Lead</option>
            </Field>
            <ErrorMessage name="jobTypes" component="span" />

            <label>
              <Field name="terms" type="checkbox" />
              Terminos y Condiciones
            </label>
            <ErrorMessage name="terms" component="span" />

            <button type="submit">Send</button>
            <button type="reset" onClick={formik.handleReset}>
              Reset
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
