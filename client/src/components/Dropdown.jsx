
import "bootstrap/dist/css/bootstrap.min.css" 
import Dropdown from 'react-bootstrap/Dropdown';

export default function Drop() {
    return (
        <>
            <Dropdown>
            <Dropdown.Toggle variant="primary" id="dropdown-basic">
                filter
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1" onClick={ () => { console.log("hello world") }}>Pending</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Accepted</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Resolved</Dropdown.Item>
                <Dropdown.Item href="#/action-4">Resolved</Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>
        </>
    )
}
