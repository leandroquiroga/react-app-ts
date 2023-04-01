import { ButtonsProps } from "../interfaces/interfaces";

export const Button = (props: ButtonsProps): JSX.Element => {
  return <button type={props.type} className={props.styles}>{props.value}</button>;
};
