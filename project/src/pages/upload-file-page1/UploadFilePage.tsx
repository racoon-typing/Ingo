// import CovertStatistic from "../../components/convert-statistic/CovertStatistic";
import Converter from "../../components/converter/Converter";
import UploadFilesTable from "../../components/upload-files-table/UploadFilesTable";
import Layout from "../../layout/Layout";
// import "./Main.scss";

function UploadFilePage(): JSX.Element {
  return (
    <Layout>
      <h2 className="text-2xl mb-6 font-medium">Загрузите ваши файлы</h2>

      <div className="grid grid-cols-[50%_1fr] gap-y-10 gap-x-6">
        <Converter />

        <div></div>
        {/* <CovertStatistic /> */}

        <div className="col-span-full">
          <h3 className="text-2xl font-medium mb-3">Загруженные файлы</h3>

          <div className="overflow-auto shadow h-96 w-full">
            <UploadFilesTable />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default UploadFilePage;
