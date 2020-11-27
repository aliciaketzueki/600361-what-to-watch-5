import React, {PureComponent, createRef} from "react";
import {SECOND} from "../../utils/const";

const withHoverMovieCard = (Component) => {
  class WithHoverMovieCard extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isActive: false,
      };

      this.handleMouseEnter = this.handleMouseEnter.bind(this);
      this.handleMouseLeave = this.handleMouseLeave.bind(this);
      this.timer = 0;
      this.video = createRef();
    }

    handleMouseEnter() {
      this.timer = setTimeout(() => {
        this.setState({isActive: true});
        this.video.current.play();
      }, SECOND);
    }

    handleMouseLeave() {
      this.setState({isActive: false});
      this.video.current.pause();
      this.video.current.load();
      clearTimeout(this.timer);
    }

    componentWillUnmount() {
      clearTimeout(this.timer);
    }

    render() {
      return (
        <Component
          {...this.props}
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
          video={this.video}
        >
          <video ref={this.video}/>
        </Component>
      );
    }
  }

  return WithHoverMovieCard;
};

export default withHoverMovieCard;
