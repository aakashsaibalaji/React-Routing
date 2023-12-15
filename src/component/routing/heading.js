import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function Heading() {
  return (<div>
    <Navbar bg="dark" data-bs-theme="dark" className='d-none d-lg-block shadow'>
      <Container className='d-flex'>
        <Navbar.Brand href='home'>RACE</Navbar.Brand>
        <Nav>
          <LinkContainer to="/home" className='mx-3'>
            <Nav.Link>home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/features" className='mx-3'>
            <Nav.Link>Features</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/Content " className='mx-3'>
            <Nav.Link>Content</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/About" className='mx-3'>
            <Nav.Link>About</Nav.Link>
          </LinkContainer>
        </Nav>
      </Container>
    </Navbar>
    <Navbar bg="dark" data-bs-theme="dark" className='d-lg-none d-md-block d-sm-block d-block shadow'>
      <Container className='d-flex'>
        <Navbar.Brand href='home'>RACE</Navbar.Brand>
        <Nav>
          <LinkContainer to="/home">
            <Nav.Link>home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/features">
            <Nav.Link>Features</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/Content " >
            <Nav.Link>Content</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/About" >
            <Nav.Link>About</Nav.Link>
          </LinkContainer>
        </Nav>
      </Container>
    </Navbar>
    <div className='mt-5'>
      <Container>
        <Row>
          <Col lg={4} md={6} sm={11}>
            <p>hello every one</p>
            <p>hello every one</p>
            <p>hello bye mister</p>
          </Col>
          <Col lg={4} md={6} sm={11}>
            <p>hello every one</p>
            <p>hello every one</p>
            <p>hello bye mister</p>
          </Col>
          <Col lg={4} md={6} sm={11}>
            <p>hello every one</p>
            <p>hello every one</p>
            <p>hello bye mister</p>
          </Col>
        </Row>
      </Container>
    </div>
  </div>);
}

export default Heading;