import { Route, Switch } from 'react-router-dom';
import { Home, Login } from './pages';

function App() {

  return (
    <Switch>
      <Route exact path="/"><Home /></Route>
      <Route path="/login"><Login /></Route>
    </Switch>
  )
}

export default App
