// import './UploadFilesTable.scss';

import { userUploadFiles } from "../../consts/const";
import UploadFilesRow from "../upload-files-row/UploadFilesRow";

function UploadFilesTable(): JSX.Element {
  return (
    <table className="table-auto w-full min-w-full px-3 snap-y">
      <thead>
        <tr className="border-b-2 border-b-zinc-200 bg-zinc-200">
          <th className="min-w-max px-3 py-2 pr-4 text-left">Название</th>
          <th className="min-w-max px-3 py-2 pr-4 text-left">Описание</th>
          <th className="min-w-min px-3 py-2 text-left">Размер файла</th>
          <th className="min-w-min px-3 py-2 text-left">Тип файла</th>
          <th className="min-w-min px-3 py-2 text-left">Время загрузки</th>
        </tr>
      </thead>
      <tbody>
        {userUploadFiles
          ? userUploadFiles.map((file) => <UploadFilesRow key={file.name} file={file} />)
          : ""}
      </tbody>
    </table>
  );
}

export default UploadFilesTable;
