import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
} from "reactstrap";
import {FaGithub, FaInstagram} from 'react-icons/fa';
import '../App.css';

class NavBar extends Component{
    constructor(props){
        super(props);
        this.state = {
            isOpen: false,
            windowWidth: window.innerWidth,
        };
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen,
        });
    }

    handleResize = () => {
        this.setState({
            windowWidth: window.innerWidth,
        });
    }

    componentDidMount(){

        // Constantly update state window width.
        window.addEventListener('resize', this.handleResize.bind(this));
    }

    render(){
        return(
            <div>
                <Navbar dark expand="sm" className="nav-bar">
                    <Container>
                        <NavbarBrand className="nav-brand" onClick={() => this.props.changePage("Home")}>Alejandro Deloach</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>

                            <Nav className="mr-auto" navbar>
                                <NavItem className="nav-item" onClick={() => this.props.changePage("About Me")} >
                                    About Me
                                </NavItem>
                            </Nav>
                            <hr className="my-2" style={{backgroundColor:"#6b6e70"}}/>
                            
                            <Nav className="ml-auto" navbar>   
                                <NavItem>
                                    <NavLink className="nav-link" href="https://github.com/dangercard">{(this.state.windowWidth <= 575) ? "Github" : <FaGithub/>}</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" href="https://www.instagram.com/alejandrodeloach/">{(this.state.windowWidth <= 575) ? "Instagram" : <FaInstagram/>}</NavLink>
                                </NavItem>
                            </Nav>

                        </Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }
}

export default NavBar;
