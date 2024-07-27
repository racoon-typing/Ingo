// import './FileCategory.scss';

import { fileCategories } from "../../consts/const";
import FileCategoryItem from "../file-category-item/FileCategoryItem";
import { useDispatch } from "react-redux";
import { changeCategory } from "../../store/fileSlice";
import { Status } from "../../types/types";
import { useSelector } from "react-redux";

function FileCategoryList(): JSX.Element {
  const dispatch = useDispatch();
  const activeCategory = useSelector((state) => state.data.activeCategory);

  function changeCategoryHandler(value: Status) {
    dispatch(changeCategory({ activeCategory: value }));
  }

  return (
    <ul className="flex p-2">
      {fileCategories
        ? fileCategories.map((category) => (
            <FileCategoryItem
              key={category.id}
              category={category}
              activeCategory={activeCategory}
              changeCategoryHandler={changeCategoryHandler}
            />
          ))
        : ""}
    </ul>
  );
}

export default FileCategoryList;
