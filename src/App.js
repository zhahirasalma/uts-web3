import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import {
  BrowserRouter,
  Switch,
} 
from "react-router-dom";
import Header from "./Header";
import Blog from "./Blog.js";
import BlogDetail from "./BlogDetail.js"

//install bootstrap dulu
import 'bootstrap/dist/css/bootstrap.min.css';

// Ini merupakan functional component
// https://getbootstrap.com/docs/4.4/examples/navbar-static/
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Router basename ={process.env.PUBLIC_URL}>
        <Switch>
          <Route path="/about">
            About
          </Route>
          <Route path="/blog/:articleId" component={BlogDetail} />
          <Route path="/blog" component={Blog}>
            <Blog />
          </Route>
          <Route path="/">
            Home
          </Route>
        </Switch>
        </Router>
      </div>
    </BrowserRouter>
  );
}

export default App;