import './SingleBox.css'

import { useState } from "react"

export default function SingleBox({ colors }) {

    const [colorNum, setColorNum] = useState(Math.floor(Math.random() * colors.length));

    const toggleColor = () => {
        setColorNum(Math.floor(Math.random() * colors.length))
    }

    return (

        <p style={{ backgroundColor: colors[colorNum] }} onClick={toggleColor} className="SingleBox"></p>

    )

}