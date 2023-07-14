import { useState } from "react";




export default function ScoreKeeperGame({ numPlayer = 3, target = 10 }) {

    const [scores, setScores] = useState(new Array(numPlayer).fill(0));
    let isWin = false;
    // const incScore = (id) => {
    //     console.log(id)
    //     setScores(oldScores => {
    //         const newScores = [...oldScores];
    //         newScores[id] += 1;
    //         return newScores;
    //     })
    // }


    const incScore = (id) => {
        if (!isWin) {
            setScores((oldScores) => {
                return oldScores.map((score, i) => {
                    if (i === id) return score + 1;
                    return score;
                })

            })
        }
    }

    const reset = () => {
        setScores(new Array(numPlayer).fill(0))
        isWin = false;
    }
    // const scoreData = new Array(numPlayer).fill(0);
    // scoreData.map((i, j) => { console.log(i, j) })
    return (

        <div>

            <p>ScoreKeeper Game</p>
            <ul>
                {scores.map((each, i) => {
                    return <li key={i}> Player{i + 1}: {each}
                        <button onClick={() => { incScore(i) }}>+1</button>
                        {each >= target && "Winner"}
                        {each >= target ? isWin = true : null}
                    </li>
                })}
            </ul>
            <button onClick={reset}>Reset</button>
        </div>


    )


}