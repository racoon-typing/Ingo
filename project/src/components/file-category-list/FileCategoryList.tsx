// import './FileCategory.scss';

import { useState } from "react";
import { fileCategories } from "../../consts/const";
import FileCategoryItem from "../file-category-item/FileCategoryItem";

function FileCategoryList(): JSX.Element {
  const [activeCategory, setActiveCategory] = useState<number>(1);

  function changeCategoryHandler(id: number) {
    setActiveCategory(id);
  }

  return (
    <ul className="flex p-2">
      {fileCategories
        ? fileCategories.map((category) => (
            <FileCategoryItem key={category.id} category={category} activeCategory={activeCategory} changeCategoryHandler={changeCategoryHandler} />
          ))
        : ""}
    </ul>
  );
}

export default FileCategoryList;
