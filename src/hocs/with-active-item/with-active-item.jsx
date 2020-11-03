import React, {PureComponent} from "react";

const withActiveItem = (Component) => {
  class WithActiveItem extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        tabIndex: 0
      };

      this.onClick = this.onClick.bind(this);
    }

    onClick(index) {
      this.setState({tabIndex: index});
    }

    render() {
      const {tabIndex} = this.state;

      return (
        <Component
          {...this.props}
          tabIndex={tabIndex}
          onClick={this.onClick}
        />
      );
    }
  }

  return WithActiveItem;
};

export default withActiveItem;
