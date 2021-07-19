import React, { Component } from "react";

export class CardSimple1 extends Component {
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
        <section>
          <h2>{this.props.title}</h2>
          <p>{this.props.paraText}</p>
          <a href={this.props.link} className="info-link">
            Learn more...
          </a>
        </section>
      </div>
    );
  }
}

export default CardSimple1;
