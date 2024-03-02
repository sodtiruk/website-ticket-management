import "bootstrap/dist/css/bootstrap.min.css" 
import React, { useEffect, useState } from "react"; 
import axios from "axios" 
import { Dropdown } from "react-bootstrap";

export function Drop( { functionFilter } ) {
    return (
        <>
            <Dropdown>
            <Dropdown.Toggle variant="primary" id="dropdown-basic" style={{marginRight: 30}}>
                Filter 
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item onClick={ functionFilter[0] }>All</Dropdown.Item>
                <Dropdown.Item onClick={ functionFilter[1] }>Pending</Dropdown.Item>
                <Dropdown.Item onClick={ functionFilter[2] }>Accepted</Dropdown.Item>
                <Dropdown.Item onClick={ functionFilter[4] }>Resolved</Dropdown.Item>
                <Dropdown.Item onClick={ functionFilter[3] }>Rejected</Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>

        </>
    )
}

export function Sort( { functionSort }) {
    return (
        <>
            <button type="button" className="btn btn-primary" onClick={ functionSort }>Last Update</button> 
        </>
    )
}


export default function Box() {

    const [tickets, setTickets] = useState([]);

    const [number, setNumber] = useState(0);

    const getTickets = async () => {
        const response = await axios.get("http://localhost:3000/tickets");
        setTickets(response.data.data);
    }

    useEffect(() => {
        getTickets();
    }, [])

    // console.log(tickets); 

    const fetchPending = async () => {
        const response = await axios.get("http://localhost:3000/tickets/filter/pending")
        setTickets(response.data.data)
    }

    const fetchAccepted = async () => {
        const response = await axios.get("http://localhost:3000/tickets/filter/accepted")
        setTickets(response.data.data)
    }

    const fetchRejected = async () => {
        const response = await axios.get("http://localhost:3000/tickets/filter/rejected")
        setTickets(response.data.data)
    }

    const fetchResolved = async () => {
        const response = await axios.get("http://localhost:3000/tickets/filter/resolved")
        setTickets(response.data.data)
    }

    const sortUpdate = async () => {
        const response = await axios.get("http://localhost:3000/tickets/sort/lastupdate")
        setTickets(response.data.data)
    }

    const functionFilter = [getTickets, fetchPending, fetchAccepted, fetchRejected, fetchResolved];



    console.log(number);
    return (
        <>
            <div className="mb-3 text-end d-flex justify-content-between">
                <Sort functionSort={ sortUpdate }/> 
                <Drop functionFilter={functionFilter}/> 
            </div>
            <div>
                <table className="table table-hover">
                    <thead className="table-primary">
                        <tr>
                        <th scope="col" onClick={ () => {} }>id</th>
                        <th scope="col">Title</th>
                        <th scope="col">Description</th>
                        <th scope="col">Contact</th>
                        <th scope="col">Status</th>
                        <th scope="col">Create</th>
                        <th scope="col">Update</th>
                        </tr>
                    </thead>

                    <tbody>
                        {tickets.map(val => (
                            <tr key={val.id}>
                            <th scope="row">{val.id}</th>
                            <td>{val.title}</td>
                            <td>{val.description}</td>
                            <td>{val.contact}</td>
                            <td>{val.status}</td>
                            <td>{ `${new Date(val.create_at).toLocaleTimeString()} ${new Date(val.create_at).toDateString()}` }</td>
                            <td>{ `${new Date(val.update_at).toLocaleTimeString()} ${new Date(val.update_at).toDateString()}` }</td>
                            </tr>
                        ))}
                    </tbody>

                    <tfoot className="table-secondary">
                        <tr>
                            <th>Total</th>
                            <td>{tickets.length}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tfoot>

                </table>
            </div>
        </>
    )
}




