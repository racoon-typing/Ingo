// import './FileItem.scss';

import { Archive, ChevronRight, SquarePlus } from "lucide-react";
import { FileDanger, ISaveFile } from "../../types/types";

interface IFileItem {
  file: ISaveFile;
}

function FileItem({ file }: IFileItem): JSX.Element {
  const {
    name,
    description,
    size,
    type,
    path,
    uploadTime,
    converted,
    status,
    danger,
  } = file;

  return (
    <li className="flex flex-col border border-zinc-50 shadow rounded-md p-3">
      <button
        onClick={() => console.log("Клик")}
        className="flex justify-between mb-2"
      >
        {danger === FileDanger.DANGER ? (
          <p className="text-red-500">Опасный</p>
        ) : danger === FileDanger.ANALIS ? (
          <p className="text-yellow-600">Анализ</p>
        ) : (
          <p className="text-green-500">Проверен</p>
        )}

        {status === "archive" ? (
          <SquarePlus size={24} />
        ) : (
          <Archive size={24} />
        )}
      </button>

      <h3 className="text-xl font-medium mb-2">{name}</h3>

      <p className="mb-6 grow">{description}</p>

      <audio controls className="mb-4">
        <source src={path} type={type} />
        Ваш браузер не поддерживает воспроизведение аудио.
      </audio>

      <ul className="grid grid-cols-4 gap-2 mb-5">
        <li className="border-r-2 border-zinc-100 px-1">{size}</li>
        <li className="border-r-2 border-zinc-100 px-1">{type}</li>
        <li className="col-start-3 col-end-5 px-1">{uploadTime}</li>
      </ul>

      <button className="flex items-center mt-auto bg-sky-900 text-white p-2 max-w-min rounded">
        {converted ? "Просмотр" : "Конвертировать"}

        <ChevronRight className="ml-2" size={16} />
      </button>
    </li>
  );
}

export default FileItem;
