import React, { Component } from "react";
import {Link} from "react-router-dom";
class Navbar extends Component {
  render() {
    return (
      <div className="navbar bg-primary">
      <div className="logo">
    <h4 style={{margin:'0px',fontSize:"23px"}}>Navbar</h4>
      </div>
      <div className="span">
      <p>Aboutus</p>
      <p>ContactUs</p>
        <Link  to="/Signup" >
      <p className="sign">SignUp</p>
        </Link>
        <Link  to="/Profile" >
        
     <p>  PROFIL</p>
        </Link>
      </div>
      </div>
    );
  }
}
export default Navbar;
