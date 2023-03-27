import { useField } from 'formik';
import { SelectInputProps } from '../interfaces/interfaces';

export const SelectInput = ({label, ...props}: SelectInputProps) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <select {...field} {...props} />
      {
        meta.touched && meta.error && (
          <span className='error'>{ meta.error }</span>
        )
      }
    </>
  )
}
