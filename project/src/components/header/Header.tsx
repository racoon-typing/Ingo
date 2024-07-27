// import "./Header.scss";

import { Link } from "react-router-dom";

interface IHeader {
  className: string;
}

function Header({ className }: IHeader): JSX.Element {
  return (
    <div className={`${className} flex justify-between items-center`}>
      <div className="container m-auto">
        <Link
          to={"/"}
          className="w-12 h-12 flex items-center justify-center border-2 border-white rounded-full"
        >
          <p className="text-white font-bold text-2xl">И</p>
        </Link>

        {/* <input type="text" className="header__input" /> */}
      </div>
    </div>
  );
}

export default Header;
