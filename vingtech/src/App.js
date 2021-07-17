import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1><span style={{fontWeight: 300}}>ViNG</span><span style={{fontWeight: 500, WebkitTextEmphasis: 'filled'}}>Tech</span></h1>
        <p>
          Helping Connect <i>Technology</i> to Your Business.
        </p>
        <a
          className="App-link"
          href="https://vingtech.in"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn More
        </a>
        <div style={{textAlign: 'left', marginTop:'200px', display: 'inline-block', fontSize:'0.7em'}}>
          <div style={{display: 'inline-block', marginLeft: '30px'}}><a className="App-link" href="./">Home</a></div>
          <div style={{display: 'inline-block', marginLeft: '30px'}}><a className="App-link" href="./">VingTech</a></div>
          <div style={{display: 'inline-block', marginLeft: '30px'}}><a className="App-link" href="./astroving">AstroViNG</a></div>
        </div>
      </header>
      
    </div>
  );
}

export default App;
