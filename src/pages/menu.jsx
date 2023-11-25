import { Link, useLocation, useNavigate } from "react-router-dom";
import "./menu.css";
import { activeUser } from "./active-user";
import { useState } from "react";
import { Logout } from "./login-page-elements/login-page";

function Menu() {
    const [au, userLogin] = useState(activeUser.name);
    userLoginShow = (name) => { userLogin(name) };
    const location = useLocation();
    const navigate = useNavigate();
    const logout = () => { Logout(location.pathname, navigate) };
    return (
        <div className="menu">
            <nav>
                <Link to="/">Home</Link>
                <Link to="more-pictures">More Pictures</Link>
                <Link to="add-picture">Add New Picture</Link>
                <Link to="login-account">Login Account</Link>
                <Link to="register-account">Register New Account</Link>
                {activeUser.userIsLogin != false ? <Link onClick={logout}>Logout</Link> : ""}
            </nav>
            <div className="user">
                {au != null ? au : ""}
            </div>

        </div>

    );
}
export var userLoginShow;
export default Menu;
