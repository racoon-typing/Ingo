import React from "react";
import { FormField, FormFieldType } from "../../../types/types";

interface IFormFiledProps {
  value: FormField;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  onBlur?: () => void;
}

const FormFiled: React.FC<IFormFiledProps> = ({
  value,
  onChange,
  onBlur,
}) => {
  const { id, name, label, inputType, className, options, placeholder, type } = value;

  return (
    <div className={className}>
      <label className="block text-black mb-2" htmlFor={id}>
        {label}
      </label>

      {inputType === FormFieldType.INPUT ? (
        <input
          id={id}
          name={name}
          className="w-full border bg-white border-zinc-400 rounded px-3 py-3"
          type={type || "text"}
          placeholder={placeholder}
          onChange={onChange}
          onBlur={onBlur}
        />
      ) : inputType === FormFieldType.SELECT ? (
        <select
          className="w-full border bg-white border-zinc-400 rounded px-3 py-3.5"
          name={name}
          id={id}
          onChange={onChange}
          onBlur={onBlur}
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
};

export default FormFiled;
