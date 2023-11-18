import { Link, Outlet } from "react-router-dom";
import "./menu.css";

function Menu() {
    return (
        <div className="menu">
            <nav>
                <Link to="/">Home</Link>
                <Link to="more-pictures">More Pictures</Link>
                <Link to="add-picture">Add New Picture</Link>
            </nav>
        </div>

    );
}
export default Menu;