import AddPictures from "./add-picture";
import MostPictures from "./most-pictures";
import RootPage from "./root-page";
import { Routes, Route, Outlet } from "react-router-dom";
function Layout() {
    return (
        <div>
            <Routes>
                <Route exact path="/" element={<RootPage />}></Route>
                <Route path="/most-pictures" element={<MostPictures />}></Route>
                <Route path="/add-picture" element={<AddPictures />}></Route>
            </Routes>
            <Outlet />
        </div>
    );
}
export default Layout;