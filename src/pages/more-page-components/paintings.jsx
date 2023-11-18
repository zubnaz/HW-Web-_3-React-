import { paintings_data } from "./paintingsData";
import './paintings-more.css';
export default function MorePaintings() {
    const a = paintings_data;
    return (
        <div className="paintings-more">
            <h2>Інші відомі українські картини</h2>
            <div>
                {a.map((picture) =>
                    <div>
                        <img src={picture.image}></img>
                        <div>{picture.name}</div>
                        <div>{picture.author}</div>
                    </div>
                )}
            </div>
        </div>
    );
}