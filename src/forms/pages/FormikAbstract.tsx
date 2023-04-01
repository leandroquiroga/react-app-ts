import { Formik, Form } from "formik";
import * as Yup from "yup";

import { validationErrorSchema } from "../helpers";
import { valueFormWithYup } from "../helpers/index";
import { TextInput } from "../components/TextInput";
import { SelectInput } from "../components/SelectInput";
import { CheckInput } from "../components/CheckInput";

import "../styles/styles.css";

export const FormikAbstract = () => {
  return (
    <div>
      <h1> Formik Abstract </h1>

      <Formik
        initialValues={valueFormWithYup}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object(validationErrorSchema)}
      >
        {(formik) => (
          <Form noValidate>
            <TextInput
              label="First Name"
              name="firstName"
              placeholder="Your first name"
            />
            <TextInput
              label="Last Name"
              name="lastName"
              placeholder="Your last name"
            />
            <TextInput
              label="Email"
              name="email"
              type="email"
              placeholder="youremail@..."
            />

            <SelectInput label="Job Types" as="select" name="jobTypes">
              <option value="">Escoje su puesto</option>
              <option value="junior">Junior</option>
              <option value="mid-senior">Mid Senior</option>
              <option value="senior">Senior</option>
              <option value="tech-lead">Teach Lead</option>
            </SelectInput>

            <CheckInput label="Terminos y Condiciones" name="terms" />

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
