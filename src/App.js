import './App.css';
import Button from './components/Botton';
import Counter from './components/Counter';
import logoContador from './images/logo-contador.jpg';
import { useState } from 'react';

function App() { 

  const [numClicks, setNumClicks] = useState(0);

  const handleClick = () => {
   setNumClicks(numClicks + 1);
  };

  const restartCounter = () => {
    setNumClicks(0);
  };

  return (
    <div className='App'>
      <div className='logo-container'>
        <img className='logo-counter'
          src={logoContador}
          alt='Counter logo' />
      </div>
      <div className='main-container'>
        <Counter numClicks = {numClicks} />
        <Button
          text='Click'
          itIsClickButton={true}
          handleClick={handleClick} />
        <Button
          text='Restart'
          itIsClickButton={false}
          handleClick={restartCounter} />
      </div>
    </div>
  );
}

export default App;
