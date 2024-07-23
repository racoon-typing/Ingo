// import './UploadFilesRow.scss';

import { IUploadFiles } from "../../types/types";

interface IUploadFilesRowProp {
  file: IUploadFiles;
}

function UploadFilesRow({ file }: IUploadFilesRowProp): JSX.Element {
  return (
    <tr className="border-b-2 border-b-zinc-200">
      <td className="px-3 py-2 pr-4">{file.path}</td>
      <td className="px-3 py-2 pr-4">{file.name}</td>
      <td className="px-3 py-2">{file.description}</td>
      <td className="px-3 py-2">{file.size}</td>
      <td className="px-3 py-2">{file.type}</td>
      <td className="px-3 py-2">{file.uploadTime}</td>
    </tr>
  );
}

export default UploadFilesRow;
