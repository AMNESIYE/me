import React, {Component} from 'react';
import {Nav, NavDropdown, Container, Navbar} from "react-bootstrap";
import "./c-nav.scss";

export class CNavigation extends Component {

    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Julien Méritte</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavDropdown title="C" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/">Bomberman - C/SDL</NavDropdown.Item>
                                <NavDropdown.Item href="/">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="/">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/">Separated link</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="C#" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/">Action</NavDropdown.Item>
                                <NavDropdown.Item href="/">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="/">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/">Separated link</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="JAVA" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/">Action</NavDropdown.Item>
                                <NavDropdown.Item href="/">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="/">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/">Separated link</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Javascript" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/">Action</NavDropdown.Item>
                                <NavDropdown.Item href="/">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="/">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/">Separated link</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Typescript" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/">Action</NavDropdown.Item>
                                <NavDropdown.Item href="/">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="/">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/">Separated link</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="PHP" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/">Action</NavDropdown.Item>
                                <NavDropdown.Item href="/">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="/">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/">Separated link</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Golang" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/">Action</NavDropdown.Item>
                                <NavDropdown.Item href="/">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="/">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}