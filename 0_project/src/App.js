import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link      
} from 'react-router-dom'
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Views/Home'
import About from './Views/About'


function App() {
  return (
    <header>
      <div>

          <Router>
            <Header />             

              <div className="p-3">
                <Switch>
                  <Route exact path="/">
                    <Home />
                  </Route>

                  <Route path="/about">
                    <About />
                  </Route>
                </Switch>
              </div>

            <Footer /> 
          </Router>


      </div>
    </header>
  );
}

export default App;