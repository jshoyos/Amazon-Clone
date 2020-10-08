import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
              <Header/>
            <h1>checkout</h1>
          </Route>
          <Route path="/login">
            <h1>login</h1>
          </Route>
          {/*this is the default page*/}
          <Route>
          <Header/>
          <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
