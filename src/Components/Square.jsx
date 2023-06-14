import React from "react";

const Square = ({ squares, index, onSquareClick }) => {
  //const [value, setValue] = useState(null);

  /* unction onSquareClick() {
    console.log("clicked"); */

  return (
    <button className="square" onClick={onSquareClick.bind({}, index)}>
      {squares[index]}
    </button>
  );
};

export default Square;
