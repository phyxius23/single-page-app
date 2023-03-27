import logo from './logo.svg';
import './App.css';
import ButtonComponent from './components/ButtonComponent';
import ImageComponent from './components/ImageComponent';
import imageLabrador from './image2.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        {/* sotto carico una immagine via cdn */}
        <ImageComponent src="https://images.unsplash.com/photo-1678780593184-c71d50923fd9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80" alt="immagine random" />

        {/* sotto carico una immagine via file che si trova all'interno di assets/img */}
        <ImageComponent src="./assets/img/image1.jpg" alt="immagine random" />

        {/* sotto carico una immagine tramite import */}
        <ImageComponent src={imageLabrador} />

        <ButtonComponent text="Testo del bottone"/>
      </header>
    </div>
  );
}

export default App;
