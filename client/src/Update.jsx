import React from 'react'
import { Container, Row } from 'react-bootstrap'
import Sidebar from './components/Sidebar'
import ContentUpdate from './components/ContentUpdate'

function Update() {
  return (
    <>
        
        <Container fluid>
          <Row>
            <Sidebar />
            <ContentUpdate />
          </Row>

        </Container>


    </>

  )
}

export default Update