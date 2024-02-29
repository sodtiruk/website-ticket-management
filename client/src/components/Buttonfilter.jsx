import "bootstrap/dist/css/bootstrap.min.css" 

export default function Buttonfilter() {

    return (
        <>
            <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Status" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Filter</button>
                </form>
            </div>
            </nav>
        </>
    )
}




