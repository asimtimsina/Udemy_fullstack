


function ShoppingListItem({ name, quantity, picked }) {
    const styles = {
        color: picked ? 'grey' : 'red',
        textDecoration: picked ? "line-through" : 'none'
    }
    return (
        <li style={styles}> {name} - {quantity}</li>

    )
}


export default ShoppingListItem;

