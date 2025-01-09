import { useContext, useState } from 'react';
import { QuizContext } from '../context/quiz';
import './Option.css';

const Option = ({ option, selectOption, answer, hide }) => {

    const [quizState, dispatch] = useContext(QuizContext);
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
      selectOption();
      setIsClicked(true);
    };

  return (
    <div className={`option ${quizState.answerSelected && option === answer ? 'correct' : ""} 
    ${quizState.answerSelected && option !== answer ? 'wrong' : ""} ${hide ? "hide" : ""} ${isClicked && 'clicked'}`} onClick={handleClick}>
        <p>{option}</p>
    </div>
  );
};

export default Option