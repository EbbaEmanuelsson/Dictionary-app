import './App.css';
import Dictionary from './Dictionary';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Dictionary</h1>
        <em>What word do you want to look up?</em>
      </header>
      <Dictionary />
      <footer>
        This project was coded by Ebba Emanuelsson and is{" "}
        <a
          className="App-link"
          href="https://github.com/EbbaEmanuelsson/Dictionary-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          open-sourecd on GitHub
        </a>
      </footer>
    </div>
  );
}

export default App;
