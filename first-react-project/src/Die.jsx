// export default function Die() {
//     const roll = Math.floor(Math.random() * 6 + 1);
//     return <p>Die roll: {roll}</p>
// }

export default function Die({ numSides = 6 }) {
    const roll = Math.floor(Math.random() * numSides + 1);
    return <p>{numSides} sided die roll: {roll}</p>
}