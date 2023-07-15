import { useState } from "react"


export default function ValidatedShoppingListForm({ add_func }) {

    const [shoppingForm, setShoppingForm] = useState({ name: "", quantity: 0 })
    const [ProductisValid, setProductIsValid] = useState(false);

    const validate = (name) => {
        if (name.length === 0) { setProductIsValid(false); }
        else { setProductIsValid(true); }
    }


    const handleChange = (evt) => {

        if (evt.target.name === 'name') validate(evt.target.value);
        setShoppingForm(currData => {
            return { ...currData, [evt.target.name]: evt.target.value }
        })

    }

    const handleSubmit = (evt) => {
        evt.preventDefault(); // prevent page to reload after form submission

        if (ProductisValid) {
            add_func(shoppingForm);
            setShoppingForm({ name: "", quantity: 0 });
        }
    }


    return (

        <form onSubmit={handleSubmit}>

            <label htmlFor="name">Product Name: </label>
            <input onChange={handleChange} type="text" id='name' name="name" placeholder="name" value={shoppingForm.name} />

            {!ProductisValid && <p style={{ color: 'red' }}>Product name cannot be empty.!!</p>
            }
            <label htmlFor="quantity">Quantity: </label>
            <input onChange={handleChange} type="number" id='quantity' name="quantity" placeholder="quantity" value={shoppingForm.quantity} />

            <button >Submit</button>

        </form>

    )

}