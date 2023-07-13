import "./PropertyListSingle.css"

export default function PropertyListSingle({ name, rating, price }) {

    return (

        <div className='PropertyListSingle'>
            <h2>{name}</h2>
            <h4>${price} a night</h4>
            <h5>{rating} stars</h5>
        </div >

    )

}