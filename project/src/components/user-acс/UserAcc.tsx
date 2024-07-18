// import "./UserAcc.scss";
import { UserRound } from "lucide-react";
// import { Link } from "react-router-dom";
import { userData } from "../../consts/const";

function UserAcc(): JSX.Element {
  return (
    <div className="user p-6 pr-0 bg-white text-black rounded-md cursor-pointer">
      <UserRound className=" mb-3" size={40} />

      <h3 className="user__name text-3xl mb-2">{userData.name}</h3>

      <small className="mb-2">
        <b>Почта:</b>&nbsp; {userData.email}
      </small>
      <br />
      <small>
        <b>Статус:</b>&nbsp; {userData.status}
      </small>
      <br />
      <small>
        <b>Подразделение:</b>&nbsp; {userData.unit}
      </small>
    </div>
  );
}

export default UserAcc;
