// import './LogoutPage.scss';

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function LogoutPage(): JSX.Element {
    const navigate = useNavigate();

    useEffect(() => {
        navigate('/');
    }, [navigate])

return (
       <div>Выход</div>
    );
}

export default LogoutPage;