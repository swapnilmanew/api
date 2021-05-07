import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Add from "./Components/Add";
import Edit from "./Components/Edit";
import Index from "./Components/Index";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Index} />
          <Route exact path="/add" component={Add} />
          <Route exact path="/edit" component={Edit} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
