const History = ({ history, jumpTo }) => {
  const moves = history.map((step, move) => {
    const description = move > 0 ? `voltar para a jogada #${move} (linha: ${step.location.row}, coluna: ${step.location.col})` : "Voltar para a jogada inicial";
    return (
        <li key={move}>
            <button onClick={() => jumpTo(move)}>{description}</button>
        </li>
    );
  });

  return (
    <div className="game-info">
        <ol>{moves}</ol>
    </div>
  );
};

export default History