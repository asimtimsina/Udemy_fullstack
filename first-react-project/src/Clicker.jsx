let count = 0;

function handleClick() {
    count += 1;
    console.log('Clicked')
}

function handleHover() {
    console.log('Handle Hover')
}


export default function Clicker() {


    return (
        <div>

            <p onMouseOver={handleHover}>Click Me</p>
            <button onClick={handleClick}>Click {count}</button>

        </div>


    )

}