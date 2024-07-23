// import './Menu.scss';

import { useEffect, useState } from "react";
import MenuItem from "../menu-item/Menu-item";
import { IMenuItem } from "../../types/types";
import { useLocation, useNavigate } from "react-router-dom";

interface IMenuProp {
  list: IMenuItem[];
}

function Menu({ list }: IMenuProp): JSX.Element {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeItem, setActiveItem] = useState<string>("");

  useEffect(() => {
    // Устанавливаем активный элемент на основе текущего пути
    const currentPath = location.pathname;
    const activeItem = list.find(item => item.link === currentPath)?.value || "convert";
    setActiveItem(activeItem);
  }, [location, list]);

  function handleChangeActive(value: string, link: string) {
    setActiveItem(value);
    navigate(link);
  }

  return (
    <div className="menu__wrapper pt-24 flex flex-col justify-start grow">
      <ul className="menu__list">
        {list
          ? list.map((item: IMenuItem) => (
              <MenuItem
                key={item.value}
                active={activeItem}
                handleChangeActive={handleChangeActive}
                item={item}
              />
            ))
          : ""}
      </ul>
    </div>
  );
}

export default Menu;
