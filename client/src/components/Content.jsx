import React from 'react'
import { Col } from 'react-bootstrap'
import Box from './Box'
import Dropdown from "./Drop"
import "bootstrap/dist/css/bootstrap.min.css";


function Content() {
  return (
    <>
        <Col sm={9} md={10} className="content mt-5">
            <h1 className="mt-2 text-primary">Ticket Information</h1>
            
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora nihil alias deserunt ex quis! Adipisci a ipsa cum minima, facilis rem numquam fugiat deleniti sunt molestiae accusamus blanditiis, temporibus optio.</p>
            <Box />

        </Col> 
    </>
  )
}

export default Content