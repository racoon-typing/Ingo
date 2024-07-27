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
import { userSaveFiles } from "../consts/const";
import { Status } from "../types/types";
import UploadFilePage from "../pages/upload-file-page1/UploadFilePage";
import FilesPage from "../pages/files-page/FilesPage";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setFiles(userSaveFiles));
    dispatch(changeCategory({ activeCategory: Status.PROCESSED }));
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
      </Routes>
    </>
  );
}

export default App;
