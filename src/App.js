import './App.css';
import React from 'react'
import { Switch, Route } from 'react-router-dom'
import NavMain from './components/NavMain'
import Home from './pages/Home'

function App() {
  return (
    <div className="App">
      <NavMain />
      <Switch>
        <Route exact path='/' component={Home}></Route>
      </Switch>

    </div>
  );
}

export default App;
