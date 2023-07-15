import { useState } from "react"

export default function Username() {
    const [username, setUsername] = useState("")

    const updateUsername = (evt) => {
        console.log(username)
        console.log(evt.target.value)
        setUsername(evt.target.value)
    }

    return (
        <div>
            <input type="text" placeholder="username" value={username} onChange={updateUsername} />
            <button>Submit</button>
        </div>
    )

}