// import './FileCategory.scss';

import { fileCategories } from "../../consts/const";
import FileCategoryItem from "../file-category-item/FileCategoryItem";
import { useDispatch } from "react-redux";
import { changeCategory } from "../../store/fileSlice";
import { IActiveFilter } from "../../types/types";
import { useSelector } from "react-redux";

function FileCategoryList(): JSX.Element {
  const dispatch = useDispatch();
  // const activeFilter = useSelector((state) => state.data.activeFilter);
  const { filteredFiles, activeFilter } = useSelector((state: any) => state.data);
  console.log(filteredFiles);
  

  function changeCategoryHandler(value: IActiveFilter) {
    console.log(value);
    dispatch(changeCategory(value));
  }

  return (
    <ul className="flex p-2">
      {fileCategories
        ? fileCategories.map((category) => (
            <FileCategoryItem
              key={category.id}
              category={category}
              activeFilter={activeFilter}
              changeCategoryHandler={changeCategoryHandler}
            />
          ))
        : ""}
    </ul>
  );
}

export default FileCategoryList;
