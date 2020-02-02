import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import Summary from "./components/Summary";
import ByGround from "./components/ByGround";
import ByOpposition from "./components/ByOpposition";
import PvP from "./components/PvP";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <Router>
      <div class="flex md:flex-row-reverse flex-wrap">
        {/* main component */}
        <div class="w-full md:w-3/4 xl:w-4/5 bg-gray-100">
          <div className="sm:w-4/5">
            <Route exact path="/" component={Summary} />
            <Route exact path="/summary" component={Summary} />
            <Route exact path="/byground" component={ByGround} />
            <Route exact path="/byopposition" component={ByOpposition} />
            <Route exact path="/pvp" component={PvP} />
          </div>
        </div>

        {/* sidebar */}
        <div class="w-full md:w-1/4 xl:w-1/5 bg-gray-900 md:bg-gray-900 md:pr-4 text-center fixed bottom-0 md:pt-8 md:top-0 md:left-0 h-16 md:h-screen md:border-r-4 md:border-gray-600">
          <Sidebar />
        </div>
      </div>
    </Router>
  );
};

export default App;
