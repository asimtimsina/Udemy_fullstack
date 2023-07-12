// export default function ColorList({ color }) {
//     const lis = color.map((col) => <li>{col}</li>)
//     return (
//         <div>
//             <p>Color List</p>
//             <p>{lis}</p>
//         </div>
//     )

// }


export default function ColorList({ color }) {
    // const lis =color.map((col) => ( <li>{col}</li>)) 
    return (
        <div>
            <p>Color List</p>
            <ul>
                {color.map((col) => (
                    <li style={{ color: col }}>{col}</li>
                ))}
            </ul>
        </div>
    )

}