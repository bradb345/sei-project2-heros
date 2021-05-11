import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Nav from '../src/Components/common/Nav'
import Home from '../src/Components/common/Home'
import Characters from '../src/Components/Characters/Characters'
import CharacterShow from '../src/Components/Characters/CharacterShow'

function App() {

  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/characters/:characterId' component={CharacterShow} />
        <Route path='/characters' component={Characters} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
