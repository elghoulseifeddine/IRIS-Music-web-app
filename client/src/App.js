/*!

=========================================================
* Paper Kit React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

// styles
import "bootstrap/scss/bootstrap.scss";
import "assets/scss/paper-kit.scss?v=1.3.0";
import "assets/demo/demo.css?v=1.3.0";
// pages
import Index from "views/Index.js";
import NucleoIcons from "views/NucleoIcons.js";
import LandingPage from "views/examples/LandingPage.js";
import ProfilePage from "views/examples/ProfilePage.js";
import RegisterPage from "views/examples/RegisterPage.js";
import "./app.css";
// others

const App =()=>{ 
  return ( 
  <BrowserRouter>
    
    
      <Route
        exact path="/"
        render={(props) => <LandingPage {...props} />}
      />
      <Route
      exact
        path="/profile-page"
        render={(props) => <ProfilePage {...props} />}
      />
      <Route
      exact
        path="/register-page"
        render={(props) => <RegisterPage {...props} />}
      />
  
  </BrowserRouter>

);
}
export default App;