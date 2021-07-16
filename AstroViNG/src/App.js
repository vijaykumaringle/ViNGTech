import React, { Component } from 'react'
import './App.css';

//import components
import { Apd } from './components/Apd'
import { Mrp } from './components/Mrp'
import { Neo } from './components/Neo'

export class App extends Component {

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
    } else {
      return("No Comp to display")
    }
  }


  render() {
    return (
      <div className="App">
        <div className="App-logo1">
            <span>ViNG Tech</span>
          </div>
        <header className="App-header">
          <div style={{display: 'inline-block', fontSize:'2em', textShadow: '2px 2px 4px #453d3d' }}><span className="app-title-astro">Astro</span><span className="app-title-ving">ViNG</span></div>
          <div className="App-TopNav">
            <div className="App-TopNav-Section nav-section-col1">
              <div id="Apd" className="App-TopNav-Item" onClick={this.onClickCompLoad.bind(this)}>Astronomy Pic of the day</div>
              <div id="Neo" className="App-TopNav-Item" onClick={this.onClickCompLoad.bind(this)}>Near Earth Object (Neo)</div>
            {/* </div>
            <div className="App-TopNav-Section nav-section-col2"> */}
              <div id="Mrp" className="App-TopNav-Item" onClick={this.onClickCompLoad.bind(this)}>Mars Rover Photos</div>
              <div id="Insight" className="App-TopNav-Item" onClick={this.onClickCompLoad.bind(this)}>InSight: Mars Weather</div>
            </div>
          </div>
        </header>
        <div className="App-body">
          <div style={{width: "100%"}}>
            {/* <Apd /> */}
            {this.renderComp()}
          </div>
        </div>
        <footer className="App-footer">
          <a
            className="App-link"
            href="https://vingtech.in"
            target="_blank"
            rel="noopener noreferrer"
          >
            ViNG Tech Home
          </a>
          
          <div className="footer-copyright">
          &copy;Vijaykumar - ViNG Tech
          </div>
        </footer>

      </div>
    )
  }
}

export default App

