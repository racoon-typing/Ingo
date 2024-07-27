// import "./Layout.scss";

import { LogOut } from "lucide-react";
import Menu from "../components/menu/Menu";
import UserAcc from "../components/user-acс/UserAcc";
import { menuList } from "../consts/const";
import React from "react";
import { Link } from "react-router-dom";

interface ILayout {
  children: React.ReactNode;
}

function Layout({ children }: ILayout): JSX.Element {
  return (
    <>
      <div className="grid grid-cols-[300px_1fr] gap-8 w-full h-full">
        <div className="menu flex flex-col bg-sky-950 text-white py-10 px-5">
          <Link
            to={"/"}
            className="menu__logo text-3xl text-center mb-10 font-medium"
          >
            ИНГО.Безопасность
          </Link>

          {/* useMemo */}
          <UserAcc />

          <Menu list={menuList} />

          <Link to={"/logout"} className="mx-auto">
            <LogOut className="rotate-180" size={28} />
          </Link>
        </div>

        <div className="relative w-full py-8 pr-5 max-h-screen overflow-x-auto">
          {children}
        </div>
      </div>
    </>
  );
}

export default Layout;
