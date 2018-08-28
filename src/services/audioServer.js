import { Howl } from 'howler';

class AudioService {
  constructor() {
    this.playList = []; // store all the audios
    this.currentTimeInterval = {}; // store all the intervals
  }

  add(audioSrc, options) {
    if (!audioSrc) return;
    // add to playlist
    const howl = new Howl({
      // make html5 option [false] in iOS for prevent audio cannot play issue
      html5: (options && options.html5) || true,
      // force HTML5 Audio, so that users don't have to
      // wait for the full file to be downloaded and decoded before playing.
      src: audioSrc,
      format: (options && options.format) || ['mp3'],
    });
    this.playList.push(howl);

    return howl;
  }

  remove(howl) {
    const idx = this.playList.indexOf(howl);
    if (idx >= 0) {
      this.playList.splice(idx, 1);
    }
    howl.unload();
  }

  stopAll(audio) {
    this.playList.forEach((howl) => {
      if (audio && howl === audio) {
        howl.pause();
      } else {
        howl.stop();
      }
    });
  }

  pauseAll() {
    this.playList.forEach((howl) => howl.pause());
  }

  destroy() {
    this.playList.forEach((howl) => {
      howl.unload();
    });
    this.playList = [];
  }
}

export default new AudioService();
