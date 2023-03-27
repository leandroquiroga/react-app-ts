import { useField } from "formik";
import { TextInputProps } from "../interfaces/interfaces";

export const TextInput = ({ label, ...props }: TextInputProps) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}> {label} </label>
      <input className="input" {...field} {...props} />
      {
        meta.touched && meta.error && (
          <span className="error">{ meta.error }</span>
        )
      }
    </>
  );
};
