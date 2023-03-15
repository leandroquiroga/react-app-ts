import { useFormik } from "formik";
import * as Yup from "yup";

import "../styles/styles.css";
import { validationErrorSchema } from "../helpers";
import { valueFormWithYup } from "../helpers/index";

export const FormikYupPage = () => {
  const {
    handleSubmit,
    handleChange,
    handleReset,
    values,
    errors,
    touched,
    handleBlur,
    getFieldProps
  } = useFormik({
    initialValues: valueFormWithYup,
    onSubmit: (values) => {
      console.log(values);
    },

    validationSchema: Yup.object(validationErrorSchema),
  });
  return (
    <div>
      <h1> Formik Yup</h1>
      <form noValidate onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          placeholder="First Name"  
          {...getFieldProps('firstName')}
        />
        {touched.firstName && errors.firstName && (
          <span>{errors.firstName}</span>
        )}
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          placeholder="Last Name"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.lastName}
        />
        {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
        />
        {touched.email && errors.email && <span>{errors.email}</span>}
        <button type="submit">Send</button>
        <button type="reset" onClick={handleReset}>
          Reset
        </button>
      </form>
    </div>
  );
};
