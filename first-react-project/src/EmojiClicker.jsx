import { useState } from "react"

export default function EmojiClicker() {
    const [emojis, setEmoji] = useState(["😂"])


    const addEmoji = () => {
        // setEmoji([...emojis, "😂"])
        setEmoji(old => { return [...old, "😂"] })
    }



    return (

        <div>
            {emojis.map(e => <span style={{ fontSize: "4rem" }}>{e}</span>)}
            <br /> <button onClick={addEmoji}>Add Emoji </button>
        </div>
    )

}