// import './UploadFilesPage.scss';

import Layout from "../../layout/Layout";
import FileCategory from "../../components/file-category-list/FileCategoryList";
import FileList from "../../components/file-list/FileList";
import { Archive } from "lucide-react";
import { Status } from "../../types/types";
import { useDispatch } from "react-redux";
import { changeCategory } from "../../store/fileSlice";
import { useSelector } from "react-redux";
import classNames from "classnames";

function FilesPage(): JSX.Element {
  const dispatch = useDispatch();
  const activeCategory = useSelector((state) => state.data.activeCategory);
  const isArchived = activeCategory == Status.IN_ARCHIVE;
  const isOpenSettings = false;

  function changeCategoryHandler(value: Status) {
    console.log("dsds");

    dispatch(changeCategory({ activeCategory: value }));
  }

  return (
    <Layout>
      <h2 className="text-2xl mb-6 font-medium">Загруженные файлы</h2>

      <div className="flex justify-between items-center mb-4">
        <div className="bg-black/5 rounded-md inline-block">
          <FileCategory />
        </div>

        <div
          onClick={() => changeCategoryHandler(Status.IN_ARCHIVE)}
          className="bg-black/5 rounded-md p-2"
        >
          <div
            className={classNames("flex items-center p-2 px-3 rounded-md", {
              "bg-white shadow": isArchived,
              "": !isArchived,
            })}
          >
            <span className="text-base mr-3">В архиве</span>
            <Archive size={20} />
          </div>
        </div>
      </div>

      <form className="flex items-center mb-6 py-3 px-1">
        <input
          className="w-full h-10 rounded px-3 py-2 mr-4 border border-zinc-200"
          type="text"
          placeholder="Введите название или описание файла"
        />

        <button className="w-40 h-10 bg-blue-600 text-white rounded">
          Поиск
        </button>
      </form>

      <div>
        <FileList />
      </div>

      {isOpenSettings ? (
        <div className="fixed bottom-5 left-0 grid grid-cols-[300px_1fr] gap-8 w-full pr-5">
          <div></div>

          <div className="flex justify-between items-center bg-black/10 p-2 px-3 rounded">
            <p className="bg-white p-3 rounded">
              <span>{"5"}</span> файлов
            </p>

            <div className="flex items-center bg-white p-2 px-3 max-w-max rounded">
              <p className="mr-2">Перенести в папку</p>

              <select className="p-1.5 px-3 rounded" name="" id="">
                <option value="">Папка 1</option>
                <option value="">Папка 2</option>
                <option value="">Папка 3</option>
              </select>
            </div>

            <p className="bg-white p-3 rounded">Архив</p>
          </div>
        </div>
      ) : (
        ""
      )}
    </Layout>
  );
}

export default FilesPage;
