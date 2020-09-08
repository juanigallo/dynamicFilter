import React from "react";

function Navbar(props) {
  function handleChange(e) {
    props.handleCallback(e.target.value);
  }

  return <input type="text" onChange={handleChange} />;
}

export default Navbar;
