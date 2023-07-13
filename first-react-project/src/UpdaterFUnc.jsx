import { useState } from "react";

export default function Counter() {
    const [num, setNum] = useState(0);
    const handleClickOne = () => {
        setNum(c => c + 1)
    }

    const handleClickThree = () => {
        setNum(c => c + 1)
        setNum(c => c + 1)
        setNum(c => c + 1)
    }

    return (

        <>
            <p>The count is: {num} </p>
            <button onClick={handleClickOne}>+1 </button>
            <button onClick={handleClickThree}>+3 </button>
        </>

    )

}