import React, {useEffect} from "react";
import {connect} from "react-redux";
import Video from "../video/video";
import withPlayingVideo from "../../hocs/with-playing-video/with-playing-video";
import {validOneOfType, validShape, validFilm, validFunc, validNum} from "../../utils/props";
import {getFilm} from "../../store/selectors";
import {fetchFilm} from "../../store/actions/api-actions";

const VideoPlayer = withPlayingVideo(Video);

const Player = (props) => {
  const {history, filmId, video, film, loadCurrentFilm} = props;

  useEffect(() => {
    loadCurrentFilm(filmId);
  }, [filmId]);

  if (!film) {
    return null;
  }

  const onExitBtnClick = () => {
    history.goBack();
  };

  return (
    <VideoPlayer
      onExitBtnClick={onExitBtnClick}
      video={video}
      film={film}
    />
  );
};

Player.propTypes = {
  video: validOneOfType,
  history: validShape,
  filmId: validNum,
  film: validFilm,
  loadCurrentFilm: validFunc
};

const mapStateToProps = (state) => ({
  film: getFilm(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadCurrentFilm(id) {
    dispatch(fetchFilm(id));
  },
});

export {Player};
export default connect(mapStateToProps, mapDispatchToProps)(Player);
