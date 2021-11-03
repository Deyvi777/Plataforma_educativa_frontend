import React from 'react';
import './includes/bootstrap';
import Navbar from './Components/Navbar';
import HomePageBanner from './Components/HomePageBanner';
import HomePageCursos from './Components/HomePageCursos';
import HomePagePromo from './Components/HomePagePromo';
import HomePageTeachers from './Components/HomePageTeachers';
import Footer from './Components/Footer';
import SignUp from './Components/SignUp';
import Temary from './Components/Temary';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Courses from './Components/Courses';

function App() {
  return (
    <Router>
      <div>
        <Navbar />

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/contacts">
            <h2 className="courses text-center">En construccion...</h2>
          </Route>
          <Route path="/aboutUs">
            <h2 className="courses text-center">En construccion...</h2>
          </Route>
          <Route path="/signUp">
            <SignUp />
          </Route>

          <Route path="/cursos">
            <div className="courses">
              <Courses />
            </div>
          </Route>
          <Route path="/curso/:curso" component={Temary}></Route>

          <Route path="/teachers">
            <div className="teachers">
              <HomePageTeachers />
            </div>
          </Route>
          <Route path="/">
            <HomePageBanner />
            <div className="dropdown-divider"></div>
            <HomePageCursos />
            <div className="dropdown-divider"></div>
            <HomePagePromo />
            <div className="dropdown-divider"></div>
            <HomePageTeachers />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
