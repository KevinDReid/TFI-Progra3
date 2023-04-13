import React from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Home from "./screens/Home/Home";
import Detail from "./screens/Detail/Detail";
import Favorites from "./screens/Favorites/Favorites";
import NotFound from "./screens/NotFound/NotFound";
import All from "./screens/All/All";

function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/all" component={All} />
        <Route path="/favorites" component={Favorites} />
        <Route path="/detail/id/:id" component={Detail} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

export default App;
