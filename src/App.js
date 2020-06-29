import React,{Component} from 'react';
import logo from './logo.svg';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem,Form, Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">Confusion</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link   href="#home">Home</Nav.Link>
      <Nav.Link  href="#link">About</Nav.Link>
      <Nav.Link  href="#link">Services</Nav.Link>
      <Nav.Link  href="#link">Contacts</Nav.Link>
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
    </div>
  );
}

export default App;
