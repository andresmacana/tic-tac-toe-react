import React, { useState } from "react";
import Square from "./Square";
import { useState } from "react";

const Board = () => {
  const [square, setSquare] = useState(Array(9).fill(null));
  return (
    <>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={onSquareClick} />
        <Square value={squares[1]} onSquareClick={onSquareClick} />
        <Square value={squares[2]} onSquareClick={onSquareClick} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={onSquareClick} />
        <Square value={squares[4]} onSquareClick={onSquareClick} />
        <Square value={squares[5]} onSquareClick={onSquareClick} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={onSquareClick} />
        <Square value={squares[7]} onSquareClick={onSquareClick} />
        <Square value={squares[8]} onSquareClick={onSquareClick} />
      </div>
    </>
  );
};

export default Board;
