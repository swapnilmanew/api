import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";

const Add = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    const postdata = (e) => {
        let data = { name, email };
        console.log(data)
        e.preventDefault();
        fetch("http://localhost:3004/userdata", {
            method: "POST",
            header: {
                "Accept": "application/json",
                "Application/type": "application/json"
            },
            body: JSON.stringify({ name, email })
        }).then((response) => { console.log(response) })
            .catch((error) => {
                console.log(error + "")
            })
    }
    return (
        <>
            <div className="container">
                <h1 className="text-center fw-bold display-4">Add User</h1>

                <div className="row">
                    <div className="col-12 col-sm-8 col-md-10">
                        <form action="" method="post">
                            <input type="text" name="" id="" className="form-control" placeholder="" value={name} onChange={(e) => { setName(e.target.value) }} />
                            <input type="text" name="" id="" className="form-control" placeholder="" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                            <button className="btn btn-info" onClick={postdata}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Add
