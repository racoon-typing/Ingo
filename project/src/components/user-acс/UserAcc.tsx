// import "./UserAcc.scss";
import { UserRound } from "lucide-react";
// import { Link } from "react-router-dom";
import { CURRENT_USER } from "../../consts/const";
import { userService } from "../../service/userService";
import { Link } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { LoginFormData } from "../../types/types";

function UserAcc(): JSX.Element {
  const [userInfo, setUserInfo] = useState<LoginFormData | null>(null);
  const [loading, setLoading] = useState<boolean>(true); // Добавлено для управления состоянием загрузки

  useEffect(() => {
    async function getUserInfo(userId: string) {
      try {
        const userInfo = await userService.getUser(userId);
        setUserInfo(userInfo);
      } catch (error) {
        console.error("Error fetching user:", error);
      } finally {
        setLoading(false); // Установка состояния загрузки после завершения запроса
      }
    }

    const storedUser = localStorage.getItem(CURRENT_USER);
    const user = storedUser ? JSON.parse(storedUser) : null; // Парсим JSON-строку

    if (user && user.id) {
      getUserInfo(user.id);
    } else {
      setLoading(false); // Установка состояния загрузки, если user отсутствует
    }
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Отображение сообщения о загрузке
  }

  return (
    <Link to={"/account"}>
      <div className="user p-6 pr-0 bg-white text-black rounded-md cursor-pointer">
        {!userInfo ? (
          <div className="flex items-center">
            <UserRound className="mr-3" size={40} />
            <h3 className="text-lg">Ошибка загрузки</h3>
          </div>
        ) : (
          <>
            <UserRound className=" mb-3" size={40} />

            <h3 className="user__name text-3xl mb-2">{`${userInfo?.firstName} ${userInfo?.lastName}`}</h3>

            <small className="mb-2">
              <b>Почта:</b>&nbsp; {userInfo?.tel}
            </small>
            <br />
            <small>
              <b>Статус:</b>&nbsp; {userInfo?.userKey}
            </small>
            <br />
            <small>
              <b>Подразделение:</b>&nbsp; {userInfo?.department}
            </small>
          </>
        )}
      </div>
    </Link>
  );
}
useMemo

export default UserAcc;
