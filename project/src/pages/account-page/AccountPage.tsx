import Layout from "../../layout/Layout";
// import "./Main.scss";

function AccountPage(): JSX.Element {
  return (
    <Layout>
      <h2 className="text-2xl mb-6 font-medium">Ваш аккаунт</h2>

      <div className="grid grid-cols-[50%_1fr] gap-y-10 gap-x-6">Главная</div>
    </Layout>
  );
}

export default AccountPage;
