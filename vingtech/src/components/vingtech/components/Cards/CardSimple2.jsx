import React, { Component } from "react";

export class CardSimple2 extends Component {
  constructor(props) {
    super(props);
    props = {
      title: "",
      paraText: null,
      link: "",
    };
  }

  render() {
    return (
      <div>
        <section className="bigbottom-vingtech section-vingtech">
          <h2 className="h2-vingtech">{this.props.title}</h2>
          <p>{this.props.paraText}</p>
          <a href={this.props.link} className="bigbottom-link-vingtech info-link-vingtech">
            Learn more...
          </a>
        </section>
      </div>
    );
  }
}

export default CardSimple2;
