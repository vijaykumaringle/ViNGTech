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
        <section className="section-vingtech">
          <h2 className="h2-vingtech">{this.props.title}</h2>
          <img
            className="section-img-vingtech profile-vingtech"
            src={this.props.imgLink}
            alt={this.props.imgAlt}
          />
          <p>{this.props.paraText}</p>
          <a href={this.props.link} className="info-link-vingtech">
            Learn more...
          </a>
        </section>
      </div>
    );
  }
}

export default CardImageCenter;
