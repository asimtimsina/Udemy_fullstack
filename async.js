
// setTimeout(() => {
//     document.body.style.backgroundColor = 'red'

// }, 1000)

// setInterval(() => {
//     document.body.style.backgroundColor = 'orange'

// }, 2000)


const delayedColorChange = (newColor, delay, doNext) => {
    setTimeout(() => {
        document.body.style.backgroundColor = newColor
        doNext && doNext()
    }, delay)
}

delayedColorChange('red', 1000, () => {
    delayedColorChange('pink', 1000, () => {
        delayedColorChange('orange', 1000, () => {
            delayedColorChange('violet', 1000)
        })
    })
})


// searchMoviesAPI('amadeus', () => {
//     savetomyDB(movies, () => {
//         //if works // success
//     }), () => {
//         //if fails
//     }
// })