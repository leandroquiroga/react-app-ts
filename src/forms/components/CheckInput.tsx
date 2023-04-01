import { useField } from "formik";
import { CheckInputProps } from "../interfaces/interfaces";

export const CheckInput = ({ label, ...props }: CheckInputProps) => {
  const [field, meta] = useField({...props, type: 'checkbox' });
  return (
    <>
      <label>
        <input type="checkbox" className="input" {...field} {...props} />
        {label}
      </label>
      {meta.touched && meta.error && (
        <span className="error">{meta.error}</span>
      )}
    </>
  );
};
