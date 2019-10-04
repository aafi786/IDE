import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store";

import Python from "./components/Python";
import Php from "./components/Php";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="">
          <header className="">
            <Route exact path="/" component={Python} />
            <Route exact path="/php" component={Php} />
            <Route exact path="/python" component={Python} />
          </header>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
