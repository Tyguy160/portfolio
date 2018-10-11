import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Hero from "./components/hero";
import About from "./components/about";
import Contact from "./components/contact";
import Portfolio from "./components/portfolio";
import Blog from "./components/blogPage";
import NotFound from "./components/404";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Hero} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/blog" component={Blog} />
          <Route path="/" component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
