import React from 'react'
import {BrowserRouter, Link,Route, Switch} from 'react-router-dom'
import Home from "./screens/Home/Home";
import NotFound from "./screens/NotFound/NotFound";
import Footer from './Components/Footer/Footer'


function App() {
  return (
    <>
      <Switch>
        <Route path='/' exact={true} component={Home}/>
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

export default App;
