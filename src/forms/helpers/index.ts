import * as Yup from 'yup';
import { ValueForm, InitialValue } from '../interfaces/interfaces';

export const valueRegisterData: ValueForm = {
  name: '',
  email: '',
  password1: '',
  password2: '',
};

export const valueFormWithYup: InitialValue = {
  firstName: '',
  lastName: '',
  email: '',
}

export const validationErrorSchema = {
  firstName: Yup.string().max(15, 'Debe tener 15 caracteres o menos').required('El nombre es obligatorio'),
  lastName: Yup.string().max(15, 'Debe tener 15 caracteres o menos').required('El nombre es requerido'),
  email: Yup.string().email('El email es invalido').required('El email es obligatorio')
}