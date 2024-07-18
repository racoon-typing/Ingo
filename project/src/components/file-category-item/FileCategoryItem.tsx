// import './FileCategoryItem.scss';

import classNames from "classnames";
import { IFileCategory } from "../../types/types";

interface IFileCategoryItemProp {
  category: IFileCategory[];
}

function FileCategoryItem({
  category,
  activeCategory,
  changeCategoryHandler,
}: IFileCategoryItemProp): JSX.Element {
  const isActive = activeCategory === category.id;

  return (
    <li
      onClick={changeCategoryHandler(category.id)}
      key={category.id}
      className={classNames("p-2 px-3 rounded-md", {
        "bg-white shadow": isActive,
        "": !isActive,
      })}
    >
      {category.name}
    </li>
  );
}

export default FileCategoryItem;
