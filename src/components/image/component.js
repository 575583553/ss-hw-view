import React, { Component } from 'react';

export class Image extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <img src={this.props.url} alt="" />
      </div>
    );
  }
}
