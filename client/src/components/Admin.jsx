import React from 'react'
import Sidebar from './Sidebar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row } from 'react-bootstrap';
import Adminmanage from './Adminmanage';
import Footer from './Footer';

function Admin() {
  return (
    <>
        <Container fluid>
          <Row>
            <Sidebar />
            <Adminmanage />            

          </Row>

        </Container>
        <Footer />
    </>
  )
}

export default Admin