// import Files from "../components/files/Files";
import { Route, Routes } from "react-router-dom";
import ConverterPage from "../pages/converter-page/ConverterPage";
import UploadFilesPage from "../pages/upload-files-page/UploadFilesPage";
import "./App.css";
import MainPage from "../pages/main-page/MainPage";
import LoginPage from "../pages/login-page/LoginPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/account" element={<ConverterPage />} />
        <Route path="/convert" element={<ConverterPage />} />
        <Route path="/files" element={<UploadFilesPage />} />
      </Routes>
    </>
  );
}

export default App;
