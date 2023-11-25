import { useEffect } from "react";
import { User, activeUser } from "../active-user";
import { userLoginShow } from "../menu";
import { addButton } from "../more-page-components/paintings";
import { USERS } from "../users";
import "./login-style.css";
import { useForm } from "react-hook-form";
import RootPage from "../root-page";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { paintings_data } from "../more-page-components/paintingsData";
export default function Login() {
    const { register, handleSubmit } = useForm();
    const login = (data) => {
        if (activeUser.userIsLogin) {
            alert("Ви вже авторизовані!");
        } else {
            USERS.forEach((user) => {
                if (user.tag == data.tag && user.password == data.password) {
                    alert(`Hello dear ${user.name}!`);

                    activeUser.user = user;

                }
            })
            if (!activeUser.userIsLogin) { alert("Invalid password or tag"); return; }
            userLoginShow(activeUser.name);
        }
        //addButton(activeUser.userIsLogin);

    }
    return (<div className="login">
        <form onSubmit={handleSubmit(login)}>
            <div><label>Tag</label><input {...register("tag")} type="text"></input></div>
            <div><label>Password</label><input {...register("password")} type="password"></input></div>
            <button type="submit">Login</button>
        </form>
    </div>);
}
export function Logout(path, navigate) {


    activeUser.logout();
    userLoginShow(activeUser.name);


    for (let i = 0; i < paintings_data.length; i++) {
        if (path == `/more-pictures/picture/${i}`) { navigate(-1) }
    }

}