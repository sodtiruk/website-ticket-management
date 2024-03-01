import React, { useState } from 'react'
import { Dropdown } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

export default function FromUpdate() {

    const [id, setId] = useState(0);
    const [title, setTitle] = useState("");
    const [des, setDes] = useState("");
    const [contact, setContact] = useState("");
    const [status, setStatus] = useState("");

    const updateTicket = () => {
        axios.put("http://localhost:3000/ticket", {
            "id": id,
            "title": title,
            "description": des,
            "contact": contact,
            "status": status
        })
    }
    
    console.log(id, title, des, contact, status);


  return (
        <>
            <form className="container border px-5 p-3">
            <div className="mb-1">
                <h1>Update Ticket</h1>
            </div>
            <div className="mb-1">
                <label className="form-label">Id</label>
                <input type="text" className="form-control"  
                onChange={ (event) => {
                    setId(event.target.value)
                }}
                />
            </div>
            <div className="mb-1">
                <label className="form-label">Title</label>
                <input type="text" className="form-control" aria-describedby="emailHelp" 
                onChange={ (event) => {
                    setTitle(event.target.value)
                }} 
                />
            </div>
            <div className="mb-1">
                <label className="form-label">Description</label>
                <input type="text" className="form-control" 
                onChange={ (event) => {
                    setDes(event.target.value)
                }} 
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Contact</label>
                <input type="text" className="form-control" 
                onChange={ (event) => {
                    setContact(event.target.value) 
                }}
                />
            </div>
            <div className="mb-1">
                {/* <label for="exampleInputPassword1" className="form-label">asdfsdf</label>
                <input type="text" className="form-control" id="exampleInputPassword1" /> */}

                <select id="cars" name="cars" onChange={ (event) => {
                    setStatus(event.target.value)
                }}>
                <option value="pending">Pending</option>
                <option value="accepted">Accepted</option>
                <option value="resolved">Resolved</option>
                <option value="rejected">Rejected</option>
                </select>

            </div>
            <br />
            <button type="submit" className="btn btn-primary" onClick={updateTicket}>Update</button>
            </form>
        </>
  )
}
