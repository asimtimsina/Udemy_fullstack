import { useState } from "react"
import { v4 as uuid } from 'uuid';

export default function EmojiClicker() {
    const [emojis, setEmoji] = useState([{ id: uuid(), emoji: "😂" }])
    const addEmoji = () => {
        // setEmoji([...emojis, "😂"])
        setEmoji(old => { return [...old, { id: uuid(), emoji: "😂" }] })
    }
    const deleteEmoji = (id) => {
        //delete emoji with id
        // console.log(id)
        // const newList = emojis.filter(e => e.id !== id);
        // console.log(newList);
        setEmoji(previousEmojis => {
            return previousEmojis.filter(e => e.id !== id);
        })
    }

    const makeHeart = () => {

        setEmoji(previousEmojis => {
            console.log(previousEmojis)
            return previousEmojis.map(each => {
                return { ...each, emoji: "❤️" }

            })

        })

    }

    return (
        <div>
            {emojis.map(e => <span key={e.id} onClick={() => deleteEmoji(e.id)} style={{ fontSize: "4rem" }}>{e.emoji}</span>)}
            <br /> <button onClick={addEmoji}>Add Emoji </button>
            <br /> <button onClick={makeHeart}>Make them all hearts</button>
        </div>
    )

}