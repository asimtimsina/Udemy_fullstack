import { useState } from "react"

export default function Toggler() {
    const [isHappy, setIsHappy] = useState(true);
    const Toggle = () => setIsHappy(!isHappy)

    const [count, setCount] = useState(0);
    const increment = () => setCount(count + 1)
    return (
        <>
            <h1 onClick={Toggle}>{isHappy ? '😊' : "😭"}</h1>
            <p>{count}</p>
            <button onClick={increment}>+</button>
        </>
    )
}