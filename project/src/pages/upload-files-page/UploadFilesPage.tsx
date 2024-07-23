// import './UploadFilesPage.scss';

import Layout from "../../layout/Layout";
import FileCategory from "../../components/file-category-list/FileCategoryList";
import FileList from "../../components/file-list/FileList";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setFiles } from "../../store/fileSlice";
import { userSaveFiles } from "../../consts/const";

function UploadFilesPage(): JSX.Element {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setFiles(userSaveFiles));
  }, [dispatch]);

  return (
    <Layout>
      <h2 className="text-2xl mb-6 font-medium">Ваши файлы</h2>

      <div className="bg-black/5 rounded-md inline-block mb-4">
        <FileCategory />
      </div>

      <div>
        <FileList />
      </div>
    </Layout>
  );
}

export default UploadFilesPage;
