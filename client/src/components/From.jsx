import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

export default function From() {

    const [ticket, setTicket] = useState();

    const [title, setTitle] = useState("");
    const [des, setDes] = useState("");
    const [contact, setContact] = useState("");

    const createTicket = () => {
        axios.post("http://localhost:3000/ticket", {
            "title": title,
            "description": des,
            "contact": contact,
        }) 
    }

    console.log(title, des, contact);

    return (
        <>
            <form className="container border px-5 p-3">
            <div className="mb-2">
                <h1>Create Ticket</h1>
            </div>
            <div className="mb-2">
                <label className="form-label">Title</label>
                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" 
                onChange={(event) => {
                    setTitle(event.target.value)
                }} 
                required
                />
            </div>
            <div className="mb-2">
                <label className="form-label">Description</label>
                <input type="text" className="form-control" id="exampleInputPassword1" 
                onChange={(event) => {
                    setDes(event.target.value)
                }} 
                required
                />
            </div>
            <div className="mb-2">
                <label className="form-label">Contact</label>
                <input type="text" className="form-control" id="exampleInputPassword1" 
                onChange={(event) => {
                    setContact(event.target.value)
                }} 
                required
                />
            </div>
            <br />
            <button type="submit" className="btn btn-primary" onClick={createTicket}>Create</button>
            <br />
            <br />
            </form>
        </>
    )
}
