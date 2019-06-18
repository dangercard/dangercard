import React, { Component } from "react";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  Button,
  CardTitle,
  CardImg,
  CardBody,
  CardText,
  Row,
  Col,
  Container,
} from "reactstrap";
import "../App.css";
import {FaPhone, FaEnvelope} from 'react-icons/fa';
import profileImg from '../img/profile.png';


class AboutMe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: "1",
    };
  }

  toggleTab = (tab) => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  };

  render() {
    return (
      <Container fluid>
        <Row >
          <Col sm="3">
            <Card className="profile-card">
              <CardImg
                top    
                src={profileImg}
              />
              <CardBody className="card-body">
                <CardTitle>Alejandro Deloach Rivera</CardTitle>
                <hr className="my-2" style={{ backgroundColor: "#6b6e70" }}/>
                <CardText style={{marginBottom:"-12px"}}>
                  <FaPhone style={{color:"#86c232"}}/> (787)-372-6864
                  <br/>
                  <FaEnvelope style={{color:"white"}}/> alex.deloach9@gmail.com
                </CardText>
                {/* <Button>Button</Button> */}
              </CardBody>
            </Card>
          </Col>
          <Col sm="9">
            <div style={{ border: "1px solid #6b6e70" }}>
              <Nav tabs style={{borderColor:"#6b6e70"}}>
                <NavItem>
                  <NavLink
                    className="tab-link"
                    onClick={() => {
                      this.toggleTab("1");
                    }}
                  >
                    Bio
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className="tab-link"
                    onClick={() => {
                      this.toggleTab("2");
                    }}
                  >
                    Moar Tabs
                  </NavLink>
                </NavItem>
              </Nav>
              <TabContent activeTab={this.state.activeTab}>
                <TabPane tabId="1">
                  <Row>
                    <Col sm="12">
                      <h4 className="tab-text" style={{marginTop:"5px"}}>Introduction</h4>
                      <p className="tab-text">
                          Hello! My name is Alejandro. I'm a Puerto Rican
                        web developer living in San Juan PR. My hobbies include reading on history
                        and philosophy, painting and modifying consoles (mostly from the Gameboy
                        family), and playing videogames both old and new. I worked mainly with PHP
                        for 4 years, but now I'm focusing on React JS, MongoDB and Node JS after
                        realizing how much I enjoy Javascript.   
                      </p>

                      <hr className="my-2" style={{ backgroundColor: "#6b6e70", width:"90%" }}/>

                      <h4 className="tab-text" style={{marginTop:"5px"}}>Education</h4>
                      <p className="tab-text">
                        Bachelor's degree in Computer Science from the University of 
                        Puerto Rico, Rio Piedras Campus.   
                      </p>
                    </Col>
                  </Row>
                </TabPane>
                <TabPane tabId="2">
                  <Row>
                    <Col sm="6">
                      <Card body>
                        <CardTitle>Special Title Treatment</CardTitle>
                        <CardText>
                          With supporting text below as a natural lead-in to
                          additional content.
                        </CardText>
                        <Button>Go somewhere</Button>
                      </Card>
                    </Col>
                    <Col sm="6">
                      <Card body>
                        <CardTitle>Special Title Treatment</CardTitle>
                        <CardText>
                          With supporting text below as a natural lead-in to
                          additional content.
                        </CardText>
                        <Button>Go somewhere</Button>
                      </Card>
                    </Col>
                  </Row>
                </TabPane>
              </TabContent>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default AboutMe;
