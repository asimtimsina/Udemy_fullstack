import DieGame from "./DieGame"
import "./Dice.css"

export default function Dice({ dice }) {

    return (

        <section className="Dice">

            {dice.map((v, i) => {
                return <DieGame key={i} val={v} />

            })}

        </section>

    )

}