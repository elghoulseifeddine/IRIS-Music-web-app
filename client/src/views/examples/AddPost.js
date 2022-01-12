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
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ArtistNavbar from "components/Navbars/ArtistNavbar";
import { registerPost } from "JS/Actions/postActions";


function AddPost() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("register-page");
    return function cleanup() {
      document.body.classList.remove("register-page");
    };
  });
//   const isAuth = useSelector((state) => state.userReducer.isAuth);
  const currentUser = useSelector((state) => state.userReducer.currentUser);
  const loading = useSelector((state) => state.userReducer.loading);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [body, setBody] = useState("");
  const [video, setVideo] = useState("");
  const id=currentUser._id;

  const handleRegisterPost = (e) => {
    e.preventDefault();
    if (body === "" || video === "") {
      alert("Missing some inputs");
    }
    dispatch(registerPost({ body, video},id ));

    navigate("/profile-page");
    setBody("");
    setVideo("");
  };

  return ( loading?(<h1>Stana</h1>):(
    <div>
      <ArtistNavbar />
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
                <label>Video Link</label>
                  <Input
                    placeholder="Video Link"
                    type="text"
                    onChange={(e) => setVideo(e.target.value)}
                  />
                  <label>Description</label>
                  <Input
                    placeholder="Description"
                    type="text"
                    onChange={(e) => setBody(e.target.value)}
                  />
                  <NavLink>
                    <Button
                      block
                      className="btn-round"
                      color="danger"
                      onClick={(e) => handleRegisterPost(e)}
                    >
                      Valider
                    </Button>
                  </NavLink>
                </Form>
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
    </div>
  ));
}

export default AddPost;
