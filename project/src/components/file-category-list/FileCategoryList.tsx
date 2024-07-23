// import './FileCategory.scss';

import { useState } from "react";
import { fileCategories } from "../../consts/const";
import FileCategoryItem from "../file-category-item/FileCategoryItem";
import { useDispatch } from "react-redux";
import { changeCategory } from "../../store/fileSlice";
import { Status } from "../../types/types";

function FileCategoryList(): JSX.Element {
  const dispatch = useDispatch();
  const [activeCategory, setActiveCategory] = useState<Status>(Status.ACTIVE);

  function changeCategoryHandler(value: Status) {
    setActiveCategory(value);

    dispatch(changeCategory({activeCategory: value}))
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
