// export default function Greeter(props) {
//     console.log(props)
//     return <h1>HELLO {props.person}!! </h1>
// }

export default function Greeter({ person, from }) {
    // console.log(props)
    return (
        <>
            <h1>HELLO {person}!! </h1>
            <h2>- {from} </h2>
        </>
    )
}