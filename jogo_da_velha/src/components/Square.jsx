const Square = ({value, onSquareClick, isWinning }) => {
    return (
        <button className={`square ${isWinning ? "winning-square" : ""}`} onClick={onSquareClick}>
          {value}
        </button>
    );
};

export default Square
