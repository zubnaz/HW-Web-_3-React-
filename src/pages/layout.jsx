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

        <div className="routes">
            <Routes>
                <Route exact path="/" element={<RootPage />}></Route>
                <Route path="more-pictures" element={<MorePictures />}></Route>
                <Route path="add-picture" element={<AddPictures />}></Route>
                <Route path="register-account" element={<Register />}></Route>
                <Route path="login-account" element={<Login />}></Route>

                <Route path={`more-pictures/picture/:id`} element={<Comments painting={":id"} />}></Route>
            </Routes>

        </div>
    );
}
export default Layout;
//<Route path="logout" element={<Logout />}></Route>