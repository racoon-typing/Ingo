import React from "react";
import { FormField, FormFieldType } from "../../../types/types";
import { FieldError } from "react-hook-form";

interface IFormFiledProps {
  value: FormField;
  fieldValue: string | number;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  onBlur?: () => void;
  error?: FieldError;
}

const FormFiled: React.FC<IFormFiledProps> = ({
  value,
  fieldValue,
  onChange,
  onBlur,
  error,
}) => {
  const { id, name, label, inputType, className, options, placeholder, type } =
    value;

  return (
    <div className={className}>
      <label className="block text-black mb-2" htmlFor={id}>
        {label}
      </label>

      {inputType === FormFieldType.INPUT ? (
        <input
          className={`w-full border bg-white border-zinc-400 rounded px-3 py-3 ${
            error ? "border-red-500" : ""
          }`}
          id={id}
          name={name}
          type={type || "text"}
          placeholder={placeholder}
          value={fieldValue}
          onChange={onChange}
          onBlur={onBlur}
        />
      ) : inputType === FormFieldType.SELECT ? (
        <select
          className={`w-full border bg-white border-zinc-400 rounded px-3 py-3.5 ${
            error ? "border-red-500" : ""
          }`}
          name={name}
          id={id}
          value={fieldValue}
          onChange={onChange}
          onBlur={onBlur}
        >
          {options && options?.length > 0 ? (
            options?.map((option) => (
              <option key={option.value} value={option.value}>
                {option.name}
              </option>
            ))
          ) : (
            <option value="">Нет доступных опций</option>
          )}
        </select>
      ) : null}

      {error && <p className="text-red-500 mt-1">{error.message}</p>}
    </div>
  );
};

export default FormFiled;
