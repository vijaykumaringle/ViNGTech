import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../App.css";

function HomePortal() {
  return (
      <div>
        {/* start */}
        <div className="bg-body">
          <svg viewBox="0 0 200 200">
            <defs>
              <pattern
                id="patt1"
                x="0"
                y="0"
                width="60"
                height="60"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M0,7.5C12.9,7.5 17.1,22.5 30,22.5C42.9,22.5 47.1,7.5 60,7.5"
                  stroke="#f00"
                  strokeWidth="1"
                  fill="transparent"
                ></path>
              </pattern>
              <pattern
                id="patt2"
                x="30"
                y="15"
                width="60"
                height="60"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M0,7.5C12.9,7.5 17.1,22.5 30,22.5C42.9,22.5 47.1,7.5 60,7.5"
                  stroke="#00f"
                  strokeWidth="1"
                  fill="transparent"
                ></path>
              </pattern>
              <pattern
                id="patt3"
                x="0"
                y="30"
                width="60"
                height="60"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M0,7.5C12.9,7.5 17.1,22.5 30,22.5C42.9,22.5 47.1,7.5 60,7.5"
                  stroke="#0f0"
                  strokeWidth="1"
                  fill="transparent"
                ></path>
              </pattern>
              <pattern
                id="patt4"
                x="30"
                y="45"
                width="60"
                height="60"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M0,7.5C12.9,7.5 17.1,22.5 30,22.5C42.9,22.5 47.1,7.5 60,7.5"
                  stroke="#fc0"
                  strokeWidth="1"
                  fill="transparent"
                ></path>
              </pattern>
              <linearGradient id="grad1" x1="0" x2="0.15" spreadMethod="repeat">
                <stop offset="0%" stopColor="white" stopOpacity="1"></stop>
                <stop offset="75%" stopColor="white" stopOpacity="0"></stop>
              </linearGradient>
              <linearGradient
                id="grad2"
                x1="0.5"
                x2="0.65"
                spreadMethod="repeat"
              >
                <stop offset="0%" stopColor="white" stopOpacity="1"></stop>
                <stop offset="75%" stopColor="white" stopOpacity="0"></stop>
              </linearGradient>
            </defs>
            <mask id="mask1">
              <rect fill="url(#grad1)" width="400" height="200"></rect>
            </mask>
            <mask id="mask2">
              <rect fill="url(#grad2)" width="400" height="200"></rect>
            </mask>
            <rect
              id="squiggle1"
              mask="url(#mask1)"
              fill="url(#patt1)"
              width="200"
              height="200"
            ></rect>
            <rect
              id="squiggle2"
              mask="url(#mask2)"
              fill="url(#patt2)"
              width="200"
              height="200"
            ></rect>
            <rect
              id="squiggle3"
              mask="url(#mask1)"
              fill="url(#patt3)"
              width="200"
              height="200"
            ></rect>
            <rect
              id="squiggle4"
              mask="url(#mask2)"
              fill="url(#patt4)"
              width="200"
              height="200"
            ></rect>
          </svg>
        </div>
        {/* end */}
        <div className="App1">
          <header className="App-header1">
            <div>
              <nav>
                {/* <div className="navItem">
                  <Link to="/">Home</Link>
                </div> */}
                <div className="navItem navItem1">
                  {/* <div className="navItem1bg"></div> */}
                  <div>
                    <Link to="/astroving">
                      <div className="navItem-Title">AstroViNG</div>
                    </Link>
                  </div>
                </div>
                <div className="navItem navItem2">
                  {/* <div className="navItem2bg"></div> */}
                  <Link to="/vingtech">
                    <div className="navItem-Title">ViNGTech</div>
                  </Link>
                </div>
              </nav>
            </div>
          </header>
          <footer className="App-footer1">
            <div style={{ fontSize: "1.4em" }}>ViNG Tech</div>
            <div style={{ fontSize: "0.8em" }}>
            &copy;2021 Created and Designed by Vijaykumar
            </div>
          </footer>
        </div>
      </div>
  );
}

export default HomePortal;

