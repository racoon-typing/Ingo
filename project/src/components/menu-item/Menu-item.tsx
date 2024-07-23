// import "./Menu-item.scss";

import classNames from "classnames";
import { IMenuItem } from "../../types/types";

interface IMenuItemProp {
  active: string;
  handleChangeActive: (id: string, link: string) => void;
  item: IMenuItem;
}

function MenuItem({
  active,
  handleChangeActive,
  item,
}: IMenuItemProp): JSX.Element {
  const { name, value, link } = item;
  const isActive = active === value;

  return (
    <li
      onClick={() => handleChangeActive(value, link)}
      className={classNames(
        "menu__item p-4 px-2 rounded-md text-black mb-2 duration-300",
        {
          "bg-white translate-x-2": isActive,
          "bg-white bg-opacity-30": !isActive,
        }
      )}
    >
      {name}
    </li>
  );
}

export default MenuItem;
