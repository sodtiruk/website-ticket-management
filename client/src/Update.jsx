import React from 'react'
import { Container, Row } from 'react-bootstrap'
import Sidebar from './components/Sidebar'
import ContentUpdate from './components/ContentUpdate'
import Footer from './components/Footer'

function Update() {
  return (
    <>
        
        <Container fluid>
          <Row>
            <Sidebar />
            <ContentUpdate />
          </Row>

        </Container>

        <Footer />



    </>

  )
}

export default Update