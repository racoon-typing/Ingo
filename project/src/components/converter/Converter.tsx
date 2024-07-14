// import "./Converter.scss";

function Converter(): JSX.Element {
  return (
    <div>
      <h2 className="text-2xl mb-6">Конвертируйте ваши файлы</h2>

      <div className="grid grid-cols-[50%_1fr] gap-14">
        <div className="relative w-full h-80 bo rounded-xl border-2 border-black">
            <div className="px-20 h-full flex flex-col justify-center">
                <p className="text-center text-xl">
                    Загрузите ваши файлы
                </p>
            </div>
          <input className="absolute opacity-0 input z-10 top-0 left-0 w-full h-full" type="file" name="" id="" />
        </div>
        Конвертер
      </div>
    </div>
  );
}

export default Converter;
