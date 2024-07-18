// import "./Menu-item.scss";

import classNames from "classnames";
import { IMenuItem } from "../../layout/Layout";

interface IMenuItemProp {
  activeId: number;
  handleChangeActive: (id: number) => void;
  item: IMenuItem;
}

function MenuItem({
  activeId,
  handleChangeActive,
  item,
}: IMenuItemProp): JSX.Element {
  const { id, name } = item;

  const isActive = activeId == id;

  return (
    <li
      onClick={() => handleChangeActive(id)}
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
