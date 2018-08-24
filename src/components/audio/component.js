import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AudioService from '../../services/audioServer';

export class Audio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: false,
    };

    this.sound = AudioService.add(this.props.src);
    //bind this
    this.handelPlay = this.handelPlay.bind(this);
    this.handelStatus = this.handelStatus.bind(this);
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
    this.setStatusF = this.setStatusF.bind(this);
    this.setStatusT = this.setStatusT.bind(this);
  }

  handelPlay() {
    this.handelStatus();
    if (!this.state.status) {
      this.play();
    } else {
      this.pause();
    }
  }

  handelStatus() {
    this.sound.on('play', this.setStatusT);
    this.sound.on('end', this.setStatusF);
    this.sound.on('pause', this.setStatusF);
    this.sound.on('stop', this.setStatusF);
  }

  setStatusF() {
    this.setState({ status: false });
  }

  setStatusT() {
    this.setState({ status: true });
  }

  play() {
    AudioService.stopAll(this.sound);
    this.sound.play();
  }

  pause() {
    this.sound.pause();
  }

  componentWillUnmount() {
    AudioService.remove(this.sound);
  }

  render() {
    const audioPause = this.state.status ? 'audioPause' : '';

    return (
      <div className={this.props.className}>
        <div className={`audio-main ${audioPause}`} onClick={this.handelPlay} />
      </div>
    );
  }
}

Audio.propTypes = {
  src: PropTypes.string,
  className: PropTypes.string
};
