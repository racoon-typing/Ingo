// import "./LoginPage.scss";

import FormFiled from "../../components/ui/form-field/FormFiled";
import { authFormFields, CURRENT_USER, CURRENT_USER_ID } from "../../consts/const";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useNavigate } from "react-router-dom";
import { userService } from "../../service/userService";
import { LoginFormData } from "../../types/types";

// Определите вашу схему Zod
const authFormFieldsSchema = z.object({
  email: z.string().email({ message: "Неверный адрес электронной почты." }),
  password: z
    .string()
    .min(8, "Пароль должен быть не менее 8 символов")
    .regex(/[A-Z]/, "Пароль должен содержать хотя бы одну большую букву")
    .regex(/[0-9]/, "Пароль должен содержать хотя бы одну цифру")
    .regex(
      /[!@#$%^&*(),.?"':;{}|<>]/,
      "Пароль должен содержать хотя бы один специальный символ"
    ),
});

export type AuthFormData = z.infer<typeof authFormFieldsSchema>;

const formDefaultValues: AuthFormData = {
  email: "",
  password: "",
};

function AuthPage(): JSX.Element {
  const navigate = useNavigate();
  const { control, handleSubmit, reset } = useForm<AuthFormData>({
    defaultValues: formDefaultValues,
    resolver: zodResolver(authFormFieldsSchema),
    mode: "onChange",
  });

  const onSubmit = async (userData: AuthFormData) => {
    console.log("Submitted data:", userData);

    try {
      const user: LoginFormData & {id: string} = await userService.authUser(userData.email, userData.password);
      localStorage.setItem(CURRENT_USER, JSON.stringify({id: user.id, email: user.email}));
      console.log('User successfully auth:', user);

      // Очищает форму
      reset({});
      navigate('/account', {replace: true});
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
        <h1 className="text-5xl font-bold text-center mb-6">Авторизация</h1>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col bg-white text-black rounded p-5 text-md"
        >
          <div className="grid mb-8 gap-4">
            {authFormFields.map((item) => (
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
            Войти
          </button>
        </form>
      </div>
    </div>
  );
}

export default AuthPage;
