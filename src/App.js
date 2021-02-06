import './App.css';
import { Route, Switch, Redirect, Link } from 'react-router-dom';
import SwipePage from './SwipePage';
import MatchesPage from './MatchesPage';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={SwipePage} />
        <Route exact path="/matches" component={MatchesPage} />
        <Route component={() => <Redirect to="/" />} />
      </Switch>
    </div>
  );
}

export default App;
