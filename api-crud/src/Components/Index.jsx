import React, { useEffect, useState } from 'react'
import "../index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from 'react-router-dom';
const Index = () => {

    const [user, setUser] = useState([]);

    const getUsers = async () => {
        const data = await fetch("http://localhost:3004/userdata");
        const users = await data.json();
        setUser(users);
    }
    useEffect(() => {
        getUsers();
    }, []);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [id, setId] = useState("");

    const editData = async (id) => {
        console.log(id);
        const api = await fetch(`http://localhost:3004/userdata/${id}`);
        const data = await api.json();
        setId(data.id);
        setName(data.name)
        setEmail(data.email);

    }

    const updateData = (e) => {
        let data = { name, email };
        e.preventDefault();
        console.log(name, email);

        fetch(`http://localhost:3004/userdata/${id}`, {
            method: 'PUT',
            headers:
            {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then((res) => {
                console.log(res);
                getUsers();
            })
            .catch((err) => console.log(err))

    }

    const deleteData = (id) => {
        fetch(`http://localhost:3004/userdata/${id}`, {
            method: "DELETE"
        })
            .then((res) => {
                console.log(res);
                getUsers();
            })
            .catch((err) => console.log(err))
    }

    return (
        <div>
            <div className="container">
                <h1 className="text-center fw-bold display-4 mb-3">All Users</h1>
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-7 m-auto">
                        <table className="table table-bordered table-striped">
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                            {
                                user.map((user) => {
                                    return (
                                        <>
                                            <tr>
                                                <th>{user.id}</th>
                                                <th>{user.name}</th>
                                                <th>{user.email}</th>
                                                <th><button onClick={() => editData(user.id)} className="btn bg-success text-white">Edit</button></th>
                                                <th><button onClick={() => deleteData(user.id)} className="btn bg-danger text-white">Delete</button></th>
                                            </tr>
                                        </>
                                    )
                                })
                            }
                        </table>
                    </div>
                    <div className="col-12 col-md-5 m-auto">
                        <form action="">
                            <input type="text" name="" id="" className="form-control my-3" onChange={(e) => setName(e.target.value)} value={name} placeholder="Name" />
                            <input type="text" name="" id="" className="form-control my-3" onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Email" />
                            <button className="btn btn-info" onClick={updateData}>Edit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Index;
