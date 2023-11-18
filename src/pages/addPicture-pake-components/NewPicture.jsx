import { useForm } from "react-hook-form";
import { paintings_data } from "../more-page-components/paintingsData";
import "./new-picture.css";

export default function NewPicture() {
    const { register, handleSubmit } = useForm();

    const add = (picture) => {
        if (picture.name == "" || picture.author == "" || picture.image == "") {
            alert("Не всі поля заповнені!")
            return;
        }
        paintings_data.push(picture);
    };
    return (
        <div className="add-new-picture">
            <h2>Ви можете добавити ще картини до списку</h2>
            <form onSubmit={handleSubmit(add)}>

                <label htmlFor="namePicture">Картини</label>
                <input {...register("name")} className="namePicture"></input>

                <label htmlFor="authorOfPicture">Автор</label>
                <input {...register("author")} className="authorOfPicture"></input>

                <label htmlFor="imagePicture">Картинка</label>
                <input {...register("image")} className="imagePicture"></input>

                <button type="submit">Add</button>
            </form>
        </div>
    );
}