import { useState } from "react"

export default function SignupForm() {


    const [formData, setFormData] = useState({ firstName: "", lastName: "", Password: "" });


    const handleChange = (evt) => {
        const changedField = evt.target.name;
        const newValue = evt.target.value;
        // console.log(changedField, newValue);

        setFormData(currData => {
            currData[changedField] = newValue;
            return { ...currData }
        })

    }


    const handleSubmit = () => {
        //do something
        console.log(formData)
    }


    return (
        <div>

            <label htmlFor="firstName">FirstName: </label>
            <input type="text" onChange={handleChange} name="firstName" value={formData.firstName} id="firstName" />
            <br />
            <label htmlFor="firstName">LastName: </label>
            <input type="text" onChange={handleChange} name="lastName" value={formData.lastName} id="lastName" />
            <br />
            <label htmlFor="Password">Password: </label>
            <input type="password" onChange={handleChange} name="Password" value={formData.Password} id="Password" />

            <button onClick={handleSubmit}>Submit</button>
        </div>

    )


}

