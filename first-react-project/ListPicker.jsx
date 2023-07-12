export default function ListPicker({ values }) {
    const randIndex = Math.floor(Math.random() * values.length);
    console.log(randIndex)
    return (
        <div>
            <p>Random value from the list is {values[randIndex]} </p>
        </div>
    )

}