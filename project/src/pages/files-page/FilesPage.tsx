// import './UploadFilesPage.scss';

import Layout from "../../layout/Layout";
import FileCategory from "../../components/file-category-list/FileCategoryList";
import FileList from "../../components/file-list/FileList";

function FilesPage(): JSX.Element {
  return (
    <Layout>
      <h2 className="text-2xl mb-6 font-medium">Загруженные файлы</h2>

      <div className="bg-black/5 rounded-md inline-block mb-4">
        <FileCategory />
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
    </Layout>
  );
}

export default FilesPage;
