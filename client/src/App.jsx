import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Sidebar from "./components/Sidebar.jsx";
import { Container, Row } from "react-bootstrap";
import Content from "./components/Content.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>

        <Container fluid>
          <Row>
            <Sidebar />
            <Content />
          </Row>

        </Container>
        <Footer />


    </>
  )
}

export default App
