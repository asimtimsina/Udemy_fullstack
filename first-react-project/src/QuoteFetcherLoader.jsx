import { useEffect, useState } from "react";

export default function QuoteFetcherLoader() {

    const quoteURL = 'http://inspo-quotes-api.herokuapp.com/quotes/random';

    const [quote, setQuote] = useState({ text: "", author: "" });

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchQuote() {

            const res = await fetch(quoteURL);
            const resJson = await res.json();
            // console.log(resJson.quote.text)
            setQuote(resJson.quote)

        }

        fetchQuote();
        setIsLoading(false);

    }, [])




    return (

        <div>
            {isLoading && <h1>Loading...</h1>}
            {/* <button onClick={fetchQuote}>Get a Random Quote</button> */}
            <h1>{quote.text}</h1>
            <h3>{quote.author}</h3>

        </div>

    )

}