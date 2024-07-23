// import "./Converter.scss";

// import { userSaveFiles } from "../../consts/const";
import { useSelector } from "react-redux";
import FileItem from "../file-item/FileItem";
import { RootState } from "../../store/store";


function FileList(): JSX.Element {
  const files = useSelector((state: RootState) => state.data.files);
  console.log(files);
  

  return (
    <ul className="grid grid-cols-2 gap-5">
      {files
        ? files.map((file) => (
            <FileItem key={file.id + file.name} file={file} />
          ))
        : ""}
    </ul>
  );
}

export default FileList;
