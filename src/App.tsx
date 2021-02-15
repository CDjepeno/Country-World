import React from 'react';
import { Countries } from './pages/countries/Countries';
import { BrowserRouter, Route, Link} from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import CountryPage from './pages/country/country';

const App = () => {
  return (
      <BrowserRouter>
        <Navbar />

        <Route path="/" exact render={() => <h1>Page d'acceuil</h1>} />
        <Route path="/pays" exact component={Countries} />
        <Route path="/pays/:id" component={CountryPage}/>
      </BrowserRouter>
  );
}

export default App;
