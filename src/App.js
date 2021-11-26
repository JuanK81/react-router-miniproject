import { Route, Routes, Navigate } from 'react-router-dom';
// import { Navigate } from 'react-router-dom';
// import { Routes, Route } from 'react-router';

import AllQuotes from './pages/AllQuotes';
import QuoteDetails from './pages/QuoteDetail';
import NewQuote from './pages/NewQuote';
import Layout from './components/layout/Layout';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate replace to="/quotes" />}/>
        <Route path="/quotes" element={<AllQuotes />}/>
        <Route path="/quotes/:quoteId" element={<QuoteDetails />}/>
        <Route path="/new-quote" element={<NewQuote />}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
