import { Route, Routes } from "react-router-dom";
import MorePaintings from "./more-page-components/paintings";
import { paintings_data } from "./more-page-components/paintingsData";
import Comments from "./more-page-components/comments";


function MorePictures() {
    return (
        <MorePaintings />
    );
}
export default MorePictures;