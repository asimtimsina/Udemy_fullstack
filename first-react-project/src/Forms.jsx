function handleFormSubmit(e) {
    console.log('Form Submitted')
    e.preventDefault();

}

export default function Forms() {

    return (

        <form onSubmit={handleFormSubmit}>

            <button>Submit</button>
        </form>

    )
}