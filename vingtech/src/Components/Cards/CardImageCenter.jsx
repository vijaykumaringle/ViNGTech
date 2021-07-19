import React, { Component } from "react";

export class CardImageCenter extends Component {
  constructor(props) {
    super(props);
    props = {
      title: "",
      paraText: "",
      link: "",
      imgLink:"",
      imgAlt:""
    };
  }

  render() {
    return (
      <div>
        <section>
          <h2>{this.props.title}</h2>
          <img
            className="section-img profile"
            src={this.props.imgLink}
            alt={this.props.imgAlt}
          />
          <p>{this.props.paraText}</p>
          <a href={this.props.link} className="info-link">
            Learn more...
          </a>
        </section>
      </div>
    );
  }
}

export default CardImageCenter;
