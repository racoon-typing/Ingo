// import './FormFiled.scss';

import React from "react";
import { FormField, FormFieldType } from "../../../types/types";

// interface IFormFiled {
//   value: FormField;
// }

interface IFormFiled {
  value: FormField;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  onBlur: () => void;
  name: string;
  ref: React.Ref<any>;
}

// function FormFiled({ value }: IFormFiled): JSX.Element {
//   const { id, name, label, placeholder, inputType, type, className, options } =
//     value;

function FormFiled({
  value,
  onChange,
  onBlur,
  name,
  ref,
}: IFormFiled): JSX.Element {
  const { id, label, placeholder, inputType, type, className, options } = value;

  return (
    <div className={className}>
      <label className="block text-black mb-2" htmlFor={id}>
        {label}
      </label>

      {inputType && inputType === FormFieldType.INPUT ? (
        <input
          id={id}
          name={name}
          className="w-full border bg-white border-zinc-400 rounded px-3 py-3"
          type={type || "text"}
          placeholder={placeholder}
          onChange={onChange}
          onBlur={onBlur}
          ref={ref}
        />
      ) : inputType === FormFieldType.SELECT ? (
        <select
          className="w-full border bg-white border-zinc-400 rounded px-3 py-3.5"
          name={name}
          id={id}
          onChange={onChange}
          onBlur={onBlur}
          ref={ref}
        >
          {options && options.length > 0 ? (
            options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.name}
              </option>
            ))
          ) : (
            <option value="">Нет доступных опций</option>
          )}
        </select>
      ) : null}
    </div>
  );
}

export default FormFiled;
