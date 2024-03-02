import { Container, Row, Col, Nav, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    // <Container fluid>
      // <Row>
      <>
        <Col sm={3} md={2} className="sidebar">
          <Nav className="flex-column align-items-center mt-5">
            <Nav.Link><Image src="https://www.freeiconspng.com/thumbs/hd-tickets/download-ticket-ticket-free-entertainment-icon-orange-ticket-design-0.png" alt="Your Image" fluid /></Nav.Link>
            <Nav.Link as={Link} to="/">Ticket</Nav.Link>
            <Nav.Link as={Link} to="/admin">Admin</Nav.Link>
            <Nav.Link as={Link} to="/update">Update</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          </Nav>
        </Col>
      </>
        //{/*
        // <Col sm={9} md={10} className="content">
          // Your main content goes here
          // <h1>Ticket management</h1>
          // <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora nihil alias deserunt ex quis! Adipisci a ipsa cum minima, facilis rem numquam fugiat deleniti sunt molestiae accusamus blanditiis, temporibus optio.</p>
            // <Box />
        // </?Col> 
        // */}
      // </Row>
    // </Container>
  );
}


