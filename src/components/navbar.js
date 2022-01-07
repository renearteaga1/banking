import {useEffect} from 'react';
import { Link, NavLink } from "react-router-dom";
import { Tooltip, Collapse } from 'bootstrap/dist/js/bootstrap.js';

function NavBar(){  

  useEffect(() => {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new Tooltip(tooltipTriggerEl)
    });
  });

  useEffect(() => {
  const navLinks = document.querySelectorAll('.nav-item')
  const menuToggle = document.getElementById('navbarSupportedContent')
  navLinks.forEach((l) => {
      l.addEventListener('click', () => { const bsCollapse = new Collapse(menuToggle); bsCollapse.hide(); })
  })
  })

  return(
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        {/* <a className="navbar-brand" href="#">BadBank</a> */}
        <Link className="navbar-brand" to="/index.html">BadBank</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="ms-auto">
          <ul className="navbar-nav">
            <li className="nav-item">
              {/* <a className="nav-link" href="#/CreateAccount/">Create Account</a> */}
              <NavLink className="nav-link" to="/create-account" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Create new account">Create Account</NavLink>
            </li>            
            {/* <li className="nav-item">             
              <NavLink className="nav-link" to="/login">Login</NavLink>
            </li> */}
            <li className="nav-item">
              {/* <a className="nav-link" href="#/deposit/">Deposit</a> */}
              <NavLink className="nav-link" to="/deposit" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Make deposits">Deposit</NavLink>
            </li>            
            <li className="nav-item">
              {/* <a className="nav-link" href="#/withdraw/">Withdraw</a> */}
              <NavLink className="nav-link" to="/withdraw" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Withdraw your money">Withdraw</NavLink>
            </li>
            {/* <li className="nav-item">              
              <NavLink className="nav-link" to="/balance" >Balance</NavLink>
            </li> */}
            <li className="nav-item">
              {/* <a className="nav-link" href="#/alldata/">AllData</a> */}
              <NavLink className="nav-link" to="/alldata" data-bs-toggle="tooltip" data-bs-placement="bottom" title="See information about accounts">AllData</NavLink>
            </li>          
          </ul>
          </div>
        </div>
        </div>
    </nav>    
    </>
  );
}

export default NavBar;