import './App.css';
import Dictionary from './Dictionary';

function App() {
  return (
    <div className="App">
      <header className="App-header">Dictionary</header>
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
