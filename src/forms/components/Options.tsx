import { OptionsProps } from "../interfaces/interfaces";


export const Options = ({ arrayOptions }: OptionsProps): JSX.Element => {
  return (
    <>
      {arrayOptions?.map((e, i) =>
        e === "" ? (
          <option value="" key={i}>
            Escoja una opcion
          </option>
        ) : (
          <option value={e} key={i}>
            {e}
          </option>
        )
      )}
    </>
  );
};
