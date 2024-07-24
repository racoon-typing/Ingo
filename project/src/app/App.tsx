// import Files from "../components/files/Files";
import { Link, Route, Routes } from "react-router-dom";
import ConverterPage from "../pages/converter-page/ConverterPage";
import UploadFilesPage from "../pages/upload-files-page/UploadFilesPage";
import "./App.css";
import MainPage from "../pages/main-page/MainPage";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <MainPage />
            // <div>
            //   <h1>Главная</h1>

            //   <Link to={'/convert'}>convert</Link>
            //   <br />
            //   <Link to={'/files'}>files</Link>
            // </div>
          }
        />
        <Route path="/convert" element={<ConverterPage />} />
        <Route path="/files" element={<UploadFilesPage />} />
      </Routes>
    </>
  );
}

export default App;
