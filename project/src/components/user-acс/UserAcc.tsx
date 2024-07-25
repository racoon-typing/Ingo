// import "./UserAcc.scss";
import { UserRound } from "lucide-react";
// import { Link } from "react-router-dom";
import { CURRENT_USER_ID } from "../../consts/const";
import { userService } from "../../service/userService";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { LoginFormData } from "../../types/types";

function UserAcc(): JSX.Element {
  const [userInfo, setUserInfo] = useState<LoginFormData | null>(null);
  const userId = localStorage.getItem(CURRENT_USER_ID);
  console.log(userId);

  useEffect(() => {
    async function getUserInfo(userId: string) {
      try {
        // const userInfo = await userService.getUser(userId);
        console.log("User info:", userInfo);


        setUserInfo(userInfo)
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    }

    if (userId !== null) {
      getUserInfo(userId);
    }
  }, [userId, userInfo]);

  return (
    <Link to={"/account"}>
      <div className="user p-6 pr-0 bg-white text-black rounded-md cursor-pointer">
        <UserRound className=" mb-3" size={40} />

        <h3 className="user__name text-3xl mb-2">{`${userInfo?.firstName} ${userInfo?.lastName}`}</h3>

        <small className="mb-2">
          <b>Почта:</b>&nbsp; {userInfo?.tel}
        </small>
        <br />
        <small><b>Статус:</b>&nbsp; {userInfo?.userKey}</small>
        <br />
        <small>
          <b>Подразделение:</b>&nbsp; {userInfo?.department}
        </small>
      </div>
    </Link>
  );
}

export default UserAcc;
