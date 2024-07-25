// import "./LoginPage.scss";

import FormFiled from "../../components/ui/form-field/FormFiled";
import { loginFormFields } from "../../consts/const";
import { Controller, useForm } from "react-hook-form";
// import { Department } from "../../types/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { userService } from "../../service/userService";
import { useNavigate } from "react-router-dom";

// Определите вашу схему Zod
const loginFormFieldsSchema = z.object({
  firstName: z
    .string()
    .nonempty("Имя не может быть пустым")
    .min(2, "Имя должно быть больше 2 символов"),
  lastName: z
    .string()
    .nonempty("Фамилия не может быть пустой")
    .min(2, "Фамилия должна быть больше 2 символов"),
  email: z.string().email({ message: "Неверный адрес электронной почты." }),
  tel: z.string().regex(/^\+7\d{10}$/, "Введите правильный телефонный номер"),
  password: z
    .string()
    .min(8, "Пароль должен быть не менее 8 символов")
    .regex(/[A-Z]/, "Пароль должен содержать хотя бы одну большую букву")
    .regex(/[0-9]/, "Пароль должен содержать хотя бы одну цифру")
    .regex(
      /[!@#$%^&*(),.?"':;{}|<>]/,
      "Пароль должен содержать хотя бы один специальный символ"
    ),
  userKey: z
    .string()
    .nonempty("Ключ не может быть пустым")
    .length(5, "Ключ должен быть из 5 символов"),
  department: z.string().min(1, "Выберите подразделение"),
});

export type LoginFormData = z.infer<typeof loginFormFieldsSchema>;

const formDefaultValues: LoginFormData = {
  firstName: "",
  lastName: "",
  email: "",
  tel: "",
  password: "",
  userKey: "",
  department: "1",
};

function LoginPage(): JSX.Element {
  const navigate = useNavigate();
  const { control, handleSubmit, reset } = useForm<LoginFormData>({
    defaultValues: formDefaultValues,
    resolver: zodResolver(loginFormFieldsSchema),
    mode: "onChange",
  });

  const onSubmit = async (userData: LoginFormData) => {
    console.log("Submitted data:", userData);

    try {
      const user = await userService.createUser(userData);
      console.log("User successfully created:", user);

      // Очищает форму
      reset({});

      navigate("/auth", { replace: true });
    } catch (error) {
      console.error("Error creating user:", error);
    }
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
                render={({ field, fieldState }) => (
                  <FormFiled
                    value={item}
                    fieldValue={field.value}
                    onChange={field.onChange}
                    onBlur={field.onBlur}
                    error={fieldState.error}
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
