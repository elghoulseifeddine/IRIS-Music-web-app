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
import React, { useEffect } from "react";

// import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// styles
import "bootstrap/scss/bootstrap.scss";
import "assets/scss/paper-kit.scss?v=1.3.0";
import "assets/demo/demo.css?v=1.3.0";

// pages
import LandingPage from "views/examples/LandingPage.js";
import ProfilePage from "views/examples/ProfilePage.js";
import RegisterPage from "views/examples/RegisterPage.js";
import LoginPage from "views/examples/LoginPage";
import HomePage from "MyPages/HomePage";
import { getAuthUser } from "JS/Actions/userActions";
import ArtistPage from "MyPages/ArtistPage";
import AddProfile from "views/examples/AddProfile";
import AddPost from "views/examples/AddPost";
import UpdatePost from "views/examples/UpdatePost";
import ProfileDetailsPage from "views/examples/ProfileDetailsPage";

// others

const App = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.userReducer.isAuth);
  // const params=useParams();
  useEffect(() => {
    dispatch(getAuthUser());
  }, [isAuth,dispatch]);

  return (
    <Router>
      
    <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/profile-page" element={<ProfilePage />} />
        <Route exact path="/register-page" element={<RegisterPage />} />
        <Route exact path="/login-page" element={<LoginPage />} />
        <Route exact path="/home-page" element={<HomePage />} />
        <Route exact path="/artists" element={<ArtistPage />} />
        <Route exact path="/add-profile" element={<AddProfile />} />
        <Route exact path="/add-post" element={<AddPost />} />
        <Route exact path="/update-post/:id" element={<UpdatePost />} />
        <Route exact path="/details/:id" element={<ProfileDetailsPage />} />
      </Routes>
    </Router>
  );
};
export default App;
