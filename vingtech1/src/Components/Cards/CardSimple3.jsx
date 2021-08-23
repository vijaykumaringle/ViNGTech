import React, { Component } from "react";

export class CardSimple2 extends Component {
  constructor(props) {
    super(props);
    props = {
      title: "",
      paraText: "",
      link: "",
    };
  }

  render() {
    return (
      <div>
        <section className="bigtitle">
          <h2 className="bigtitle-title">{this.props.title}</h2>
          <p>{this.props.paraText}</p>
          <a href={this.props.link} className="info-link">
            Learn more...
          </a>
        </section>
      </div>
    );
  }
}

export default CardSimple2;
