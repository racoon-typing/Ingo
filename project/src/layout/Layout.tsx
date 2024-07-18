// import "./Layout.scss";

import { UserRound } from "lucide-react";
import Menu from "../components/menu/Menu";

const menuList = [
  {
    id: 1,
    name: "Конвертировать файлы",
    value: "convert",
  },
  {
    id: 2,
    name: "Сохраненные файлы",
    value: "files",
  },
  {
    id: 3,
    name: "Статистика",
    value: "statistic",
  },
];

export interface IMenuItem {
  id: number;
  name: string;
  value: string;
}

function Layout({ children }): JSX.Element {
  return (
    <>
      <div className="wrapper grid grid-cols-[300px_1fr] gap-8 w-full h-full">
        <div className="menu flex flex-col bg-sky-950 text-white py-10 px-5">
          <p className="menu__logo text-3xl text-center mb-10">
            ИНГО.Безопасность
          </p>

          <div className="user p-6 pr-0 bg-white text-black rounded-md">
            <UserRound className=" mb-3" size={40} />

            <h3 className="user__name text-3xl mb-2">Даниил Суворов</h3>

            <small className="mb-2">
              <b>Почта:</b>
              &nbsp; eo18622@yandex.ru
            </small>
            <br />
            <small>
              <b>Статус:</b>
              &nbsp; участник
            </small>
          </div>

          <Menu list={menuList} />
        </div>

        <div className="w-full py-8 pr-5">
          <div className="">{children}</div>
        </div>
      </div>
    </>
  );
}

export default Layout;
