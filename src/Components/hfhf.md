<nav class="navbar navbar-expand-lg navbar-dark bg-dark ">
  <div class="container-fluid">
    <Link className="navbar-brand" to="/">NewsMonkey</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse d-inline p-2 bg-dark" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item"><a className="nav-link "aria-current="page" href="/">Home</a></li>
         <li className="nav-item"><Link className="nav-link"to="/about">About Us</Link></li>
        <li class="nav-item dropdown">
        
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Category
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
           <li className="nav-item"><Link className="nav-link"to="/business">Business</Link></li>
        <li className="nav-item"><Link className="nav-link"to="/entertainment">Entertainment</Link></li>
        <li className="nav-item"><Link className="nav-link"to="/health">Health</Link></li>
        <li className="nav-item"><Link className="nav-link"to="/science">Science</Link></li>
        <li className="nav-item"><Link className="nav-link"to="/sports">Sports</Link></li>
        <li className="nav-item"><Link className="nav-link"to="/technology">Technology</Link></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav>