import "bootstrap/dist/css/bootstrap.min.css" 
import React, { useEffect, useState } from "react"; 
import axios from "axios" 

export default function Box() {

    const [tickets, setTickets] = useState([]);

    // const [status, setStatus] = useState("");
    // const [orderStatus, setOrderStatus] = useState([]);
    
    // const [number, setNumber] = useState(0);

    // const addNumber = async () => {
    //     number += 1;
    //     console.log("test");
    // }

    const getTickets = async () => {
        const response = await axios.get("http://localhost:3000/tickets");
        setTickets(response.data.data);
    }


    // const status = "pending"
    // const getOrderStatus = async () => {
    //     const response = await axios.get(`http://localhost:3000/tickets/filter/${status}`);
    //     // setOrderStatus(response.data.data)
    //     setTickets(response.data.data);
    // }

    useEffect(() => {
        getTickets();
    }, [])

    // useEffect(() => {
    //     getOrderStatus();
    // }, [])

    console.log(tickets); 
    // console.log(orderStatus);
    // console.log(number)

    return (
        <>
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
                            <td>{val.create_at}</td>
                            <td>{val.update_at}</td>
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




