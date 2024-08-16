import React from 'react'

import { Link } from "react-router-dom"
import './Navbar.css'
import { HiShoppingCart } from "react-icons/hi2";

export const Navbar = ({cart}) => {
    return (

        <div className="nav">
         <nav className="navbar navbar-expand-lg navbar-light bg-light">
                 <div className="container px-4 px-lg-5">
                     <a className="navbar-brand" href="#!">SHOP- IN -STYLE</a>
                     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                     <div className="collapse navbar-collapse" id="navbarSupportedContent">
                         <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                             <li className="nav-item">
                                 <Link to={"/"} className="nav-link active">Home</Link>
                             </li>
                             <li className="nav-item"><Link to={"/About"} className="nav-link" href="#!">About</Link></li>
                         <li>
                         <div className="d-flex">
                             <Link to={"/Cart"} className="btn btn-outline-dark" type="submit"> 
                             <HiShoppingCart /><div className='text'><b>Cart</b></div>
                        <div className="badge bg-dark text-white ms-1 rounded-pill">{cart.length}</div>

                             </Link>
                         </div>
                         </li></ul>
                     </div>
                 </div>
            </nav>
          </div>

    )

}

