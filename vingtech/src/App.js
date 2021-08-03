// import logo from './logo.svg';
import "./reset.css";
import "./App.css";


import img1 from "./images/M31_Galex_960.jpg";
import astronaut from "./images/astronaut_thumbs-up.gif";
import CardSimple1 from "./Components/Cards/CardSimple1";
import CardSimple2 from "./Components/Cards/CardSimple2";
import CardSimple3 from "./Components/Cards/CardSimple3";
import CardSimpleImage from "./Components/Cards/CardSimpleImage";
import CardImageCenter from "./Components/Cards/CardImageCenter";


/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

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
              Helping Connect{" "}
              <span style={{ fontStyle: "italic" }}>Technology</span> to Your
              Business
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
          <a href="/astroving/index.html" className="options-link">
            AstroViNG
          </a>
          <a href="/" className="options-link">
            Blogs
          </a>
          <a href="/" className="options-link">
            Social Media
          </a>
          <a href="/" className="options-link">
            Contant Us
          </a>
        </div>
        
      </header>
      
      <nav className="topnav">
      <div>
        <span style={{cursor: "pointer"}} className="icon" onClick={() => myFunction()}>
          <i className="fa fa-bars"></i>
        </span>
      </div>
        <div id="myLinks">
          <div className="App-Nav-element">
            <a className="App-link" href="/">
              Home
            </a>
          </div>
          <div className="App-Nav-element">
            <a className="App-link" href="/astroving/index.html">
              AstroViNG
            </a>
          </div>
          <div className="App-Nav-element">
            <a className="App-link" href="/astroving/index.html">
              Blogs
            </a>
          </div>
          <div className="App-Nav-element">
            <a className="App-link" href="/astroving/index.html">
              Social Media
            </a>
          </div>
          <div className="App-Nav-element">
            <a className="App-link" href="/astroving/index.html">
              Contact Us
            </a>
          </div>
        </div>
      </nav>
      <main>
        <CardSimple1
          title="About Us"
          paraText={
            <div>
              <p>
                We are like minded technology experts who wants to help
                technology reach business.
              </p>
              <p>
                We are a technology solutions provider with vision of 'Helping
                Connect Technology to Your Business'. <br />
                We believe technology can be the tonic you need to boost your
                busienss growth and keep yourself ahead of competition.
              </p>
              <p>
                And also we love Astrophysics and Cosmos basically Everything
                Space.
              </p>
            </div>
          }
          link="/"
        />

        <CardSimpleImage
          title="Our Love for Space!?"
          paraText={
            <div>
              <p>
                Who doesn't? Space is something everyone dreams to visit and
                everybody wants to be an astronaut (atlast a wish of everyone as
                a child). We are the adults who have that love and desire still
                intact.
              </p>
              <p>
                We have entered into space travel/tourism era and we want to be
                part of it.
              </p>
            </div>
          }
          link="/astroving/index.html"
          imgLink={astronaut}
          styleCust={{ borderRadius: "50%", width: "100%" }}
        />

        <CardImageCenter
          title={
            <a style={{ color: "#fff" }} href="/astroving/index.html">
              AstroViNG Portal
            </a>
          }
          paraText={
            <div>
              <p>
                Explore information about space, stars, planets and much more.{" "}
              </p>

              <li>Astronomy Pic of the Day</li>
              <li>Near Earth Object (Neo)</li>
              <li>Mars Rover Photos</li>
              <li>InSight: Mars Weather</li>
              <br />
              <p>More coming soon!!</p>
            </div>
          }
          link="/astroving/index.html"
          imgLink={img1}
          imgAlt="AstroViNG"
        />

        <CardSimple2
          title="What we do?"
          paraText={
            <div>
              <p>
                We help you understand technology to enhance your business
                growth.{" "}
              </p>

              <li>Technology Adoption Services</li>
              <li>Requirement Analysis & Reporting Services </li>
              <li>Designing Software Blueprint </li>
              <li>IOT Services</li>
              <li>Analysis to Implementation Services</li>
              <li>Data and Market analysis practice solutions</li>
              <li>Digital Marketing Services</li>
            </div>
          }
          link="/"
        />

        <CardSimpleImage
          title="Growing Business with Technology Adoption"
          paraText={
            <div>
              <p>
                Discovering business growth with technology adoption and
                streamlining & automating business processes.
              </p>
              <li>Adoption of Tools</li>
              <li>Digital Marketing</li>
              <li>Automate Processes</li>
              <li>Utilize Data</li>
            </div>
          }
          link="/"
          imgLink="https://emojipedia-us.s3.amazonaws.com/thumbs/120/emoji-one/104/chart-with-upwards-trend_1f4c8.png"
        />

        {/* <CardSimple3
          title="The Title bigtitle"
          paraText="Some Text goes here, some text goes here, some text goes here, some text goes here. bigtitle"
          link="/"
        />
        <CardSimple1
          title="The new title"
          paraText="Some Text goes here, some text goes here, some text goes here, some
          text goes here."
          link="/"
        /> */}
      </main>
      <aside>Related links</aside>
      <footer>
        <div style={{ display: "inline-block", width: "40%" }}>
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
              Helping Connect{" "}
              <span style={{ fontStyle: "italic" }}>Technology</span> to Your
              Business
            </p>
          </div>
        </div>
        <div
          className="footer-copyright"
          style={{ display: "inline-block", width: "60%", textAlign: "left" }}
        >
          Copyright &copy; 2021 ViNG Tech Solutions.
        </div>
      </footer>
    </div>
  );
}

export default App;
