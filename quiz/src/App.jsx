import { useContext } from 'react';
import { QuizContext } from './context/quiz';
import Welcome from './components/Welcome';
import Question from './components/Question';
import GameOver from './components/GameOver';
import Footer from './components/Footer';
import PickCategory from './components/PickCategory';
import './App.css';

function App() {

  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <>
      <div className="App">
        <h1>Quiz de programação</h1>
        {quizState.gameStage === "Start" && <Welcome />}
        {quizState.gameStage === "Category" && <PickCategory />}
        {quizState.gameStage === "Playing" && <Question />}
        {quizState.gameStage === "End" && <GameOver />}
        <Footer />
      </div>
    </>
  );
};

export default App
