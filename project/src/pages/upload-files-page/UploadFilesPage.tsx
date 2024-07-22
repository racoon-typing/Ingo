// import './UploadFilesPage.scss';

import Layout from "../../layout/Layout";
import FileCategory from "../../components/file-category-list/FileCategoryList";

function UploadFilesPage(): JSX.Element {
  return (
    <Layout>
      <h2 className="text-2xl mb-6 font-medium">Ваши файлы</h2>

      <div className="bg-black/5 rounded-md inline-block">
        <FileCategory />
      </div>

      <div>
        Файлы
      </div>
    </Layout>
  );
}

export default UploadFilesPage;
