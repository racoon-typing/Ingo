// import "./Header.scss";

function Header(): JSX.Element {
  return (
    <div
      className="header p-5 rounded-md mb-6"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
    >
      <input type="text" className="header__input" />
    </div>
  );
}

export default Header;
