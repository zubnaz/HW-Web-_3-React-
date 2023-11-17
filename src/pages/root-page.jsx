import Layout from "./layout";
import { Biographia } from "./root-page-components/bio";
import { Paintings } from "./root-page-components/paintings";

function RootPage() {
    return (
        <div>
            <Layout />
            <Biographia />
            <Paintings />

        </div>
    );
}
export default RootPage;