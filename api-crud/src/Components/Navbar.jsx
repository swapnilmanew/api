import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <div className="container mb-3 mt-5 text-center">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 m-auto d-flex justify-content-around">
                        <NavLink to="/" className="btn btn-primary">All Users</NavLink>
                        <NavLink to="/add" className="btn btn-success">Add User</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
