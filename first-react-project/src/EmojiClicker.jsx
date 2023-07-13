import { useState } from "react"
import { v4 as uuid } from 'uuid';

export default function EmojiClicker() {
    const [emojis, setEmoji] = useState([{ id: uuid(), emoji: "😂" }])


    const addEmoji = () => {
        // setEmoji([...emojis, "😂"])
        setEmoji(old => { return [...old, { id: uuid(), emoji: "😂" }] })
    }



    return (

        <div>
            {emojis.map(e => <span key={e.id} style={{ fontSize: "4rem" }}>{e.emoji}</span>)}
            <br /> <button onClick={addEmoji}>Add Emoji </button>
        </div>
    )

}