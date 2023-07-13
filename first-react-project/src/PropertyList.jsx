import PropertyListSingle from "./PropertyListSingle"
import './PropertyList.css'


export default function PropertyList({ property }) {
    return (
        <div className="PropertyList">

            <ul>

                {property.map(item =>
                    <PropertyListSingle key={item.id} {...item} />

                )}

            </ul>
        </div>


    )

}



{/* {PropertyList.map((each) => (
                    // <PropertyListSingle key={each.id} {...each} />

                ))} */}