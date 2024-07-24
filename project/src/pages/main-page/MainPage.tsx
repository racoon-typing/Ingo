// import "./MainPage.scss";

import { Link } from "react-router-dom";

function MainPage(): JSX.Element {
  return (
    <div
      className="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-br
     from-blue-900 to-sky-950
     "
    >
      <div className="text-white w-2/3">
        <h1 className="text-6xl font-bold text-center mb-5">
          ИНГО.Безопасность - Аудио
        </h1>

        <p className="text-xl text-center">
          Приложение которое призвано облегчить работу с аудиофайлами,
          обеспечивая их точную и быструю конвертацию в текстовый формат.
        </p>

        <div className="flex justify-center mt-10">
          <Link className="px-5 py-2 border-2 border-white hover:bg-white hover:text-black rounded mr-5" to={"/login"}>Регистрация</Link>
          <Link className="px-5 py-2 border-2 border-white hover:bg-white hover:text-black rounded" to={"/auth"}>Войти</Link>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
