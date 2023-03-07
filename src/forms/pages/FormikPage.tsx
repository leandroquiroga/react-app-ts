import { FormikErrors, useFormik } from 'formik';
import "../styles/styles.css";
import { InitialValue } from '../interfaces/interfaces';

export const FormikPage = () => {

  const validate = ({email, firstName, lastName}: InitialValue) => {
    
    // Se debe crear un objeto para de tipo FormikError que al ser generico recibe la interface en la que se quiera realizar los errores
    const errors: FormikErrors<InitialValue> = {};

    if (!firstName) {
      errors.firstName = 'First Name is required'
    } else if (firstName.length >= 15) {
      errors.firstName = 'Must be 15 characters or less'
    }

    if (!lastName) {
      errors.lastName = 'Last Name is required'
    } else if (lastName.length >= 15) {
      errors.lastName = 'Must be 15 characters or less'
    }

    if (!email) {
      errors.email = 'Email is Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      errors.email = 'Invalid email address';
    }
    return errors;
  }

  const {handleSubmit, handleChange, handleReset ,values, errors, touched, handleBlur} = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    onSubmit: values => {
      console.log(values)
    },
    validate
  })
  return (
    <div>
      <h1> Formik Basic Tutorial</h1>
      <form noValidate onSubmit={handleSubmit}>
        <label
          htmlFor="firstName">
            First Name:
        </label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          placeholder="First Name"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.firstName}
        />
        { touched.firstName && errors.firstName && <span>{ errors.firstName }</span>}
        <label 
          htmlFor="lastName">
          Last Name:
        </label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          placeholder="Last Name"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.lastName}
        />
        { touched.lastName && errors.lastName && <span>{ errors.lastName }</span>}

        <label
          htmlFor="email">
          Email:
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
        />
        { touched.email && errors.email && <span>{ errors.email }</span>}
        <button type="submit">Send</button>
        <button
          type="reset"
          onClick={handleReset}
        >Reset</button>
      </form>
    </div>
  );
};
