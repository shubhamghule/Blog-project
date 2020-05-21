import React from "react";
 
const NavBar = ()=>{
    return (
        <div>
            {/* <!-- navbar start --> */}
    <nav className="navbar navbar-expand-lg text-white bg-dark">
      <a className="navbar-brand text-success" href="#navbar">Self Help </a>

      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link text-white" href="#home">Home </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#about">About Us</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link text-white" href="#prod">
              Products
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="#meeting">Meeting</a>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>

    {/* <!-- navbar ends --> */}
    </div>
    )
}

export default NavBar;