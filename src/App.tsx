import React from 'react';
import { Countries } from './pages/countries/Countries';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import CountryPage from './pages/country/country';
import PageNotFound from './pageNotFound/PageNotFound';

const App = () => {
  return (
      <BrowserRouter>
        <Navbar />
        <Switch>
            <Route path="/" exact render={() => <h1>Page d'acceuil</h1>} />
            <Route path="/pays" exact component={Countries} />
            <Route path="/pays/:id" component={CountryPage}/>
            <Route component={PageNotFound} />
        </Switch>
      </BrowserRouter>
  );
}

export default App;
