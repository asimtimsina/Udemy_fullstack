import { useState } from "react"
import { useForm } from "react-hook-form"


export default function ShoppingListForm({ add_func }) {

    const [shoppingForm, setShoppingForm] = useState({ name: "", quantity: 0 })


    const { register, handleSubmit } = useForm()

    const handleChange = (evt) => {
        setShoppingForm(currData => {
            return { ...currData, [evt.target.name]: evt.target.value }
        })
    }

    const check = (data) => {
        console.log(data)
    }

    return (

        <form onSubmit={handleSubmit(check)}>

            <label htmlFor="name">Product Name: </label>
            {/* <input onChange={handleChange} type="text" id='name' name="name" placeholder="name" value={shoppingForm.name} /> */}
            <input {...register("name", { required: "Product name is required" })} />
            <p>{errors.firstName?.message}</p>

            <label htmlFor="quantity">Quantity: </label>
            {/* <input onChange={handleChange} type="number" id='quantity' name="quantity" placeholder="quantity" value={shoppingForm.quantity} /> */}
            <input {...register("quantity")} />

            <input type="submit" />
            {/* <button >Submit</button> */}

        </form>

    )

}