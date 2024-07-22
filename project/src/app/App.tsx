// import Files from "../components/files/Files";
import { Route, Routes } from "react-router-dom";
import ConverterPage from "../pages/converter-page/ConverterPage";
import UploadFilesPage from "../pages/upload-files-page/UploadFilesPage";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<p>Главная</p>} />
        <Route path="/convert" element={<ConverterPage />} />
        <Route path="/files" element={<UploadFilesPage />} />
        {/* <Route path="/files" element={<Files />} /> */}
        {/* <ConverterPage /> */}
        {/* <UploadFilesPage /> */}
        {/* <Files /> */}
      </Routes>
    </>
  );
}

export default App;
