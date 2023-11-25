import { useForm } from "react-hook-form";
import { activeUser } from "../active-user";
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { paintings_data } from "./paintingsData";

export default function Comments() {
    const navigate = useNavigate();
    const { id } = useParams();
    const { register, handleSubmit } = useForm();
    const [p, newComment] = useState(paintings_data[id].comments);
    const doComment = (data) => {
        const nc = {
            name: activeUser.name,
            tag: activeUser.tag,
            image: activeUser.photoUrl,
            text: data.text
        }
        paintings_data[id].comments.push(nc);
        newComment([...p, nc]);

    }

    return (
        <div className="com">
            <textarea {...register("text")} placeholder="Do comment"></textarea>
            <button onClick={handleSubmit(doComment)}>Comment</button>
            <button onClick={() => navigate(-1)}>Comeback</button>
            <div className="comments">
                {paintings_data[id].comments.map((element) =>

                    <div className={element.tag == activeUser.tag ? "you" : "notyou"}>

                        <div className="user">
                            <div className="image"><img src={element.image} /></div>
                            <div className="name">{element.name}</div>
                        </div>
                        <div className="text">{element.text}</div>
                    </div>
                )}
            </div>
        </div>
    );
}