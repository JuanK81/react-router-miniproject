import { useParams, Route } from 'react-router-dom';
import { Fragment } from 'react/cjs/react.production.min';

import Comments from '../components/comments/Comments'

const QuoteDetails = () => {
    const params = useParams();

    return (
        <Fragment>
            <h1>Quote details</h1>
            <p>{params.quoteId}</p>
            <Route path={`/quotes/${params.quoteId}/comments`}>
                <Comments />
            </Route>
        </Fragment>
    )
};

export default QuoteDetails;