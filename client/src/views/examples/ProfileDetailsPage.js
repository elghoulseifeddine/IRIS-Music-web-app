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
import React, { useEffect, useState } from "react";

// reactstrap components
import {
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getUserById } from "JS/Actions/userActions";
import DetailsPostList from "MyPages/DetailsPostList";
import ClientNavbar from "components/Navbars/ClientNavbar";

function ProfileDetailsPage() {
  const isAuth = useSelector((state) => state.userReducer.isAuth);
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = React.useState("2");
  const toggle = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    return function cleanup() {
      document.body.classList.remove("landing-page");
    };
  });

  const { id } = useParams();
  const userById = useSelector((state) => state.userReducer.userById);
  const [loading, setLoading] = useState(true);
  
  const gettingUserByID=async()=>{
    await dispatch(getUserById(id));
    setLoading(false);
  }

  useEffect( () => {
    gettingUserByID();
  }, [loading, dispatch, isAuth,id]);

  return (
    <div>
      {!loading && (
        <div>
          <ClientNavbar />
          <ProfilePageHeader />
          <div className="section profile-content">
            <Container>
              <div className="owner">
                <div className="avatar">
                  <img
                    alt="..."
                    className="img-circle img-no-padding img-responsive"
                    src={(userById.user.image)||(require("assets/img/faces/R.jpg").default)}
                  />
                </div>
                <div className="name">
                  <h4 className="title">
                    {`${userById.user.lastName} ${userById.user.firstName}`}{" "}
                    <br />
                  </h4>
                  <h6 className="title">{`${userById.user.tel}`}</h6>
                  <h6 className="description">{`${userById.user.style}`}</h6>
                  <h6 className="description">{`${userById.user.instrument}`}</h6>
                  <h6 className="description">{`${userById.user.genre}`}</h6>
                </div>
              </div>
              <Row>
                <Col className="ml-auto mr-auto text-center" md="6">
                  <p>{`${userById.user.description}`}</p>
                </Col>
              </Row>
              <br />

              {/* Tab panes */}
              <TabContent className="following" activeTab={activeTab}>
                <TabPane className="text-center" tabId="2" id="following">
                  <h3 className="text-muted">Posts</h3>
                  {userById.user.posts.length>0 ? (
                    <DetailsPostList posts={userById.user.posts} />
                  ) : (
                    <h3 className="text-muted">No Posts Found</h3>
                  )}
                </TabPane>
              </TabContent>
            </Container>
          </div>
          <DemoFooter />
        </div>
      )}
      {loading && <h1>Loading</h1>}
    </div>
  );
}

export default ProfileDetailsPage;
