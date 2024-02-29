import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/From.css"

export default function From() {
    return (
        <>
            <form className="container border p-5">
            <div className="mb-3">
                <h1>Create ticket</h1>
            </div>
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Title</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Description</label>
                <input type="password" className="form-control" id="exampleInputPassword1" />
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Contact</label>
                <input type="password" className="form-control" id="exampleInputPassword1" />
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Status</label>
                <input type="password" className="form-control" id="exampleInputPassword1" />
            </div>
            <button type="submit" className="btn btn-primary">Create</button>
            </form>
        </>
    )
}
