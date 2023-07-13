import "./ColorArray.css"
import SingleBox from "./SingleBox"


export default function ColorArray({ colors }) {
    const boxes = [];

    for (let i = 0; i < 25; i++) {

        boxes.push(<SingleBox colors={colors} />);

    }
    return (

        <div className="ColorArray">

            {boxes}

        </div>

    )

}