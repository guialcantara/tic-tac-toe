import React, { useEffect, useState } from 'react';

import { Container } from './styles';

export default function App() {
  const emptyBoard = Array(9).fill("");
  const [board, setBoard] = useState(emptyBoard);
  const [currentPlayer, setCurrentPlayer] = useState("O");
  const [winner, setWinner] = useState(null);
  const [oPoints, setOPoints] = useState(0);
  const [xPoints, setXPoints] = useState(0);

  useEffect(checkWinner, [board]);

  function handleCellClick(index) {
    if (winner) return null;
    if (board[index] !== "") return null;

    setBoard(
      board.map((item, itemIndex) => itemIndex === index ? currentPlayer : item)
    );
    setCurrentPlayer(currentPlayer === "X" ? "O" : "X")

  }

  function checkWinner() {
    const winPossibles = [
      [board[0], board[1], board[2]],
      [board[3], board[4], board[5]],
      [board[6], board[7], board[8]],

      [board[0], board[3], board[6]],
      [board[1], board[4], board[7]],
      [board[2], board[5], board[8]],

      [board[0], board[4], board[8]],
      [board[2], board[4], board[6]],
    ];

    winPossibles.forEach(cells => {
      if (cells.every(cell => cell === "O")) {
        setWinner("O");
        setOPoints(oPoints + 1);
      } else {
        checkDraw()
      }
      if (cells.every(cell => cell === "X")) {
        setWinner("X");
        setXPoints(xPoints + 1);
      }
    })


  }

  function checkDraw() {
    if (board.every(cell => cell !== "")) setWinner("D");
  }

  function resetGame() {
    setCurrentPlayer(winner ? (winner !== "D")?winner: "O" : "O");
    setBoard(emptyBoard);
    setWinner(null);
  }

  return (
    <Container >
      <main>
        <h1 className="title">Tic Tac Toe</h1>
        <div className="scoreboard">
          <h2>Scoreboard</h2>
          <div>
            <h2 className="o" >O: {oPoints}</h2>
            <h2 className="x" >X: {xPoints}</h2>
          </div>
        </div>
        <div className={`board ${winner ? "game-over" : ""}`}>
          {board.map((item, index) => (
            <div key={index}
              className={`cell ${item}`}
              onClick={() => handleCellClick(index)}
            >
              {item}
            </div>
          ))}
        </div>


        <footer>
          {winner === "D" && (
            <h2 className="winner-message" >
              <span className={winner}>Draw</span>
            </h2>
          )}
          {winner && winner !== "D" && (
            <h2 className="winner-message" >
              <span className={winner}>{winner}</span> Win !
            </h2>
          )}
          <button onClick={resetGame} > Restart </button>
        </footer>

      </main>
    </Container>
  );
}
