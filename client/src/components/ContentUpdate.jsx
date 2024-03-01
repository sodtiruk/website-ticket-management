import React from 'react'
import FromUpdate from './FromUpdate'
import { Col } from 'react-bootstrap'

function ContentUpdate() {
  return (
        <>
        <Col sm={9} md={10} className="content mt-5">
            <h1 className="mt-2 text-primary">Update Management</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora nihil alias deserunt ex quis! Adipisci a ipsa cum minima, facilis rem numquam fugiat deleniti sunt molestiae accusamus blanditiis, temporibus optio.</p>
          
            <FromUpdate />

        </Col>  
        </>    

  )
}

export default ContentUpdate 