import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from ".components/Nav/Navigation";
import Home from ".components/Home/Home";
import Profile from ".compents/Profile/Profile";
import About from ".components/About/About";
import Contact from ".components/Contact/Contact";
import Footer from ".components/Footer/Footer";

//planned components
function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
        <div className="wrapper">
          <main className="main">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/Profile" component={Profile} />
              <Route exact path="/About" component={About} />
              <Route exact path="/Contact" component={Contact} />
            </Switch>
          </main>
        <Navigation />
        </div>
      <Footer />
    </Router>
  );
}

export default App;
