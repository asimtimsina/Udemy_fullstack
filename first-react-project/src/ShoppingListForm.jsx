import { useState } from "react"


export default function ShoppingListForm({ add_func }) {

    const [shoppingForm, setShoppingForm] = useState({ name: "", quantity: 0 })

    const handleChange = (evt) => {

        setShoppingForm(currData => {
            return { ...currData, [evt.target.name]: evt.target.value }
        })

    }

    const handleSubmit = (evt) => {
        evt.preventDefault(); // prevent page to reload after form submission
        add_func(shoppingForm);
    }


    return (

        <form onSubmit={handleSubmit}>

            <h1>Product is: {shoppingForm.name}</h1>
            <label htmlFor="name">Product Name: </label>
            <input onChange={handleChange} type="text" id='name' name="name" placeholder="name" value={shoppingForm.name} />

            <label htmlFor="quantity">Quantity: </label>
            <input onChange={handleChange} type="number" id='quantity' name="quantity" placeholder="quantity" value={shoppingForm.quantity} />

            <button >Submit</button>

        </form>

    )

}