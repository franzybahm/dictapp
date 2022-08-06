import book from './book.png';
import './App.css';

import Dictonary from './Dictonary.js'

function App() {
  return (
    <div className="container">
      <div className="App">
        <header className="App-header">
          <img src={book} className="App-img img-fluid" alt="man reading a book" />
        </header>
        <Dictonary />
      </div>
      <footer className="footer">
        Coded by <a href="https://github.com/franzybahm/dictonary">Franziska Wolf</a>
      </footer>
    </div>
  );
}

export default App;
