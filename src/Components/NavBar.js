import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class NavBar extends Component {
    render() {
        return (
            <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">NewsMonkey</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse .bg-dark" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item"><a className="nav-link "aria-current="page" href="/">Home</a></li>
        <li className="nav-item dropdown ">
          <a className="nav-link dropdown-toggle bg-dark" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Category
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
           <li className="nav-item p-2 bd-highlight "><Link className="nav-link bg-dark text-white"to="/business">Business</Link></li>
        <li className="nav-item p-2 bd-highlight "><Link className="nav-link bg-dark text-white"to="/entertainment">Entertainment</Link></li>
        <li className="nav-item  p-2 bd-highlight"><Link className="nav-link bg-dark text-white"to="/health">Health</Link></li>
        <li className="nav-item p-2  bd-highlight "><Link className="nav-link bg-dark text-white"to="/science">Science</Link></li>
        <li className="nav-item  p-2 bd-highlight"><Link className="nav-link bg-dark text-white"to="/sports">Sports</Link></li>
        <li className="nav-item p-2 bd-highlight "><Link className="nav-link bg-dark text-white"to="/technology">Technology</Link></li>
      </ul>
      
    </li>
  </ul>
  </div>
</div>
</nav>

</div>
)
    }
}