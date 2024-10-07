import { useState, Fragment } from 'react';
import axios from 'axios';

export default function Card() {
    const [quote, setQuote] = useState(null);

    async function handleGetRandomQuote() {
        const apiKey = await import.meta.env.VITE_API_KEY;
        await axios.get('https://quotes15.p.rapidapi.com/quotes/random/?language_code=en', {
            //I forgot to keep the api-key secret before pushing it to gihub
            //Gotta Change the api-key again -.-
            headers: {
                'x-rapidapi-key': apiKey,
                'x-rapidapi-host': 'quotes15.p.rapidapi.com'
            }})
            .then(function (response) {
              // handle success
              console.log(response.data);
              setQuote({
                content: response.data.content,
                author: response.data.originator.name
              })
              console.log(quote)
            })
            .catch(function (error) {
              // handle error
              console.log(error);
            });
    }
    return (
        <div className="card">
            {quote == null ? <h1>No quote generate yet</h1> : 
            <Fragment>
            <h1>Quote of the Day</h1>
            <p>
                <span>" </span>
                {quote.content}
                <span> "</span>
            </p>
            <p className="author">- {quote.author}</p>
            </Fragment>
            }
            <div className="card-footer">
                <div className="card-icon">
                    <a href=""><img src="" alt="" /></a>
                    <a href=""><img src="" alt="" /></a>
                    <a href=""><img src="" alt="" /></a>
                </div>
                <button className="btn" onClick={handleGetRandomQuote}>New Quote</button>
            </div>
        </div>
    )
}