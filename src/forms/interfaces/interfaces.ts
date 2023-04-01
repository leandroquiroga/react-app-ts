
export interface ValueForm {
  name: string,
  email: string,
  password1: string,
  password2: string,
};

export interface InitialValue {
  firstName: string;
  lastName: string;
  email: string;
  terms?: boolean
  jobTypes?: string;
}

export interface TextInputProps {
  label: string;
  name: string;
  type?: 'text' | 'email' | 'password' | 'number';
  placeholder?: string;
  //Comodin
  [x: string]: any;
}

export interface SelectInputProps{
  label: string;
  name: string; 
  as: string;
  [x: string]: any;
}
export interface CheckInputProps {
  label: string;
  name: string;
  [x: string]: any;
}

export interface ButtonsProps {
  type: "submit" | "reset" | "button";
  value?: string;
  styles?: string;
}
