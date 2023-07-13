import { useState } from "react"

export default function Toggler() {
    const [isHappy, setIsHappy] = useState(true);
    const Toggle = () => setIsHappy(!isHappy)
    return (
        <h1 onClick={Toggle}>{isHappy ? '😊' : "😭"}</h1>
    )
}