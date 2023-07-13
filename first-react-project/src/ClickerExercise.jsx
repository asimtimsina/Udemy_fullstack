


export default function ClickerExercise({ message, buttonText }) {

    // function ClickHandler() {
    //     alert(message);
    //     // console.log("Clicked")
    // }

    return (

        <>
            <button onClick={() => alert(message)} > {buttonText}</button >
        </>

    )

}