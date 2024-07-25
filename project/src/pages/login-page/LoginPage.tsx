// import "./LoginPage.scss";

import FormFiled from "../../components/ui/form-field/FormFiled";
import { loginFormFields } from "../../consts/const";
import { Controller, useForm } from "react-hook-form";
// import { Department } from "../../types/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// Определите вашу схему Zod
const loginFormFieldsSchema = z.object({
  firstName: z.string().nonempty("Имя не может быть пустым"),
  lastName: z.string().nonempty("Фамилия не может быть пустой"),
  tel: z
    .string()
    .regex(
      /^\+7 \d{3} \d{3} \d{2} \d{2}$/,
      "Введите правильный телефонный номер"
    ),
  password: z.string().min(8, "Пароль должен быть не менее 8 символов"),
  userKey: z.string().nonempty("Ключ не может быть пустым"),
  department: z.number().min(1, "Выберите подразделение"),
});

export type FormData = z.infer<typeof loginFormFieldsSchema>;

const formDefaultValues: FormData = {
  firstName: "",
  lastName: "",
  tel: "",
  password: "",
  userKey: "",
  department: 3,
};

function LoginPage(): JSX.Element {
  const { control, handleSubmit } = useForm<FormData>({
    defaultValues: formDefaultValues,
    resolver: zodResolver(loginFormFieldsSchema),
    mode: "onChange",
  });

  const onSubmit = (data: FormData) => {
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
            {loginFormFields.map((item) => (
              <Controller
                key={item.id}
                name={item.name}
                control={control}
                render={({ field }) => (
                  <FormFiled
                    value={item}
                    fieldValue={field.value}
                    // errors={field}
                    onChange={field.onChange}
                    onBlur={field.onBlur}
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
