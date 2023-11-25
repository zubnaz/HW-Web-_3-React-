import { paintings_data } from "./paintingsData";
import './paintings-more.css';
import { activeUser } from "../active-user";
import { useState } from "react";
import Comments from "./comments";
import RootPage from "../root-page";
import { Link, Outlet } from "react-router-dom";
export default function MorePaintings() {

    const a = paintings_data;



    return (
        <div className="paintings-more">
            <h2>Інші відомі українські картини</h2>
            <div>
                {a.map((picture, index) =>
                    <div>
                        <img src={picture.image}></img>
                        <div>{picture.name}</div>
                        <div>{picture.author}</div>
                        {activeUser.userIsLogin ? <Link to={`picture/${index}`}>Comments</Link> : ""}
                    </div>
                )}
            </div>

        </div>
    );
}
