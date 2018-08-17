import React, { Component } from 'react';

export class Title extends Component {
  render() {
    return <div className={this.props.className}>{this.props.text}</div>;
  }
}
