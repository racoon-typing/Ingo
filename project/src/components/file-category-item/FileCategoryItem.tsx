// import './FileCategoryItem.scss';

import classNames from "classnames";
import { IFileCategory, Status } from "../../types/types";

interface IFileCategoryItemProp {
  category: IFileCategory;
  activeCategory: Status;
  changeCategoryHandler: (id: Status) => void;
}

function FileCategoryItem({
  category,
  activeCategory,
  changeCategoryHandler,
}: IFileCategoryItemProp): JSX.Element {
  const isActive = activeCategory === category.value;

  return (
    <li
      onClick={() => changeCategoryHandler(category.value)}
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
