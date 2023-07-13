import { useState } from "react";

export default function Counter() {

    const [num, setNum] = useState(5);

    const handleClick = () => {
        setNum(num + 1)
        console.log(num)
    }


    return (

        <>
            <p>The count is: {num} </p>
            <button onClick={handleClick}>Increment </button>
        </>

    )

}