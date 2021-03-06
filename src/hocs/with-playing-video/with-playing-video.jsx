import React, {PureComponent, createRef} from "react";
import {validFunc, validFilm} from "../../utils/props";

const withPlayingVideo = (Component) => {
  class WithPlayingVideo extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isPlaying: false,
        duration: 0,
        progress: 0
      };

      this.onPlay = this.onPlay.bind(this);
      this.onPause = this.onPause.bind(this);
      this.onMouseDown = this.onMouseDown.bind(this);
      this.onFullScreen = this.onFullScreen.bind(this);
      this.video = createRef();
      this.progressBar = createRef();
      this.interval = 0;
    }

    componentDidMount() {
      const video = this.video.current;

      video.onstarted = () => {
        this.setState({
          duration: video.duration,
          isPlaying: true,
          progress: 0,
        });

        video.play();
      };

      video.onended = () => {
        this.setState({
          duration: 0,
          isPlaying: false,
        });

        video.pause();
      };

      video.ontimeupdate = () => {
        this.setState({
          duration: video.duration - video.currentTime,
          progress: video.currentTime / video.duration * 100
        });
      };
    }

    componentWillUnmount() {
      this.video.current.onstarted = null;
      this.video.current.onended = null;
      this.video.current.ontimeupdate = null;
      clearInterval(this.interval);
    }

    onPlay(evt) {
      evt.preventDefault();
      this.setState({isPlaying: true});
      this.video.current.play();
    }

    onPause(evt) {
      evt.preventDefault();
      this.setState({isPlaying: false});
      this.video.current.pause();
    }

    onMouseDown(evt) {
      let target = evt.target;
      let startCoords = evt.clientX;
      const progressBarWidth = this.progressBar.current.offsetWidth;

      document.onmousemove = (moveEvt) => {
        let shift = startCoords - moveEvt.clientX;
        startCoords = moveEvt.clientX;
        let left = target.offsetLeft - shift;
        let percentCoords = left * 100 / progressBarWidth;
        let timeByCoords = left * this.video.current.duration / progressBarWidth;

        if (percentCoords < 100 && percentCoords > 0) {
          this.video.current.currentTime = timeByCoords;

          this.setState({
            duration: this.video.current.duration - this.video.current.currentTime,
            progress: percentCoords
          });
        }
      };

      document.onmouseup = () => {
        document.onmousemove = null;
        document.onmouseup = null;
      };

      document.ondragstart = () => {
        return false;
      };
    }

    onFullScreen() {
      this.video.current.requestFullscreen();
    }

    render() {
      const {isPlaying, duration, progress} = this.state;
      const {onExitBtnClick, film} = this.props;
      const {backgroundImage, videoLink} = film;

      return (
        <Component
          {...this.props}
          isPlaying={isPlaying}
          duration={duration}
          progress={progress}
          progressBar={this.progressBar}
          onPlay={this.onPlay}
          onPause={this.onPause}
          onMouseDown={this.onMouseDown}
          onFullScreen={this.onFullScreen}
          onExitBtnClick={onExitBtnClick}
        >
          <video
            ref={this.video}
            preload="metadata"
            src={videoLink}
            className="player__video"
            poster={backgroundImage}
          />
        </Component>
      );
    }
  }

  WithPlayingVideo.propTypes = {
    onExitBtnClick: validFunc,
    film: validFilm
  };

  return WithPlayingVideo;
};

export default withPlayingVideo;
