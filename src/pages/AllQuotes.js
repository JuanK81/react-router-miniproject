import QuoteList from '../components/quotes/QuoteList'

const DUMMY_QUOTES = [
    {id: 'q1', author:'Paquito', text:'Pablito clavó un clavito.'},
    {id: 'q2', author:'Pepe', text:'Pablito no clavó un clavito, Fake News.'},
    {id: 'q3', author:'Paquito', text:'Pepe, troll.'},
]

const AllQuotes = () => {
    return (
        <QuoteList quotes={DUMMY_QUOTES}/>
    )
};

export default AllQuotes;