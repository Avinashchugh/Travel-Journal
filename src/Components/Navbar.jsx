import React from "react";
import earth from './images/earth.svg'
const Navbar = () => {
  return (
    <nav>
      <img style={{width: '50px'}} src={earth} alt="" />
      <h3>my travel journal.</h3>
    </nav>
  );
};

export default Navbar;
