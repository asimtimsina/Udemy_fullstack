import { useState } from 'react'
import Box from './Box'
import './BoxGrid.css'

export default function BoxGrid() {

    const [boxes, setBoxes] = useState(new Array(9).fill(false))

    const reset = () => {
        setBoxes(new Array(9).fill(false))
    }

    const toggleBox = (index) => {
        setBoxes(oldBoxes => {
            return oldBoxes.map((value, i) => {
                if (i === index) return !value;
                return value;
            })

        })
    }

    return (

        <>
            {boxes.map((b, i) => <Box key={i} toggle={() => toggleBox(i)} isActive={b} />)}
            <button onClick={reset}> Reset </button>
        </>

    )

}