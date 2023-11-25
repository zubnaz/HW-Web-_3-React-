import Photo from "./photo";
import { useForm } from "react-hook-form";
import "./register-style.css";
import { useState } from "react";
import { USERS } from "../users";
export default function Register() {
    const [imgUrl, change] = useState("");
    const showAvatar = (e) => {
        change(e.target.value);
    };
    const { register, handleSubmit } = useForm();
    const registerAccount = (data) => {
        //e.preventDefault();
        if (data.name == "" || data.email == "" || data.password == "" || data.tag == "" || data.man_or_girl == "" || data.day == "" || data.month == "" || data.year == "" || data.description == "") {
            alert("You have not entered all fields!");
            return;
        }
        if (data.photoUrl == "") data.photoUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-WUaCfpHR9gzvSAHiRc_9b1mWdmbH_MPXUA&usqp=CAU";
        USERS.push(data);
    };
    return (
        <div className="register">

            <form onSubmit={handleSubmit(registerAccount)}>
                <div><label htmlFor="nameInput">Name : </label><input {...register("name")} id="nameInput" type="text" placeholder="Enter name"></input></div>
                <div><label htmlFor="emailInput">Email : </label><input {...register("email")} id="emailInput" type="email" placeholder="Enter email"></input></div>
                <div><label htmlFor="passwordInput">Password : </label><input {...register("password")} id="passwordInput" type="password" placeholder="Enter password"></input></div>
                <div><label htmlFor="tagInput">Tag</label><input {...register("tag")} id="tagInput" type="text" placeholder="Enter tag"></input></div>
                <div><label htmlFor="ManGirlInput">Man or Male : </label><select {...register("man_or_girl")} id="ManGirlInput"><option>Woman</option><option>Man</option></select></div>
                <div className="date"><label>Day / Month / Year : </label><input {...register("day")} type="number" placeholder="Enter day"></input><input {...register("month")} type="number" placeholder="Enter month"></input><input {...register("year")} type="number" placeholder="Enter year"></input></div>
                <div className="profilePhoto"><Photo urlImg={imgUrl == "" ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-WUaCfpHR9gzvSAHiRc_9b1mWdmbH_MPXUA&usqp=CAU" : imgUrl} /><input {...register("photoUrl")} type="text" onChange={showAvatar} id="photoInput" placeholder="Enter URL of photo"></input></div>
                <div className="description"><label htmlFor="descriptionInput">About you</label><textarea {...register("description")} id="descriptionInput" type="text" placeholder="Enter description"></textarea></div>
                <button type="submit">Create account</button>
            </form>
        </div>
    );
}