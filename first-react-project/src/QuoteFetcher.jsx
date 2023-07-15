import { useEffect, useState } from "react";

export default function QuoteFetcher() {

    const quoteURL = 'http://inspo-quotes-api.herokuapp.com/quotes/random';

    const [quote, setQuote] = useState({ text: "", author: "" });

    useEffect(() => {

        // async function getInitialQuote() {
        //     const res = await fetch(quoteURL);
        //     const resJson = await res.json();
        //     // console.log(resJson.quote.text)
        //     setQuote(resJson.quote)

        // }

        // getInitialQuote();
        fetchQuote();

    }, [])

    async function fetchQuote() {

        const res = await fetch(quoteURL);
        const resJson = await res.json();
        // console.log(resJson.quote.text)
        setQuote(resJson.quote)

    }


    return (

        <div>

            <button onClick={fetchQuote}>Get a Random Quote</button>
            <h1>{quote.text}</h1>
            <h3>{quote.author}</h3>

        </div>

    )

}