import "bootstrap/dist/css/bootstrap.min.css" 
import React from "react"; 

export default function Box() {
    let data = [
        {
            title: "Train",
            description: "Bangkok to Nakhonpathom",
            contact: "sodtiruk22@gmail.com",
            status: "pending"  
        },
        {
            title: "Train",
            description: "Bangkok to Nakhonpathom",
            contact: "sodtiruk22@gmail.com",
            status: "pending"  
        }
    ];

    data.forEach(item => {
        console.log(item.title, item.description, item.contact, item.status) 
    });


    return (
        <>
            <div>
                <table className="table table-hover">
                    <thead className="table-primary">
                        <tr>
                        <th scope="col">id</th>
                        <th scope="col">Title</th>
                        <th scope="col">Description</th>
                        <th scope="col">Contact</th>
                        <th scope="col">Status </th>
                        <th scope="col">Create</th>
                        <th scope="col">Update</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                        <th scope="row">1</th>
                        <td>Train</td>
                        <td>Bangkok to Nakhonpathom</td>
                        <td>sodtiruk22@gmail.com</td>
                        <td>pending</td>
                        <td>pending</td>
                        <td>pending</td>
                        </tr>
                        <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>pending</td>
                        <td>pending</td>
                        <td>@fat</td>
                        <td>@fat</td>
                        </tr>
                    </tbody>

                    <tfoot className="table-secondary">
                        <tr>
                            <th>Total</th>
                            <td>footer</td>
                            <td>footer</td>
                            <td>footer</td>
                            <td>footer</td>
                            <td>footer</td>
                            <td>footer</td>
                        </tr>
                    </tfoot>

                </table>
            </div>
        </>
    )
}




