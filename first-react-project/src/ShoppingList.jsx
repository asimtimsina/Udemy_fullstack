export default function ShoppingList({ lists }) {

    return (
        <>
            <ul>
                {lists.map((item) => (<li key={item.id}
                    style={{
                        color: item.picked ? 'grey' : 'red',
                        textDecoration: item.picked ? "line-through" : 'none'
                    }}>{item.name} - {item.quantity}</li>))}
            </ul>
        </>
    )

}