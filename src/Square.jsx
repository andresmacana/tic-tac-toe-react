import React, { useState } from "react";

const Square = ({ value }) => {
  //const [value, setValue] = useState(null);

  function onSquareClick() {
    console.log("clicked");
  }
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
};

export default Square;
