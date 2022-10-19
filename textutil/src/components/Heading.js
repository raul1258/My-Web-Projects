import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Heading(props) {
  return (
    <Navbar bg={props.mode} expand="lg">
      <Container fluid >
        <Navbar.Brand href="#">{props.title}</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">About</Nav.Link>
            
          </Nav>
          <Form className={`d-flex text-${props.mode==='light' ? 'dark':'light'}`}>
          <Form.Check 
        type="switch"
        id="custom-switch"
        label="Enable Dark Mode"
        onClick={props.toggleMode}
      />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Heading;