import PropTypes from 'prop-types';


function ShoppingListItem({ name, quantity, picked }) {
    const styles = {
        color: picked ? 'grey' : 'red',
        textDecoration: picked ? "line-through" : 'none'
    }
    return (
        <li style={styles}> {name} - {quantity}</li>

    )
}

ShoppingListItem.propTypes = {
    name: PropTypes.string,
    quantity: PropTypes.number,
    picked: PropTypes.bool
}


export default ShoppingListItem;

