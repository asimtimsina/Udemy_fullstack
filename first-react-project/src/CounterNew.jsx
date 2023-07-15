import { useState, useEffect } from "react";


export default function CounterNew() {

    const [name, setName] = useState("");
    const [count, setCount] = useState(0);
    useEffect(function myEffect() {
        console.log("My Effect was called")
    }, [count])

    const increment = () => {
        setCount(c => c + 1);
    }

    const handleChange = (evt) => {
        setName(evt.target.value)
    }


    return (

        <div>

            <h1>{count}</h1>
            <button onClick={increment}>+1</button>
            <br />
            <label htmlFor="name">Name: {name}</label>
            <input type="text" onChange={handleChange} name="name" id="name" value={name} />

        </div>



    )

}