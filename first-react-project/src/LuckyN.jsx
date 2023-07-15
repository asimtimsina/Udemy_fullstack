import { useState } from "react";
import { d6, sum, getRolls } from "./utils"
import Dice from "./Dice";
import Button from "./Button";


function LuckyN({ numDice = 2, winCheck }) {

    const [dice, setDice] = useState(getRolls(numDice));
    const isWinner = winCheck(dice)

    const reRollFunc = () => {
        setDice(getRolls(numDice));
    }

    return (

        <main className="LuckyN">

            <h1>Lucky {isWinner && "You Win"}</h1>

            <Dice dice={dice} />

            {/* <button onClick={reRollFunc}>Re-roll Dice</button> */}
            <Button clickFunc={reRollFunc} label="Re Roll" />
        </main>

    )

}


export default LuckyN;