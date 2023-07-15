import { useState } from "react"
// import ShoppingListForm from "./ShoppingListForm";

import { v4 as uuid } from "uuid";
import ValidatedShoppingListForm from "./ValidatedShoppingListForm";


export default function ShoppingListExercise() {

    const [items, setItems] = useState([
        { id: 1, name: "Bananas", quantity: 8 },
        { id: 2, name: "Milk", quantity: 3 }
    ])

    const addItem = (item) => {
        if (!item.name) { return }
        setItems(currData => {
            return [...currData, { ...item, id: uuid() }]

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
            <ValidatedShoppingListForm add_func={addItem} />
        </div>

    )

}