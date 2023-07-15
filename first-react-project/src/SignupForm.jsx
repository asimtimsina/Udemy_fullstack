import { useState } from "react"

export default function SignupForm() {


    const [firstName, setFirstname] = useState("")
    const [lastName, setLastname] = useState("")

    const updateFirstname = (evt) => {
        setFirstname(evt.target.value);
    }

    const updateLastname = (evt) => {
        setLastname(evt.target.value);
    }

    const handleSubmit = () => {
        //do something
    }


    return (
        <div>

            <label htmlFor="firstName">FirstName: </label>
            <input type="text" onChange={updateFirstname} value={firstName} id="firstName" />
            <br />
            <label htmlFor="firstName">LastName: </label>
            <input type="text" onChange={updateLastname} value={lastName} id="lastName" />


            <button onClick={handleSubmit}>Submit</button>
        </div>

    )


}

