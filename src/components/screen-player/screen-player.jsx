import React, {useEffect} from "react";
import {connect} from "react-redux";
import Video from "../video/video";
import withPlayingVideo from "../../hocs/with-playing-video/with-playing-video";
import {validOneOfType, validShape, validFilm, validFunc} from "../../utils/props";
import {getFilm} from "../../store/selectors";
import {fetchFilm} from "../../store/actions/api-actions";

const VideoPlayer = withPlayingVideo(Video);
const Player = (props) => {
  const {history, match, video, film, loadCurrentFilm} = props;
  const filmId = match.params.id;

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
      match={match}
      film={film}
    />
  );
};

const mapStateToProps = (state) => ({
  film: getFilm(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadCurrentFilm(id) {
    dispatch(fetchFilm(id));
  },
});

Player.propTypes = {
  video: validOneOfType,
  history: validShape,
  match: validShape,
  film: validFilm,
  loadCurrentFilm: validFunc
};

export {Player};
export default connect(mapStateToProps, mapDispatchToProps)(Player);
