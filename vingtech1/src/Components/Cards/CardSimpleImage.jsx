import React, { Component } from "react";

export class CardSimpleImage extends Component {
  constructor(props) {
    super(props);
    props = {
      title: "",
      paraText: "",
      link: "",
      imgLink:"",
      styleCust: ''
    };
  }

  render() {
    return (
      <div>
        <section>
          <h2>{this.props.title}</h2>
          <p>{this.props.paraText}</p>
          <img
            className="section-img"
            src={this.props.imgLink}
            alt="important graph"
            style={this.props.styleCust}
          />
          <a href={this.props.link} className="info-link">
            Learn more...
          </a>
        </section>
      </div>
    );
  }
}

export default CardSimpleImage;
