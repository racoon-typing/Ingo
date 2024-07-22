// import './Menu.scss';

import { useEffect, useState } from "react";
import MenuItem from "../menu-item/Menu-item";
import { IMenuItem } from "../../types/types";
import { useNavigate } from "react-router-dom";

interface IMenuProp {
  list: IMenuItem[];
}

function Menu({ list }: IMenuProp): JSX.Element {
  const [activeItem, setActiveItem] = useState<string>("convert");
  const navigate = useNavigate();

  useEffect(() => {
    // Найти ссылку, соответствующую активному элементу
    const link = list.find((item) => item.value === activeItem)?.link || "";
    console.log("Navigating to:", link); // Отладочный вывод

    // Выполнить навигацию
    if (link) {
      navigate(link);
    }
  }, [activeItem, list, navigate]); // Выполняем навигацию при изменении activeItem

  function handleChangeActive(value: string) {
    // Обновление состояния активного элемента
    if (value !== activeItem) {
      setActiveItem(value);
    }
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
