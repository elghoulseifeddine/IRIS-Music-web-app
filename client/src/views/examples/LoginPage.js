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
import React, { useState } from "react";

// reactstrap components
import { Button, Card, Form, Input, Container, Row, Col } from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import { Link, useNavigate} from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "JS/Actions/userActions";
import { NavLink } from "reactstrap";
function LoginPage() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("register-page");
    return function cleanup() {
      document.body.classList.remove("register-page");
    };
  });
  const navigate=useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      alert("Missing some inputs");
    }
    dispatch(login({ email, password }));
    navigate('/home-page');
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <ExamplesNavbar />
      <div
        className="page-header"
        style={{
          backgroundImage:
            "url(" + require("assets/img/login-image.jpg").default + ")",
        }}
      >
        <div className="filter" />
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" lg="4">
              <Card className="card-register ml-auto mr-auto">
                <h3 className="title mx-auto">Welcome</h3>
                <div className="social-line text-center"></div>
                <Form className="register-form">
                  <label>Email</label>
                  <Input
                    placeholder="Email"
                    type="text"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <label>Mot de passe</label>
                  <Input
                    placeholder="Mot de passe"
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  
                    <Button
                      block
                      className="btn-round"
                      color="danger"
                      onClick={(e) => handleLogin(e)}
                    >
                      LOG IN
                    </Button>
                  
                </Form>
                <div className="forgot">
                  <Button
                    className="btn-link"
                    color="danger"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    Mot de passe oublié?
                  </Button>
                </div>
                <Button
                  className="btn-link mr-1"
                  color="danger"
                  to="/register-page"
                  tag={Link}
                >
                  Sign up
                </Button>
              </Card>
            </Col>
          </Row>
        </Container>
        <div className="footer register-footer text-center">
          <h6>
            © {new Date().getFullYear()}, made with{" "}
            <i className="fa fa-heart heart" /> by IRIS MUSIC
          </h6>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
