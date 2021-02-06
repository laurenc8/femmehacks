import './App.css';
import MyComponent from './API/api';
import { Route, Switch, Redirect } from 'react-router-dom';
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
      <MyComponent></MyComponent>
    </div>
  );
}

export default App;

