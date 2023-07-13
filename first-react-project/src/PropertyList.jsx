import PropertyListSingle from "./PropertyListSingle"



export default function PropertyList({ property }) {
    return (
        <>

            <ul>

                {property.map(item =>
                    <PropertyListSingle key={item.id} {...item} />

                )}

            </ul>
        </>


    )

}



{/* {PropertyList.map((each) => (
                    // <PropertyListSingle key={each.id} {...each} />

                ))} */}