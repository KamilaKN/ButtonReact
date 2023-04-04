import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [counterLeft, setCounterLeft] = useState(0)
  const [counterRight, setCounterRight] = useState(0)
  const [counterHistory, setCounterHistory] = useState('')
  // setTimeout(() => {
  //   setCounter(counter + 1)
  // }, 2000)

  const leftClick = () => {
    setCounterLeft(counterLeft + 1)
    setCounterHistory(counterHistory + 'L')
  }
  const rightClick = () => {
    setCounterRight(counterRight + 1)
    setCounterHistory(counterHistory + 'R' )
  }
  

  return (
    <div className="App">
      <p style={{fontSize: '60px'}}>Клик левой кнопкой {counterLeft} </p>
      <p style={{fontSize: '60px'}}>Клик правой кнопкой {counterRight} </p>
      <button onClick={leftClick}>Клик левой</button>
      <button onClick={rightClick}>Клик правой</button>

      <h1>История кликов{counterHistory}</h1>
    </div>
  );
}

export default App;
