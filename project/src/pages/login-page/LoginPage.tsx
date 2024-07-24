// import "./LoginPage.scss";

function LoginPage(): JSX.Element {
  return (
    <div
      className="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-br
   from-blue-900 to-sky-950
   "
    >
      <div className="text-white w-1/2 max-w-xl">
        <h1 className="text-5xl font-bold text-center mb-5">Регистрация</h1>

        <form className="flex flex-col bg-white rounded p-5 text-md">
          <div className="grid grid-cols-2 mb-4 gap-4">
            <input
              className="border border-zinc-400 rounded px-3 py-3"
              type="text"
              placeholder="Имя"
            />
            <input
              className="border border-zinc-400 rounded px-3 py-3"
              type="text"
              placeholder="Фамилия"
            />
          </div>

          <div className="grid grid-cols-2 mb-4 gap-4">
            <input
              className="border border-zinc-400 rounded px-3 py-3"
              type="tel"
              placeholder="+7 123 456 78 90"
            />
          </div>

          <input
            className="border border-zinc-400 mb-2 rounded px-3 py-3"
            type="text"
            placeholder="Ключ"
          />

          <input type="password" />

          <button className="bg-blue-600 rounded px-3 py-3" type="submit">
            Зарегистрироваться
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
