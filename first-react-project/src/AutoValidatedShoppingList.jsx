import { useState } from "react"
import { useForm } from "react-hook-form"


export default function ShoppingListForm({ add_func }) {

    const [shoppingForm, setShoppingForm] = useState({ name: "", quantity: 0 })


    const { register, handleSubmit, formState: { errors } } = useForm({ mode: "onChange" })

    const handleChange = (evt) => {
        setShoppingForm(currData => {
            return { ...currData, [evt.target.name]: evt.target.value }
        })
    }

    const registerOptions = {
        name: { required: "Name cannot be blank" },
        quantity: {
            required: "Quantity cannot be blank.",
            min: { value: 0, message: "Quanitity cannot be less than 0." },
            max: { value: 100, message: "Quanitity cannot be greater than 100." }
        },
        password: {
            required: "Password cannot be blank",
            minLength: { value: 6, message: "Password must be more than 6 character long." }
        }
    }

    const check = (data) => {
        console.log(data)
    }

    return (

        <form onSubmit={handleSubmit(check)}>

            <label htmlFor="name">Product Name: </label>
            {/* <input onChange={handleChange} type="text" id='name' name="name" placeholder="name" value={shoppingForm.name} /> */}
            <input {...register("name", registerOptions.name)} />
            <p>{errors.name && errors.name.message}</p>

            <label htmlFor="quantity">Quantity: </label>
            {/* <input onChange={handleChange} type="number" id='quantity' name="quantity" placeholder="quantity" value={shoppingForm.quantity} /> */}
            <input {...register("quantity", registerOptions.quantity)} />
            <p>{errors.quantity && errors.quantity.message}</p>


            <label htmlFor="password">Password</label>
            <input type='password' {...register("password", registerOptions.password)} />
            <p>{errors.password && errors.password.message}</p>

            <input type="submit" />
            {/* <button >Submit</button> */}

        </form>

    )

}