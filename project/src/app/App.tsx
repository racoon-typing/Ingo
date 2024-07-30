// import Files from "../components/files/Files";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import MainPage from "../pages/main-page/MainPage";
import LoginPage from "../pages/login-page/LoginPage";
import AccountPage from "../pages/account-page/AccountPage";
import AuthPage from "../pages/auth-page/AuthPage";
import LogoutPage from "../pages/logout-page/LogoutPage";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { changeCategory, setFiles } from "../store/fileSlice";
import { Status } from "../types/types";
import UploadFilePage from "../pages/upload-file-page1/UploadFilePage";
import FilesPage from "../pages/files-page/FilesPage";
import FolderPage from "../pages/folder-page/FolderPage";
import { fileService } from "../service/fileService";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    async function getUserFiles() {
      try {
        const userFiles = await fileService.getFiles();
        // console.log("Files get successful:", userFiles);

        dispatch(setFiles(userFiles));
      } catch (error) {
        console.error("Error creating user:", error);
      }
    }

    getUserFiles();

    dispatch(changeCategory({ status: Status.ACTIVE, converted: true }));
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/logout" element={<LogoutPage />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/upload" element={<UploadFilePage />} />
        <Route path="/files" element={<FilesPage />} />
        <Route path="/folder" element={<FolderPage />} />
      </Routes>
    </>
  );
}

export default App;
