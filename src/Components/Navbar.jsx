import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Photo-App</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <Link class="nav-link" to="/">Add Photo</Link>
        <Link class="nav-link" to="/Search">Search Photo</Link>
        <Link class="nav-link" to="/Delete">Delete Photo</Link>
        <Link class="nav-link" to="/View">View Photos</Link>
      </div>
    </div>
  </div>
</nav>
</div>
)}

export default Navbar
