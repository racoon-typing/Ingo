// import './FileItem.scss';

import { ChevronRight } from "lucide-react";
import { ISaveFile } from "../../types/types";

interface IFileItem {
  file: ISaveFile;
}

function FileItem({ file }: IFileItem): JSX.Element {
  console.log(file);

  const { name, description, size, type, uploadTime, converted, status } = file;

  return (
    <li className="flex flex-col border border-zinc-50 shadow rounded-md p-3">
      <h3 className="text-xl font-medium mb-2">{name}</h3>

      <p className="mb-2 grow">{description}</p>

      <ul className="grid grid-cols-4 gap-2 mb-5">
        <li className="border-r-2 border-zinc-100 px-1">{size}</li>
        <li className="border-r-2 border-zinc-100 px-1">{type}</li>
        <li className="col-start-3 col-end-5 px-1">{uploadTime}</li>
      </ul>
     
      <button className="flex items-center mt-auto bg-sky-900 text-white p-2 max-w-min rounded">
        {converted ? 'Просмотр' : 'Конвертировать'}

        <ChevronRight className="ml-2" size={16} />
      </button>
    </li>
  );
}

export default FileItem;
