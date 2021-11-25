import { useParams, Route, Link } from 'react-router-dom';
import { Fragment } from 'react/cjs/react.production.min';

import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';

const DUMMY_QUOTES = [
  { id: "q1", author: "Paquito", text: "Pablito clavó un clavito." },
  { id: "q2", author: "Pepe", text: "Pablito no clavó un clavito, Fake News." },
  { id: "q3", author: "Paquito", text: "Pepe, troll." },
];

const QuoteDetails = () => {
    const params = useParams();

    const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId);

    if (!quote) {
        return <p>Quote not found!</p>
    }

    return (
        <Fragment>
            <HighlightedQuote text={quote.text} author={quote.author}/>
            <Route path={`/quotes/${params.quoteId}`} exact>
                <div className='centered'>
                    <Link className='btn--flat' to={`/quotes/${params.quoteId}/comments`}>Load Comments</Link>
                </div>
            </Route>            
            <Route path={`/quotes/${params.quoteId}/comments`}>
                <Comments />
            </Route>
        </Fragment>
    )
};

export default QuoteDetails;