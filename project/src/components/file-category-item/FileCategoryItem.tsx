// import './FileCategoryItem.scss';

import classNames from "classnames";
import { IActiveFilter, IFileCategory } from "../../types/types";

interface IFileCategoryItemProp {
  category: IFileCategory;
  activeFilter: IActiveFilter;
  changeCategoryHandler: (value: IActiveFilter) => void;
}

// В компоненте:
const determineActiveCategory = (activeFilter: IActiveFilter, categoryValue: IActiveFilter) => {
  return activeFilter.status === categoryValue.status && activeFilter.converted === categoryValue.converted;
};

function FileCategoryItem({
  category,
  activeFilter,
  changeCategoryHandler,
}: IFileCategoryItemProp): JSX.Element {
  const isActive = determineActiveCategory(activeFilter, category.value);
  console.log(isActive);

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
