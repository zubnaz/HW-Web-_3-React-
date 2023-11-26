import AddPictures from "./add-picture";
import MorePictures from "./more-pictures";
import Register from "./register-page-elements/register-page";
import RootPage from "./root-page";
import { Routes, Route } from "react-router-dom";
import "./layout-style.css";
import Login, { Logout } from "./login-page-elements/login-page";
import { paintings_data } from "./more-page-components/paintingsData";
import Comments from "./more-page-components/comments";
function Layout() {
    return (

        <RootPage />
    );
}
export default Layout;
//<Route path="logout" element={<Logout />}></Route>