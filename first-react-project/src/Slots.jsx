// export default function Slots() {

//     const logos = ['🍒', '🍌'];
//     const var1 = logos[Math.floor(Math.random() * logos.length)];
//     const var2 = logos[Math.floor(Math.random() * logos.length)];
//     const var3 = logos[Math.floor(Math.random() * logos.length)];

//     // console.log(var1, var2, var3);

//     return (
//         <>
//             <h1>{var1} {var2} {var3}</h1>
//             {var1 === var2 && var1 === var3 ?
//                 <><h3 style={{ color: 'green' }}>You win!!!</h3> <h2>Congrats</h2> </>
//                 :
//                 <h3 style={{ color: 'red' }}>You Lose!!!</h3>
//             }
//         </>
//     )
// }


export default function Slots() {

    const logos = ['🍒', '🍌'];
    const var1 = logos[Math.floor(Math.random() * logos.length)];
    const var2 = logos[Math.floor(Math.random() * logos.length)];
    const var3 = logos[Math.floor(Math.random() * logos.length)];

    // console.log(var1, var2, var3);
    const isWinner = var1 === var2 && var1 === var3;
    const styles = { color: isWinner ? 'green' : 'red' }
    return (
        <>
            <h1>{var1} {var2} {var3}</h1>
            <h2 style={styles}> {isWinner ? 'You Win' : 'You Lose'}</h2>
            <h3>{isWinner ? 'Congrats' : null}</h3>
        </>
    )
}