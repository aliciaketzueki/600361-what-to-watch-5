import React from "react";
import moment from "moment";
import {validFunc, validBool, validNum, validOneOfType, validFilm} from "../../utils/props";
import {SECOND} from "../../utils/const";

const VideoPlayer = (props) => {
  const {onExitBtnClick, isPlaying, duration, progress, video, progressBar, onPlay, onPause, onMouseDown, onFullScreen, film} = props;

  const {videoLink, backgroundImage, name} = film;

  return (
    <div className="player">
      <video
        ref={video}
        preload="metadata"
        src={videoLink}
        className="player__video"
        poster={backgroundImage}
      />

      <button type="button" className="player__exit" onClick={onExitBtnClick}>Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress
              className="player__progress"
              value={progress.toFixed(2)}
              max="100"
              ref={progressBar}
            />
            <div
              className="player__toggler"
              style={{left: (progress.toFixed(2)) + `%`}}
              onMouseDown={onMouseDown}
            >
              Toggler
            </div>
          </div>
          <div className="player__time-value">{moment.utc((duration) * SECOND).format(`HH:mm:ss`, {trim: false})}</div>
        </div>

        <div className="player__controls-row">
          {
            !isPlaying &&
            <button
              type="button"
              className="player__play"
              onClick={onPlay}
            >
              <svg viewBox="0 0 19 19" width="19" height="19">
                <use xlinkHref="#play-s" />
              </svg>
              <span>Play</span>
            </button> ||
            <button
              type="button"
              className="player__play"
              onClick={onPause}
            >
              <svg viewBox="0 0 14 21" width="14" height="21">
                <use xlinkHref="#pause"></use>
              </svg>
              <span>Pause</span>
            </button>
          }
          <div className="player__name">{name}</div>

          <button
            type="button"
            className="player__full-screen"
            onClick={onFullScreen}
          >
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen" />
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
};

VideoPlayer.propTypes = {
  onExitBtnClick: validFunc,
  onPlay: validFunc,
  onPause: validFunc,
  onMouseDown: validFunc,
  onFullScreen: validFunc,
  isPlaying: validBool,
  duration: validNum,
  progress: validNum,
  video: validOneOfType,
  progressBar: validOneOfType,
  // film: validFilm
};


export default VideoPlayer;
