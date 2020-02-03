import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import Summary from "./components/Summary";
import Stats from "./components/Stats";
import Timeline from "./components/Timeline";
import PvP from "./components/PvP";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <Router>
      <div class=" flex md:flex-row-reverse flex-wrap">
        {/* main component */}
        <div class="w-full md:w-3/4 xl:w-4/5 bg-gray-100 ">
          <div>
            <Route exact path="/" component={Summary} />
            <Route exact path="/summary" component={Summary} />
            <Route exact path="/stats" component={Stats} />
            <Route exact path="/timeline" component={Timeline} />
            <Route exact path="/pvp" component={PvP} />
          </div>
        </div>

        {/* sidebar */}
        <div class="w-full md:w-1/4 xl:w-1/5 bg-gray-900 md:bg-gray-900 md:pr-4 text-center fixed bottom-0 md:pt-8 md:top-0 md:left-0 h-16 md:h-screen ">
          <Sidebar />
        </div>
      </div>
    </Router>
  );
};

export default App;
