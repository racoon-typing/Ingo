// import "./CovertStatistic.scss";

function CovertStatistic(): JSX.Element {
  return (
    <div className="p-3 px-5 overflow-hidden rounded-xl border border-zinc-200 shadow">
      <table className="table-auto h-full w-full min-w-full px-3">
        <thead>
          <tr className="border-b-2">
            <th className="text-left px-3 pr-4">Показатель</th>
            <th className="w-1/4 px-2 text-left">Значение</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b-2 border-b-zinc-200">
            <td className="px-3 pr-4">Общее кол-во файлов:</td>
            <td className="px-3">{"5"}</td>
          </tr>
          <tr className="border-b-2 border-b-zinc-200">
            <td className="px-3 pr-4">Свободное место на диске:</td>
            <td className="px-3">{"500 мб"}</td>
          </tr>
          <tr className="border-b-2 border-b-zinc-200">
            <td className="px-3 pr-4">Конвертированных файлов, %:</td>
            <td className="px-3">{"90 %"}</td>
          </tr>
          <tr className="border-b-2 border-b-zinc-200">
            <td className="px-3 pr-4">
              Общая длительность конвертируемых файлов:
            </td>
            <td className="px-3">{"500 мин"}</td>
          </tr>
          <tr className="border-b-2 border-b-zinc-200">
            <td className="px-3 pr-4">Среднее время конвертации:</td>
            <td className="px-3">{"12 c"}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CovertStatistic;
