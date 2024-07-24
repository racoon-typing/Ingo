// import './FormFiled.scss';

import { FormField, FormFieldType } from "../../../types/types";

interface IFormFiled {
  value: FormField;
}

function FormFiled({ value }: IFormFiled): JSX.Element {
  const { id, name, label, placeholder, inputType, type, className, options } =
    value;
  console.log(value);

  if () {
    
  }

  return (
    <div className={className}>
      <label className="block text-black mb-2" htmlFor={id}>
        {label}
      </label>

      {inputType && inputType === FormFieldType.INPUT ? (
        <input
          id={id}
          name={name}
          className="w-full border border-zinc-400 rounded px-3 py-3"
          type={type}
          placeholder={placeholder}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default FormFiled;
