// import logo from './logo.svg';
import "./reset.css";
import "./App.css";

import img1 from './images/M31_Galex_960.jpg'

function App() {
  return (
    <div className="App container">
      <header className="App-header">
        <div>
          <div className="logo-div">
            <h2>
              <span style={{ fontWeight: 300 }}>ViNG</span>
              <span style={{ fontWeight: 500, textDecoration: "overline" }}>
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
        <div className="options">
          <a href="/" className="options-link link-active">
            Home
          </a>
          <a href="/" className="options-link">
            About
          </a>
          <a href="/astroving" className="options-link">
            AstroViNG
          </a>
          <a href="/" className="options-link">
            Blog
          </a>
          <a href="/" className="options-link">
            Social Media
          </a>
          <a href="/" className="options-link">
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
            <a className="App-link" href="/">
              Home
            </a>
          </div>
          <div>
            <a className="App-link" href="/">
              VingTech
            </a>
          </div>
          <div>
            <a className="App-link" href="/astroving">
              AstroViNG
            </a>
          </div>
        </div>
      </nav>
      <main>
        <section>
          <h2>The Title</h2>
          <p>
            Some Text goes here, some text goes here, some text goes here, some
            text goes here.
          </p>
          <a href="/" className="info-link">
            Learn more...
          </a>
        </section>
        <section>
          <h2>The Title</h2>
          <p>
            Some Text goes here, some text goes here, some text goes here, some
            text goes here.
          </p>
          <img
            className="section-img"
            src="https://emojipedia-us.s3.amazonaws.com/thumbs/120/emoji-one/104/chart-with-upwards-trend_1f4c8.png"
            alt="important graph"
          />
          <a href="/" className="info-link">
            Learn more...
          </a>
        </section>
        <section>
          <h2>AstroViNG Portal</h2>
          <img
            alt="AstroViNG"
            className="section-img profile"
            src={img1}
          />
          <p>
            Visit our AstroViNG Portal for information regarding Space, Stars, Planets and Cosmos. 
            <br />Explore sections such as Astronomy Pic of the Day, Near Earth Object Tracker, Mars Rover Photos, Insight: Mars Weather. 
            <br />More coming soon.
          </p>
          <a href="/" className="info-link">
            Learn more...
          </a>
        </section>
        <section className="bigbottom">
          <h2>The Title</h2>
          <p>
            Some Text goes here, some text goes here, some text goes here, some
            text goes here.
          </p>
          <a className="bigbottom-link info-link" href="/">
            Learn more...
          </a>
        </section>
        <section className="bigtitle">
          <h2 className="bigtitle-title">The Title</h2>
          <p>
            Some Text goes here, some text goes here, some text goes here, some
            text goes here.
          </p>
          <a href="/" className="info-link">
            Learn more...
          </a>
        </section>
        <section>
          <h2>The Title</h2>
          <p>
            Some Text goes here, some text goes here, some text goes here, some
            text goes here.
          </p>
          <a href="/" className="info-link">
            Learn more...
          </a>
        </section>
      </main>
      <aside>Related links</aside>
      <footer>
      <div>
          <div className="logo-div-footer">
            <h2>
              <span style={{ fontWeight: 300 }}>ViNG</span>
              <span style={{ fontWeight: 500, textDecoration: "overline" }}>
                Tech
              </span>
            </h2>
          </div>
          <div className="logo-tagline-footer">
            <p>
              Helping Connect <i>Technology</i> to Your Business
            </p>
          </div>
        </div>
        <div className="footer-copyright">
          Copyright &copy; 2021 ViNG Tech Solutions. All rigths reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;
