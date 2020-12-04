import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to the world of Clint Vetter
        </p>
        <img src="clint.jpg" alt="clint" height={800} width={600}/>
      </header>
    </div>
  );
}

export default App;
