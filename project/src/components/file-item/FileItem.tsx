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
       <div>
        <input type="checkbox" />
       </div>

        {status === "archive" ? (
          <SquarePlus size={24} />
        ) : (
          <Archive size={24} />
        )}
      </button>

      <h3 className="text-xl font-medium mb-2">
        {name}
        {"  "}
        {danger === FileDanger.DANGER ? (
          <span className="text-red-500">Опасный</span>
        ) : danger === FileDanger.ANALIS ? (
          <span className="text-yellow-600">Анализ</span>
        ) : (
          <span className="text-green-500">Проверен</span>
        )}
      </h3>

      <p className="mb-6 grow">{description}</p>

      <audio controls className="mb-3">
        <source src={path} type={type} />
        Ваш браузер не поддерживает воспроизведение аудио.
      </audio>

      <p className="text-base font-medium mb-3">
        Показать текст {'=>'}
      </p>

      <ul className="grid grid-cols-4 gap-2">
        <li className="border-r-2 border-zinc-100 px-1">{size}</li>
        <li className="border-r-2 border-zinc-100 px-1">{type}</li>
        <li className="col-start-3 col-end-5 px-1">{uploadTime}</li>
      </ul>

      {/* <button className="flex items-center mt-auto bg-sky-900 text-white p-2 max-w-min rounded">
        {converted ? "Просмотр" : "Конвертировать"}

        <ChevronRight className="ml-2" size={16} />
      </button> */}
    </li>
  );
}

export default FileItem;
