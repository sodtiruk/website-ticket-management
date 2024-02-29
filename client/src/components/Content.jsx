import React from 'react'
import { Col } from 'react-bootstrap'
import Box from './Box'
import Dropdown from "./Dropdown"
import "bootstrap/dist/css/bootstrap.min.css";


function Content() {
  return (
    <>
        <Col sm={9} md={10} className="content mt-5">
            <h1 className="mt-2 text-primary">Ticket Information</h1>
            
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora nihil alias deserunt ex quis! Adipisci a ipsa cum minima, facilis rem numquam fugiat deleniti sunt molestiae accusamus blanditiis, temporibus optio.</p>
            <div className="mx-2 mb-2">
                <Dropdown />
            </div>
            <Box />

        </Col> 
    </>
  )
}

export default Content