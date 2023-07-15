import { useState } from "react"
import ShoppingListForm from "./ShoppingListForm";


export default function ShoppingListExercise() {

    const [items, setItems] = useState([
        { id: 1, name: "Bananas", quantity: 8 },
        { id: 2, name: "Milk", quantity: 3 }
    ])

    const addItem = (item) => {

        setItems(currData => {
            return [...currData, { ...item, id: 9 }]

        })
    }


    return (

        <div>
            <h1>Shopping List</h1>
            <ul>
                {items.map((item) => {
                    return <li key={item.id}>{item.name} - {item.quantity}</li>
                })}

            </ul>
            <ShoppingListForm add_func={addItem} />
        </div>

    )

}