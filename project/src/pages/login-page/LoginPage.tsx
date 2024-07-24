// import "./LoginPage.scss";

import { useState } from "react";
import FormFiled from "../../components/ui/form-field/FormFiled";
import { loginFormFields } from "../../consts/const";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

type FormData = {
  [key: string]: string | number | undefined;
};

function LoginPage(): JSX.Element {
  // const [formData, setFormData] = useState<FormData>({});

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
  //   const { name, value } = e.target;
  //   setFormData(prevState => ({ ...prevState, [name]: value }));
  // };

  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   console.log('Submitted data:', formData);
  //   // Вы можете выполнить дополнительные действия с данными здесь
  // };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: loginFormFields.reduce((acc, field) => {
      acc[field.name] = "";
      return acc;
    }, {} as FormData),
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log("Submitted data:", data);
    // Выполните дополнительные действия с данными здесь
  };

  return (
    <div
      className="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-br
    from-blue-900 to-sky-950"
    >
      <div className="text-white w-1/2 max-w-xl">
        <h1 className="text-5xl font-bold text-center mb-6">Регистрация</h1>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col bg-white text-black rounded p-5 text-md"
        >
          <div className="grid grid-cols-2 mb-8 gap-4">
            {/* {loginFormFields
              ? loginFormFields.map((field) => <FormFiled key={field.id} value={field} onChange={handleChange} />)
              : ""} */}

            {loginFormFields.map((item) => (
              <Controller
                key={item.id}
                name={item.name}
                control={control}
                render={({ field: formField }) => (
                  <FormFiled
                    value={item}
                    {...formField} // Передаем пропсы в компонент FormFiled
                  />
                )}
              />
            ))}
          </div>

          <button
            className="bg-blue-600 text-white rounded px-3 py-3"
            type="submit"
          >
            Зарегистрироваться
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
