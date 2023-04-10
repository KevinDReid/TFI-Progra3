import React from 'react'
import {BrowserRouter, Link,Route, Switch} from 'react-router-dom'
import Home from "./screens/Home/Home";
import Detail from "./screens/Detail/Detail";
import Favorites from "./screens/Favorites/Favorites";
import NotFound from "./screens/NotFound/NotFound";


function App() {
  return (
    <>
      <Switch>
        <Route path='/' exact={true} component={Home}/>
        <Route path='/favorites' component={Favorites}/>
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

export default App;
