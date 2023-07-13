import ShoppingListItem from "./ShoppingListItem"



export default function ShoppingList({ lists }) {

    return (
        <>
            <ul>
                {lists.map((item) => (
                    // <ShoppingListItem key={item.id} name={item.name} quantity={item.quantity} picked={item.picked} />
                    <ShoppingListItem key={item.id} {...item} />
                ))}
            </ul>
        </>
    )

}