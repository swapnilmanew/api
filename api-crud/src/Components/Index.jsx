import React, { useState } from 'react'
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
    return (
        <div>
            <div className="container">
                <h1 className="text-center fw-bold display-4">All Users</h1>
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-10">
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
                                                <th><NavLink to="/edit/{user.id}" className="btn btn-success">Edit</NavLink></th>
                                                <th><NavLink to="/delete/{user.id}" className="btn btn-danger">Delete</NavLink></th>
                                            </tr>
                                        </>
                                    )
                                })
                            }
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Index
