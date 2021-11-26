import { Fragment, useEffect } from 'react';
import { useParams, Route, Link, useMatch } from 'react-router-dom';
import useHttp from '../hooks/use-http';
import { getSingleQuote } from '../lib/api';

import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';
import LoadingSpinner from '../components/UI/LoadingSpinner';


const QuoteDetails = () => {
    const match = useMatch();
    const params = useParams();

    const { quoteId } = params;

    const {sendRequest, status, data: loadedQuote, error} = useHttp(getSingleQuote, true);

    useEffect(() => {
        sendRequest(quoteId);
    }, [sendRequest, quoteId]);

    if (status === 'pending') {
        return (
            <div className='centered'>
                <LoadingSpinner />
            </div>
        )
    };

    if (error) {
        return(
            <p className='centered'>{error}</p>
        )
    }

    if (!loadedQuote.text) {
        return <p>Quote not found!</p>
    }

    return (
        <Fragment>
            <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author}/>
            <Route path={match.path} exact>
                <div className='centered'>
                    <Link className='btn--flat' to={`${match.url}/comments`}>Load Comments</Link>
                </div>
            </Route>            
            <Route path={`${match.path}/comments`}>
                <Comments />
            </Route>
        </Fragment>
    )
};

export default QuoteDetails;