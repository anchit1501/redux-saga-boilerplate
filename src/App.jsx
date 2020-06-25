import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Button from "./components/custom/Button";
import NewsItem from "./components/custom/Content";
import Loading from "./components/custom/Loader";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/">
            <Button />
            <Loading />
            <NewsItem />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
