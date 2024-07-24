// import "./LoginPage.scss";

import FormFiled from "../../components/ui/form-field/FormFiled";
import { loginFormFields } from "../../consts/const";

function LoginPage(): JSX.Element {
  return (
    <div
      className="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-br
    from-blue-900 to-sky-950"
    >
      <div className="text-white w-1/2 max-w-xl">
        <h1 className="text-5xl font-bold text-center mb-6">Регистрация</h1>

        <form className="flex flex-col bg-white text-black rounded p-5 text-md">
          <div className="grid grid-cols-2 mb-4 gap-4">
            {loginFormFields
              ? loginFormFields.map((field) => <FormFiled value={field} />)
              : ""}
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
