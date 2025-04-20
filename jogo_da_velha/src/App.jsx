import { useState } from "react";
import Square from "./components/Square";
import History from "./components/History";
import "./App.css";

function Board() {
  const [ history, setHistory ] = useState([{squares: Array(9).fill(null), location: null}]);
  const [ currentMove, setCurrentMove ] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove].squares;

  function handlePlay(nextSquares, location) {
    const nextHistory = [...history.slice(0, currentMove + 1), { squares: nextSquares, location}];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  };

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  };

  const winnerInfo = calculateWinner(currentSquares);
  const winner = winnerInfo ? winnerInfo.winner : null;
  const winningSquares = winnerInfo ? winnerInfo.line : [];

  let status;
  if (winner) {
    status = "Vencedor: " + winner;
  } else if (currentSquares.every((square) => square !== null)) {
    status = "Empate";
  } else {
    status = "Próximo Jogador: " + (xIsNext ? "X" : "O");
  }

  function handleClick(i) {
    if (currentSquares[i] || winner) {
      return;
    };
    const nextSquares = currentSquares.slice();
    nextSquares[i] = xIsNext ? "X" : "O";

    const location = {
      row: Math.floor(i / 3) + 1,
      col: (i % 3) + 1,
    };

    handlePlay(nextSquares, location);
  };

  return (
    <div className="game">
      <div className="game-board">
        <div className="status">{status}</div>
        <div className="board-row">
          <Square value={currentSquares[0]} onSquareClick={() => handleClick(0)} isWinning={winningSquares.includes(0)} />
          <Square value={currentSquares[1]} onSquareClick={() => handleClick(1)} isWinning={winningSquares.includes(1)} />
          <Square value={currentSquares[2]} onSquareClick={() => handleClick(2)} isWinning={winningSquares.includes(2)} />
        </div>
        <div className="board-row">
          <Square value={currentSquares[3]} onSquareClick={() => handleClick(3)} isWinning={winningSquares.includes(3)} />
          <Square value={currentSquares[4]} onSquareClick={() => handleClick(4)} isWinning={winningSquares.includes(4)} />
          <Square value={currentSquares[5]} onSquareClick={() => handleClick(5)} isWinning={winningSquares.includes(5)} />
        </div>
        <div className="board-row">
          <Square value={currentSquares[6]} onSquareClick={() => handleClick(6)} isWinning={winningSquares.includes(6)} />
          <Square value={currentSquares[7]} onSquareClick={() => handleClick(7)} isWinning={winningSquares.includes(7)} />
          <Square value={currentSquares[8]} onSquareClick={() => handleClick(8)} isWinning={winningSquares.includes(8)} />
        </div>
      </div>
      <History history={history} jumpTo={jumpTo} />
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { winner: squares[a], line: lines[i] };
    };
  };

  return null;
};

export default Board;
