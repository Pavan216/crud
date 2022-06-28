import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
<nav className="navbar navbar-expand-lg navbar-light bg-success">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
    <Link className="navbar-brand" to="/">CRUD OPERATION </Link>
    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about">About</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/contact">Contact</Link>
      </li>
    </ul>
    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-primary" type="submit">Search</button>
      <button className="btn btn-warning" type="submit"><Link to='/Crud/Add'>Adduser</Link></button>
  </div>
</nav>
    </div>
  )
}

export default Navbar