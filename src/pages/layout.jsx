import AddPictures from "./add-picture";
import MorePictures from "./more-pictures";
import RootPage from "./root-page";
import { Routes, Route, Outlet } from "react-router-dom";
function Layout() {
    return (
        <div>
            <Routes>
                <Route exact path="/" element={<RootPage />}></Route>
                <Route path="more-pictures" element={<MorePictures />}></Route>
                <Route path="add-picture" element={<AddPictures />}></Route>
            </Routes>

        </div>
    );
}
export default Layout;