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
import {
  Button,
  Card,
  Form,
  Input,
  Container,
  Row,
  Col,
  NavLink,
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import { useDispatch, useSelector } from "react-redux";
import { register } from "JS/Actions/userActions";
import { Link, useNavigate } from "react-router-dom";
function RegisterPage() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("register-page");
    return function cleanup() {
      document.body.classList.remove("register-page");
    };
  });
  // const isAuth = useSelector((state) => state.userReducer.isAuth);
  const dispatch = useDispatch();
  const navigate=useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [tel, setTel] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("client");

  const handleRegister = (e) => {
    e.preventDefault();
    if (
      firstName === "" ||
      lastName === "" ||
      tel === "" ||
      email === "" ||
      password === ""
    ) {
      alert("Missing some inputs");
    }
    dispatch(register({ firstName, lastName, tel, email, password, role }));
    navigate("/login-page");
    setFirstName("");
    setLastName("");
    setTel("");
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
                  <label>Organisateur ou Artiste ?</label>
                  <Input
                    type="select"
                    onChange={(e) =>
                      e.target.value === "Je suis un Artiste"
                        ? setRole("artist")
                        : setRole("client")
                    }
                  >
                    <option>Je suis organisateur</option>
                    <option>Je suis un Artiste</option>
                  </Input>
                  <label>Nom</label>
                  <Input
                    placeholder="Nom"
                    type="text"
                    onChange={(e) => setLastName(e.target.value)}
                  />
                  <label>Prénom</label>
                  <Input
                    placeholder="Prénom"
                    type="text"
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                  <label>Numéro Téléphone</label>
                  <Input
                    placeholder="Numéro Téléphone"
                    type="text"
                    onChange={(e) => setTel(e.target.value)}
                  />
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
                  <NavLink>
                    <Button
                      block
                      className="btn-round"
                      color="danger"
                      onClick={(e) => handleRegister(e)}
                    >
                      Valider
                    </Button>
                  </NavLink>
                </Form>
                <Button
                  className="btn-link mr-1"
                  color="danger"
                  to="/login-page"
                  tag={Link}
                >
                  Already have an acount? Sign in
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

export default RegisterPage;
