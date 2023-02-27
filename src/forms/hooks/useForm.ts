import { ChangeEvent, useState } from "react"

/*
  * Creamos un custom hook generico con la itencion de poder utilizarlo 
  * en diferentes comoponentes, que haga la misma logica con diferentes
  * propiedades.  
*/
export const useForm = <T>(initialValue: T) => {
  const [formData, setFormData] = useState(initialValue);

  const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };


  const restForm = () => {
    setFormData({
      ...initialValue
    })
  };

  const isValidEmail = ( email: string ) => {
    const emailValid = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailValid.test(email);
}

  return {
    ...formData,
    formData,
    isValidEmail,
    onChangeValue,
    restForm
  }
}