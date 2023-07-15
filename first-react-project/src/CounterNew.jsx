import { useState, useEffect } from "react";


export default function CounterNew() {


    const [count, setCount] = useState(0);
    useEffect(function myEffect() {
        console.log("My Effect was called")
    })

    const increment = () => {

        setCount(c => c + 1);


    }


    return (

        <div>

            <h1>{count}</h1>
            <button onClick={increment}>+1</button>
        </div>


    )

}