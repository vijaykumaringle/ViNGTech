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
        <section className="section-vingtech">
          <h2 className="h2-vingtech">{this.props.title}</h2>
          <p>{this.props.paraText}</p>
          <img
            className="section-img-vingtech"
            src={this.props.imgLink}
            alt="important graph"
            style={this.props.styleCust}
          />
          <a href={this.props.link} className="info-link-vingtech">
            Learn more...
          </a>
        </section>
      </div>
    );
  }
}

export default CardSimpleImage;
