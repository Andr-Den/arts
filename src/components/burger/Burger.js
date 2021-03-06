import React from "react";

function Burger({onClick}) {

  return (
    <div className="burger__active">
      <input type="checkbox" id="menu_checkbox" onClick={onClick}/>
      <label for="menu_checkbox">
        <div></div>
        <div></div>
        <div></div>
      </label>
    </div>
  );
}

export default Burger;