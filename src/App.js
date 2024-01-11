import './App.css';
import Button from './components/Botton';
import Counter from './components/Counter';
import logoContador from './images/logo-contador.jpg';

function App() {

  const handleClick = () => {
    console.log('Click');
  }

  const restartCounter = () => {
    console.log('Restart');
  }

  return (
    <div className='App'>
      <div className='logo-container'>
        <img className='logo-counter'
          src={logoContador}
          alt='Counter logo' />
      </div>
      <div className='main-container'>
        <Counter numClicks = '5' />
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
