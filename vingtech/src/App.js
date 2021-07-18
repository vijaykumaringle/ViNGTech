// import logo from './logo.svg';
import "./reset.css";
import "./App.css";

function App() {
  return (
    <div className="App container">
      <header className="App-header">
        <div>
          <div className="logo-div">
            <h2>
              <span style={{ fontWeight: 300 }}>ViNG</span>
              <span style={{ fontWeight: 500,  textDecoration: 'overline'}}>
                Tech
              </span>
            </h2>
          </div>
          <div className="logo-tagline-div">
            <p>
              Helping Connect <i>Technology</i> to Your Business
            </p>
          </div>
        </div>
        <div class="options">
          <a href="/" class="options-link link-active">
            Home
          </a>
          <a href="/" class="options-link">
            About
          </a>
          <a href="/" class="options-link">
            AstroViNG
          </a>
          <a href="/" class="options-link">
            Blog
          </a>
          <a href="/" class="options-link">
            Social Media
          </a>
          <a href="/" class="options-link">
            Contant Us
          </a>
        </div>
      </header>
      <nav>
        Navigation
        <div
        //  style={{textAlign: 'left', display: 'inline-block', fontSize:'0.7em'}}
        >
          <div>
            <a className="App-link" href="./">
              Home
            </a>
          </div>
          <div>
            <a className="App-link" href="./">
              VingTech
            </a>
          </div>
          <div>
            <a className="App-link" href="./astroving">
              AstroViNG
            </a>
          </div>
        </div>
      </nav>
      <main>
        <h1>Main</h1>
        <p>
          Vestibulum consectetur sit amet nisi ut consectetur. Praesent
          efficitur, nibh vitae fringilla scelerisque, est neque faucibus quam,
          in iaculis purus libero eget mauris. Curabitur et luctus sapien, ac
          gravida orci. Aliquam erat volutpat. In hac habitasse platea dictumst.
          Aenean commodo, arcu a commodo efficitur, libero dolor mollis turpis,
          non posuere orci leo eget enim. Curabitur sit amet elementum orci,
          pulvinar dignissim urna. Morbi id ex eu ex congue laoreet. Aenean
          tincidunt dolor justo, semper pretium libero luctus nec. Ut vulputate
          metus accumsan leo imperdiet tincidunt. Phasellus nec rutrum dolor.
          Cras imperdiet sollicitudin arcu, id interdum nibh fermentum in.
        </p>
        <a
          className="App-link"
          href="https://vingtech.in"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn More
        </a>
      </main>
      <aside>Related links</aside>
      <footer>Footer</footer>
    </div>
  );
}

export default App;
