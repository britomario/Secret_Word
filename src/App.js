// CSS
import './App.css';

// React
import { useCallback, useEffect, useState } from 'react';

// Dados
import { wordsList } from './data/words'

// Components
import StartScreen from './components/StartScreen';
import Game from './components/Game';
import GameOver from './components/GameOver';


const stages = [
  {id: 1, name: 'Start'},
  {id: 2, name: 'Game'},
  {id: 3, name: 'End'}
]

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList)

  // starts the secret word game
  const startGame = () => {
    setGameStage(stages[1].name)
  }

  // process the letter input
  const verifyLetter = () => {
    setGameStage(stages[2].name)
  }

  const retry = () => {
    setGameStage(stages[0].name)
  }

  return (
    <div className="App">
      {gameStage === 'Start' && <StartScreen startGame={startGame} />}
      {gameStage === 'Game' && <Game verifyLetter={verifyLetter}/>}
      {gameStage === 'End' && <GameOver retry={retry}/>}
    </div>
  );
}

export default App;
