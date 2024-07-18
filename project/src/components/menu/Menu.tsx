// import './Menu.scss';

import { useState } from "react";
import MenuItem from "../menu-item/Menu-item";
import { IMenuItem } from "../../types/types";

interface IMenuProp {
  list: IMenuItem[];
}

function Menu({ list }: IMenuProp): JSX.Element {
  const [activeItem, setActiveItem] = useState<number>(1);

  function handleChangeActive(id: number) {
    setActiveItem(id);
  }

  return (
    <div className="menu__wrapper pt-24 flex flex-col justify-start grow">
      <ul className="menu__list">
        {list
          ? list.map((item) => (
              <MenuItem
                key={item.value}
                activeId={activeItem}
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
