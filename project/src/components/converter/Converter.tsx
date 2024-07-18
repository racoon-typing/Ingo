// import "./Converter.scss";

import { Upload } from "lucide-react";

function Converter(): JSX.Element {
  return (
    <div className="relative w-full h-80 rounded-xl border border-zinc-200 shadow">
      <div className="px-20 h-full flex flex-col justify-center items-center">
        <Upload className="mb-3" size={36} />

        <p className="text-center text-xl">Загрузите ваши файлы</p>
      </div>

      <input
        className="absolute opacity-0 input z-10 top-0 left-0 w-full h-full"
        type="file"
        name=""
        id=""
      />
    </div>
  );
}

export default Converter;
