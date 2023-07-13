let count = 0;

function handleClick() {
    count += 1;
    console.log('Clicked')
}


export default function Clicker() {


    return (
        <div>

            <p>Click Me</p>
            <button onClick={handleClick}>Click {count}</button>

        </div>


    )

}