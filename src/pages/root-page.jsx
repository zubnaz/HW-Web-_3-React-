import { Outlet } from "react-router-dom";
import Layout from "./layout";
import { Biographia } from "./root-page-components/bio";
import { Paintings } from "./root-page-components/paintings";

function RootPage() {
    return (
        <div>

            <Biographia />
            <Paintings />

        </div>
    );
}
//<Layout />
export default RootPage;