import { useState } from "react"

export default function ScoreKeeper() {

    const [scores, SetScores] = useState({ P1Score: 0, P2Score: 0 });

    function incP1Score() {
        // const newScore = { ...scores, P1Score: scores.P1Score + 1 };
        // SetScores(newScore);

        SetScores((oldScores) => {
            return { ...oldScores, P1Score: oldScores.P1Score + 1 }
        })
    }


    function incP2Score() {
        SetScores((oldScores) => {
            return { ...oldScores, P2Score: oldScores.P2Score + 1 }
        })
    }

    return (

        <div>
            <p>Player1: {scores.P1Score}</p>
            <p>Player2: {scores.P2Score}</p>
            <button onClick={incP1Score}>+1 Player1</button>
            <button onClick={incP2Score}>+1 Player2</button>

        </div>

    )

}