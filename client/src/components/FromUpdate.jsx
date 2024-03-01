import React from 'react'

export default function FromUpdate() {
  return (
        <>
            <form className="container border p-5">
            <div className="mb-2">
                <h1>Update Ticket</h1>
            </div>
            <div className="mb-2">
                <label for="exampleInputPassword1" className="form-label">Id</label>
                <input type="text" className="form-control" id="exampleInputPassword1" />
            </div>
            <div className="mb-2">
                <label for="exampleInputEmail1" className="form-label">Title</label>
                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div className="mb-2">
                <label for="exampleInputPassword1" className="form-label">Description</label>
                <input type="text" className="form-control" id="exampleInputPassword1" />
            </div>
            <div className="mb-2">
                <label for="exampleInputPassword1" className="form-label">Contact</label>
                <input type="text" className="form-control" id="exampleInputPassword1" />
            </div>
            <br />
            <button type="submit" className="btn btn-primary">Create</button>
            </form>
        </>
  )
}
