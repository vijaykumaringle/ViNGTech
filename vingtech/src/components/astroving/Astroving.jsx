import React, { Component } from 'react'
import './astroving.css';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//import components
import { Apd } from './components/Apd'
import { Mrp } from './components/Mrp'
import { Neo } from './components/Neo'
import { InsightMarsWeather } from './components/InsightMarsWeather'

export class Astroving extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedComp: "Apd",
      checkNav: true
    };
  }

  //onClick method
  onClickCompLoad(event) {
    console.log(event.target.id);
    this.setState({
      selectedComp: event.target.id
    });
  }

  //renderComp
  renderComp() {
    if(this.state.selectedComp === "Apd"){
      return(<Apd/>)
    } else if(this.state.selectedComp === "Mrp"){
      return(<Mrp/>)
    } else if(this.state.selectedComp === "Neo"){
      return(<Neo />)
    } else if(this.state.selectedComp === "InsightMarsWeather"){
      return(<InsightMarsWeather />)
    } else {
      return("No Comp to display")
    }
  }


  render() {
    return (
      <div className="App-astro">
        <div className="App-logo1-astro">
            <Link to="/"><span style={{color: "#000"}}>ViNG Tech</span></Link>
          </div>
        <header className="App-header-astro">
          <div style={{display: 'inline-block', fontSize:'2em', textShadow: '2px 2px 4px #453d3d' }}><span className="app-title-astro">Astro</span><span className="app-title-ving-astro">ViNG</span></div>
          <div className="App-TopNav-astro">
            <div className="App-TopNav-Section-astro nav-section-col1-astro">
              <div id="Apd" className="App-TopNav-Item-astro" onClick={this.onClickCompLoad.bind(this)}>Astronomy Pic of the day</div>
              <div id="Neo" className="App-TopNav-Item-astro" onClick={this.onClickCompLoad.bind(this)}>Near Earth Object (Neo)</div>
            {/* </div>
            <div className="App-TopNav-Section nav-section-col2"> */}
              <div id="Mrp" className="App-TopNav-Item-astro" onClick={this.onClickCompLoad.bind(this)}>Mars Rover Photos</div>
              <div id="InsightMarsWeather" className="App-TopNav-Item-astro" onClick={this.onClickCompLoad.bind(this)}>InSight: Mars Weather</div>
            </div>
          </div>
        </header>
        <div className="App-body-astro">
          <div style={{width: "100%"}}>
            {/* <Apd /> */}
            {this.renderComp()}
          </div>
        </div>
        <footer className="App-footer-astro">
          <a
            className="App-link-astro"
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            style={{color: "#fff"}}
          >
            ViNG Tech
          </a>
          
          <div className="footer-copyright-astro">
          &copy;2021 Created and Designed by Vijaykumar
          </div>
        </footer>

      </div>
    )
  }
}

export default Astroving

